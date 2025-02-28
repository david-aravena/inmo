"use client"
import { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import AnimatedInput from 'src/components/animatedInput'
import { useRouter } from "next/navigation";
import ImageEditor from 'src/components/imageEditor/'
import {saveNewProperty} from 'src/utils/saveProperty/'
import { useAuth } from "src/context/auth";
import styles from './newProperty.module.css'

export default function NewProperty(){

  const [images, setImages] = useState([]);
  const { currentUser } = useAuth();
  const router = useRouter();
  const formRef = useRef(null);

  const scrollToEnd = () => {
    const container = document.querySelector(".newPropertyContainer");
    if (container) {
      container.scrollTo({
        left: container.scrollWidth,
        behavior: "smooth"
      });
    }
  };

  const scrollToStart = () => {
    const container = document.querySelector(".newPropertyContainer");
    if (container) {
      container.scrollTo({
        left: 0,
        behavior: "smooth"
      });
    }
  };

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

    console.log({...dataObj, images: images.map(({ objectUrl, ...rest }) => rest)});

    // saveNewProperty({...dataObj, ...binaryDataArray, id:0}, currentUser.token);
  }

  const handleImageChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newImages = Array.from(files).map((file) => ({
        file: file,
        objectUrl: URL.createObjectURL(file),
      }));
  
      setImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  useEffect(() => {
    if (!currentUser) {
        router.push("/autenticacion");
    }
  }, [router]);

  return(
    <div className={styles.panel}>
      <div className={`${styles.panelContainer} newPropertyContainer`}>
        <div className={styles.linksSectionsContainer}>
          <Link href={`/proyectos/detalles/1`}>
            <button style={{padding: "1rem", background:"none", color:"white", border:"1px solid var(--input-border)", borderLeft:"none", borderRight:"none", flex:"1", cursor: "pointer"}}>
                Proyecto
            </button>
          </Link>
          <Link href="/proyectos/nueva-propiedad">
            <button style={{padding: "1rem", background:"#992264", color:"white", border:"none", flex:"1", cursor: "pointer"}}>
              Propiedades
            </button>
          </Link>
        </div>

        <div className={styles.dataContainer}>
          <div className={styles.formContainer}>
            <div style={{display:"flex", justifyContent:"flex-end", width:"100%", paddingRight:"2rem"}}>
              <button style={{padding:"8px", fontSize:"1rem"}} onClick={() => scrollToEnd()}>Subir imagenes</button>
            </div>
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
          </div>
          <div style={{width:"50%", color:"white", padding:"0 2rem"}}>
            <div style={{display:"flex", justifyContent:"space-between"}}>
              <div style={{display:"flex", flexDirection:"column"}}>
                <button type="button" onClick={() => scrollToStart()}> {"< Formulario"} </button>
                <input type="file" multiple onChange={(e) => handleImageChange(e)} />
              </div>
              <button onClick={() => onSubmit()}>Guardar</button>
            </div>
            <ImageEditor images={images} />
          </div>
        </div>
      </div>
    </div>
  )
}
