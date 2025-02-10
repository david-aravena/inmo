"use client"
import { useState } from 'react';
import AnimatedInput from 'src/components/animatedInput'
import {saveNewProject} from "src/utils/saveNewProject/"
import ImageEditor from 'src/components/imageEditor/'
import styles from './newProject.module.css'

export default function NewProject(){

  const [imageSelected, setImageSelected] = useState(null);

  const getImageProperty = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.onchange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImageSelected({file: file ,url:imageUrl})
        }
    };
    input.click();
  }

  const getInputsValue = (e) => {
    e.preventDefault();
    const formData = {id:0};
    const inputs = e.target.querySelectorAll("input, textarea, select");
  
    inputs.forEach(input => {
      formData[input.name] = input.value;
    });
    if (imageSelected && imageSelected.file) {
      const reader = new FileReader();
      reader.readAsArrayBuffer(imageSelected.file);
      reader.onloadend = () => {
        formData["imagen"] = reader.result;
        console.log(formData);
      };
    } else {
      console.log(formData);
    }

    saveNewProject(formData)
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
  
  

  return(
    <div style={{width:"100%", height:"100%", display:"flex", justifyContent: "center", alignItems: "center"}}>
      <div className={`${styles.newProjectContainer} newProjectContainer`}>
        <form onSubmit={getInputsValue} className={styles.form}>
          <div className={styles.formContainer}>
            <AnimatedInput nameInput="nombre" type="text" textInput="Nombre" />
            <AnimatedInput nameInput="direccion" type="text" textInput="Dirección" />
            <div style={{width:"100%", display:"flex", flexDirection:"column"}}>
              <AnimatedInput nameInput="fechaInicio" type="date" textInput="Fecha inicio" />
              <AnimatedInput nameInput="fechaTermino" type="date" textInput="Fecha termino" />
            </div>
            <AnimatedInput nameInput="descripcion" type="textarea" textInput="Descripción" />
            <div style={{width:"100%", display:"flex", justifyContent:"space-between"}}>
              <input type="submit" value="Guardar" />
              <button type="button" onClick={()=> scrollToEnd()}> Agregar imagen</button>
            </div>
          </div>
          <div className={styles.imageFormContainer}>
            <div className={styles.imageContainer}>
              <ImageEditor width={400} height={500} onSaveImage={setImageSelected} />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
