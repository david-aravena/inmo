import {getItems} from 'src/utils/getItems/'
import Link from "next/link";
import Image from "next/image";
import Search from 'src/components/searchItems/';
import CardPropertyUI from "src/ui/properties/CardPropertyUI";
import ChangeContentBar from 'src/components/changeContentBar/'
import styles from './page.module.css'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Home() {

  const icons = [
    {
        url: "/",
        svg: "/svg/users.svg"
    },
    {
        url: "/properties",
        svg: "/svg/realstate.svg"
    },
    {
        url: "/info",
        svg: "/svg/info.svg"
    }
]

  await delay(2000);
  const properties = await getItems("properties")

  return(
    <>
      <div className="searchContainer">
        <Link href={`/buscador`}>
            <Search />
        </Link>
      </div>

      <div style={{display:"flex", flexWrap: 'wrap', justifyContent:"center"}}>
        {properties.map((item, index) => (
          <Link href={`/show/${item.id}`} key={index}>
            <CardPropertyUI item={item} index={index}>
              <Image
                src={item.image}
                alt="error"
                layout="fill"
                objectFit="cover"
              />
            </CardPropertyUI>
          </Link>
        ))}
        <div className="changeContentBarContainer">
          <ChangeContentBar icons={icons} />
        </div>
      </div>
    </>
  );
}
