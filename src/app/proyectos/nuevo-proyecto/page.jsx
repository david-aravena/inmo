"use client"
import { useState, useEffect } from 'react';
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

  const getInputsValue = (e) => {
    e.preventDefault();
    const formData = {id:0};
    const inputs = e.target.querySelectorAll("input, textarea, select");
    
    const userId = currentUser ? currentUser.id : null;
  
    inputs.forEach(input => {
      if(input.type !== "file" || input.type !== "submit" ){
        formData[input.name] = input.value;
      }
    });

    if (imageSelected) {
      formData["imagen"] = imageSelected;
      console.log(formData);
    };

    saveNewProject({...formData, usuarioId: userId})
  };

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
  

  useEffect(() => {
          if (!currentUser) {
              router.push("/autenticacion");
          } else {
              // getProjects(currentUser.id).then((result) => {
              //     setProjects(result)
              // })
          }
      }, [router]);

  return(
    <div style={{width:"100%", height:"100%", display:"flex", justifyContent: "center", alignItems: "center"}}>
      <div className={`${styles.newProjectContainer} newProjectContainer`}>

          <div className={styles.formContainer}>
            <form onSubmit={getInputsValue} className={styles.form}>
                <AnimatedInput nameInput="nombre" type="text" textInput="Nombre" />
                <AnimatedInput nameInput="direccion" type="text" textInput="Dirección" />
                <div style={{width:"100%", display:"flex", flexDirection:"column"}}>
                  <AnimatedInput nameInput="fechaInicio" type="date" textInput="Fecha inicio" />
                  <AnimatedInput nameInput="fechaTermino" type="date" textInput="Fecha termino" />
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
            <div style={{display:"flex", justifyContent:"flex-start", width:"100%", paddingRight:"2rem"}}>
              <button onClick={() => scrollToStart()}>paso 1</button>
            </div>
          </div>

      </div>
    </div>
  )
}
