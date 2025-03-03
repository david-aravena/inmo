"use client"
import { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import AnimatedInput from 'src/components/animatedInput'
import { useRouter, useParams } from "next/navigation";
import {saveNewProperty} from 'src/utils/saveProperty/'
import { useAuth } from "src/context/auth";
import styles from './newProperty.module.css'

export default function NewProperty(){

  const { currentUser } = useAuth();
  const {id} = useParams();
  const router = useRouter();
  const formRef = useRef(null);

  const onSubmit = async () => {
    if (!formRef.current) return {};
    const formData = new FormData(formRef.current);
    const dataObj = {};
    for (let [key, value] of formData.entries()) {
      if (key === "cantidadDormitorios" || key === "cantidadBaños" || key === "cantidadEstacionamiento") {
        dataObj[key] = Number(value);
      } else if (key === "precioPesos" || key === "metrosCuadrados" || key === "precioUf") {
        dataObj[key] = parseFloat(parseFloat(value).toFixed(1)); 
      } else {
        dataObj[key] = value;
      }
    }

    saveNewProperty({...dataObj, id:0, latitud:"9032983289", longitud:"9803289238932", precioUF:100.20, cuentaPiscina:true, cuentaBodega: false, cuentaGimnasio:false ,ProyectoId: parseInt(id, 10) ,images: images.map(({ objectUrl, ...rest }) => rest)}, currentUser.token);
  }


  useEffect(() => {
    if (!currentUser) {
        router.push("/autenticacion");
    }
  }, [router]);

  return(
    <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className={`${styles.newProjectContainer} newProjectContainer`}>
        <div className={styles.linksSectionsContainer}>
          <Link href={`/proyectos/`}>
            <button style={{padding: "1rem", background:"none", color:"white", border:"none", flex:"1", cursor: "pointer"}}>
                Proyectos
            </button>
          </Link>
          <Link href={`/proyectos/detalles/1`}>
            <button style={{padding: "1rem", background:"none", color:"white", border:"none", flex:"1", cursor: "pointer"}}>
                Proyecto
            </button>
          </Link>
          <Link href="/proyectos/nueva-propiedad">
            <button style={{padding: "1rem", background:"#992264", color:"white", border:"none", flex:"1", cursor: "pointer"}}>
              Propiedades
            </button>
          </Link>
        </div>

        <div className={styles.listProjectsContainer}>
          <div className={styles.formContainer}>
            <form className={styles.form} ref={formRef}>
              <AnimatedInput nameInput="precioPesos" textInput="Valor" type="number" />
              <AnimatedInput nameInput="direccion" textInput="Direccion" type="text" />
              <AnimatedInput nameInput="tipoInmueble" textInput="Tipo" type="select" options={["casa", "departamento", "terreno", "oficina"]} />
              <AnimatedInput nameInput="estadoInmueble" textInput="Estado" type="select" options={["venta", "arriendo"]} />
              <AnimatedInput nameInput="metrosCuadrados" textInput="Mts" type="number" />
              <AnimatedInput nameInput="cantidadDormitorios" textInput="Dormitorios" type="number" />
              <AnimatedInput nameInput="cantidadBaños" textInput="Baños" type="number" />
              <AnimatedInput nameInput="cantidadEstacionamiento" textInput="Estacionamiento" type="number" />
            </form>
            <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
              <button onClick={() => onSubmit()}>Crear proyecto</button>
            </div>
          </div>
        </div>



        

      </div>
    </div>
  )
}
