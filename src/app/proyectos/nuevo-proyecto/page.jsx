"use client"
import { useState, useEffect, useRef } from 'react';
import AnimatedInput from 'src/components/animatedInput'
import {saveNewProject} from "src/utils/saveNewProject/"
import { useRouter } from "next/navigation";
import ImageEditor from 'src/components/imageEditor/'
import { useAuth } from "src/context/auth";
import styles from './newProject.module.css'

export default function NewProject(){

  const [imageSelected, setImageSelected] = useState(null);
  const { currentUser } = useAuth();
  const router = useRouter();
  const formRef = useRef(null);

  const scrollToEnd = () => {
    const container = document.querySelector(".newProjectContainer");
    if (container) {
      container.scrollTo({
        left: container.scrollWidth,
        behavior: "smooth"
      });
    }
  };

  const scrollToStart = () => {
    const container = document.querySelector(".newProjectContainer");
    if (container) {
      container.scrollTo({
        left: 0,
        behavior: "smooth"
      });
    }
  };

  const onSubmit = () => {
    if (!formRef.current) return {};
    const formData = new FormData(formRef.current);
    const dataObj = {regionId: 1, comunaId:2, estadoProyecto:"Abierto", latitud: null, longitud: null, vigente: true, empresaId:2};
    for (let [key, value] of formData.entries()) {
      dataObj[key] = value;
    }
    saveNewProject({...dataObj, id:0, usuarioId: parseInt(currentUser.id, 10)}, currentUser.token);
  }
  

  useEffect(() => {
    if (!currentUser) {
        router.push("/autenticacion");
    }
  }, [router]);

  return(
    <div style={{width:"100%", height:"100%", display:"flex", justifyContent: "center", alignItems: "center"}}>
      <div className={`${styles.newProjectContainer} newProjectContainer`}>

          <div className={styles.formContainer}>
            <form className={styles.form} ref={formRef}>
                <AnimatedInput nameInput="nombre" type="text" textInput="Nombre" />
                <AnimatedInput nameInput="direccion" type="text" textInput="Dirección" />
                <div style={{width:"100%", display:"flex", flexDirection:"column"}}>
                  <AnimatedInput nameInput="fechaInicio" type="date" textInput="Fecha inicio" />
                  <AnimatedInput nameInput="fechaFin" type="date" textInput="Fecha termino" />
                </div>
                <AnimatedInput nameInput="descripcion" type="textarea" textInput="Descripción" />
            </form>
            <div style={{display:"flex", justifyContent:"flex-end", width:"100%", paddingRight:"2rem"}}>
              <button onClick={() => scrollToEnd()}>paso 2</button>
            </div>
          </div>
          
          <div className={styles.imageFormContainer}>
            <div className={styles.imageContainer}>
              <ImageEditor width={400} height={500} onSaveImage={setImageSelected} />
            </div>
            <div style={{display:"flex", justifyContent:"space-around", width:"100%", paddingRight:"2rem"}}>
              <button onClick={() => scrollToStart()}>paso 1</button>
              <button onClick={() => onSubmit()}>Crear proyecto</button>
            </div>
          </div>

      </div>
    </div>
  )
}
