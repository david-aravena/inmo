"use client"
import Link from "next/link";
import {useState } from "react"
import { useParams } from "next/navigation";
import AnimatedInput from "src/components/animatedInput"
import ImageEditor from 'src/components/imageEditor/'
import styles from './detailsProject.module.css'

export default function DetailsProject(){

  const [isCreateProperty, setIsCreateProperty] = useState(false);
  const [imagesSelected, setImagesSelected] = useState([])
  const {id} = useParams();



  return(
    <div className={styles.panel}>
      <div className={styles.panelContainer}>
        <div className={styles.linksSectionsContainer}>
            <Link href={`/proyectos/nuevo-proyecto/`}>
                <button style={{padding: "1rem", background:"#992264", color:"white", border:"1px solid var(--input-border)", borderLeft:"none", borderRight:"none", flex:"1", cursor: "pointer"}}>
                    Propiedades
                </button>
            </Link>
        </div>

        <div className={styles.dataContainer}>

          <div style={{width:"100%", height:"100%", overflow:"auto"}}>
            <div>
              <button onClick={() => setIsCreateProperty(!isCreateProperty)} style={{padding: "1rem", background:"#992264", color:"white", border:"1px solid var(--input-border)", borderLeft:"none", borderRight:"none", flex:"1", cursor: "pointer"}}>
                {isCreateProperty ? "Lista" : "Crear"}
              </button>
            </div>
            {isCreateProperty && (
              <div className={styles.formContainer}>
                <div style={{width:"50%"}}>
                  <form>
                    <AnimatedInput nameInput="precioPesos" textInput="Valor" type="number" />
                    <AnimatedInput nameInput="direccion" textInput="Direccion" type="text" />
                    <AnimatedInput nameInput="tipoInmueble" textInput="Tipo" type="select" options={["casa", "departamento", "terreno", "oficina"]} />
                    <AnimatedInput nameInput="estadoInmueble" textInput="Estado" type="select" options={["venta", "arriendo"]} />
                    <AnimatedInput nameInput="metrosCuadrados" textInput="Mts" type="number" />
                    <AnimatedInput nameInput="cantidadDormitorios" textInput="Dormitorios" type="number" />
                    <AnimatedInput nameInput="cantidadBaños" textInput="Baños" type="number" />
                    <AnimatedInput nameInput="cantidadEstacionamiento" textInput="Estacionamiento" type="number" />
                  </form>
                </div>
                <div style={{width:"50%", border:"2px solid yellow"}}>
                  <ImageEditor width={400} height={500} />
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}