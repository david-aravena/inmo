import Image from 'next/image'
import {getItems} from 'src/utils/getItems/'
import CardPropertyUI from 'src/ui/properties/CardPropertyUI'
import styles from "./page.module.css";

export default async function Home() {

  const properties = await getItems("properties")

  return(
    <div style={{display:"flex", flexWrap: 'wrap', justifyContent:"center"}}>
      {properties.map((item, index) => (
        <CardPropertyUI key={index} item={item} index={index}>
          <Image
            src={item.image}
            alt="error"
            layout="fill"
            objectFit="cover"
          />
        </CardPropertyUI>
      ))}
    </div>
  );
}
