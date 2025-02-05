"use client"
import { useState } from 'react';
import AnimatedInput from 'src/components/animatedInput'
import {saveNewProject} from "src/utils/saveNewProject/"
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
  

  return(
    <div style={{width:"100%", height:"100%", display:"flex", justifyContent: "center", alignItems: "center"}}>
      <div className={styles.newProjectContainer}>
        <form onSubmit={getInputsValue} style={{display:"flex", width:"100%", height:"100%"}}>
          <div style={{width:"50%"}}>
            <AnimatedInput nameInput="nombre" type="text" textInput="Nombre" />
            <AnimatedInput nameInput="direccion" type="text" textInput="Dirección" />
            <div style={{width:"100%", display:"flex", justifyContent:"space-around"}}>
              <AnimatedInput nameInput="fechaInicio" type="date" textInput="Fecha inicio" />
              <AnimatedInput nameInput="fechaTermino" type="date" textInput="Fecha termino" />
            </div>
            <AnimatedInput nameInput="descripcion" type="textarea" textInput="Descripción" />
            <input type="submit" value="Guardar" />
          </div>
          <div style={{width:"50%"}}>
            <div onClick={() => getImageProperty()} className={styles.imageContainer}>
              {imageSelected ? 
                <img src={imageSelected.url} alt="" width="400px" height="100%" style={{objectFit:"cover"}} />
              :
                <img src="/svg/uploadImage.svg" alt="" width="15%" height="15%" />
              }
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
