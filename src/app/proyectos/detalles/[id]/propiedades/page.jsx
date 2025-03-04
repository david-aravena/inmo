"use client"
import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
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

  return(
    <div className={styles.panel}>
      <div className={styles.panelContainer}>
        <div className={styles.linksSectionsContainer}>
          <Link href={`/proyectos/`}>
            <button style={{padding: "1rem", background:"none", color:"white", border:"none", flex:"1", cursor: "pointer"}}>
                Proyectos
            </button>
          </Link>
          <Link href={`/proyectos/detalles/${id}`}>
            <button style={{padding: "1rem", background:"none", color:"white", border:"none", flex:"1", cursor: "pointer"}}>
                Proyecto
            </button>
          </Link>
          <Link href={`#`}>
            <button style={{padding: "1rem", background:"#992264", color:"white", border:"none", flex:"1", cursor: "pointer"}}>
              Propiedades
            </button>
          </Link>
          <Link href={`/proyectos/detalles/${id}/nueva-propiedad`}>
            <button style={{padding: "1rem", background:"none", color:"white", border:"none", flex:"1", cursor: "pointer"}}>
              Nueva propiedad
            </button>
          </Link>
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