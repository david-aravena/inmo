"use client"
import { useState } from "react"
import Link from "next/link";
import Image from "next/image";
import CardPropertyUI from 'src/ui/properties/CardPropertyUI'
import CardSocialUI from 'src/ui/social/CardSocialUI';

export default function ShowItems({user, styles}){

  const [section,setSection] = useState(true)

  return(
    <>
      <div style={{width:"100%", display:"flex", justifyContent:"flex-end", marginBottom:"8px", padding:"0 8px"}}>
        <button className="buttonsHot" onClick={() => setSection(!section)}>{section ? "ver publicaciones" : "ver propiedades"}</button>
      </div>
      {section ?
        <div className={styles.itemsUserContainer}>
          {user.propertiesUser.map((property) => (
            <Link href={`/show/${property.id}`}>
              <CardPropertyUI item={property}>
                <Image
                  src={property.image}
                  alt="error"
                  layout="fill"
                  objectFit="cover"
                />
              </CardPropertyUI>
            </Link>
          ))}
        </div>
      :
        <div className={styles.publicationsUserContainer}>
          {user.publicationsUser.map((publication) => (
            <CardSocialUI item={publication}>

            </CardSocialUI>
          ))}
        </div>
      }
      

      
    </>
  )
}