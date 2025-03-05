"use client"
import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Links from 'src/components/links/'
import { useEffect } from 'react';
import {getProperties} from 'src/utils/getPropertiesProject/'
import styles from './properties.module.css'

export default function ListProperties(){
  const [properties, setProperties] = useState([])
  const {id} = useParams();

  useEffect(() => {
    getProperties(id).then((result) => {
      setProperties(result)
    })
  }, [])

  const links = [
    {text: "Proyectos", href:"/proyectos/"},
    {text: "Proyecto", href:`/proyectos/detalles/${id}`},
    {text: "Propiedades", href:`#`},
    {text: "Crear propiedades", href:`/proyectos/detalles/${id}/nueva-propiedad`}
  ]

  return(
    <div className={styles.panel}>
      <div className={styles.panelContainer}>
        <div style={{width:"100%"}}>
          <Links styles={styles} data={links} />
        </div>

        <div className={styles.listProjectsContainer}>
          {properties.length ? 
            <>
              {properties.map((property, index) => (
                <Link href={`/show/${property.id}`}>
                    <CardPropertyUI item={property} index={index}>
                      <Image
                        src={property.image}
                        alt="error"
                        layout="fill"
                        objectFit="cover"
                      />
                    </CardPropertyUI>
                </Link>
              ))}
            </>
          :
              <img src="/images/inmobiliarioLogo.png" alt="" />
          }
        </div>


      </div>
    </div>
  )
}