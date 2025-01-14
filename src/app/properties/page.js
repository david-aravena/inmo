import {getItems} from 'src/utils/getItems/'
import Link from "next/link";
import Image from "next/image";
import CardPropertyUI from "src/ui/properties/CardPropertyUI";
import styles from './page.module.css'

export default async function Home() {

  const properties = await getItems("properties")

  return(
    <div style={{display:"flex", flexWrap: 'wrap', justifyContent:"center", marginBottom:"3rem"}}>
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
      
    </div>
  );
}
