"use client"
import { useState, useEffect, useRef } from 'react';
import AnimatedInput from 'src/components/animatedInput'
import SelectImages from 'src/components/selectImages'
import Links from 'src/components/links/'
import { saveNewProject } from "src/utils/saveNewProject/"
import { useRouter } from "next/navigation";
import { useAuth } from "src/context/auth";
import styles from './newProject.module.css'

export default function NewProject() {
  const [image, setImage] = useState(null)
  const { currentUser } = useAuth();
  const router = useRouter();
  const formRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImage(file);
  };

  const onSubmit = () => {
    if (!formRef.current) return {};
  
    const formData = new FormData(formRef.current);
    const obj = {image: image, id:0}
    for (const [key, value] of formData.entries()) {
      obj[`${key}`] =  value;
    }
    saveNewProject(obj, currentUser.token)
  };


  useEffect(() => {
    if (!currentUser) {
      router.push("/autenticacion");
    }

  }, [router]);

  const links = [
    {text:"Proyectos",href:`/proyectos/`},
    {text:"Crear proyecto",href:`#`}
  ]

  return (
    <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className={`${styles.newProjectContainer} newProjectContainer`}>
        <div style={{width:"100%"}}>
          <Links styles={styles} data={links} />
        </div>

        <div className={styles.listProjectsContainer}>
          <div className={styles.formContainer}>
            <form className={styles.form} ref={formRef}>
              <AnimatedInput nameInput="nombre" type="text" textInput="Nombre" state={true} />
              <AnimatedInput nameInput="direccion" type="text" textInput="Dirección" state={true} />
              <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
                <AnimatedInput nameInput="fechaInicio" type="date" textInput="Fecha inicio" state={true} />
                <AnimatedInput nameInput="fechaFin" type="date" textInput="Fecha termino" state={true} />
              </div>
              <AnimatedInput nameInput="descripcion" type="textarea" textInput="Descripción" state={true} />
            </form>
            <div className={styles.imageContainer}>
              <input 
                type="file" 
                ref={fileInputRef} 
                style={{ display: "none" }} 
                onChange={handleImage} 
              />
              {image && (
                <SelectImages images={[image]} setImage={(image) => setImage(image)} />
              )}
            </div>
            <div className={styles.buttonCreateProjectContainer}>
              <button style={{background:"#3980ff", border:"none", color:"white", padding:"8px 0", margin:"1rem 0"}} onClick={() => fileInputRef.current?.click()}>Asignar imagen</button>
              <button onClick={() => onSubmit()} disabled={false} className={styles.buttonCreateProject}>Crear proyecto</button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
