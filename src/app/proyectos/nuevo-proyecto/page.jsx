"use client"
import { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import AnimatedInput from 'src/components/animatedInput'
import SelectImages from 'src/components/selectImages'
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
    const obj = {image: image}
    for (const [key, value] of formData.entries()) {
      obj[`${key}`] =  value;
    }
    console.log(obj)
  };


  useEffect(() => {
    if (!currentUser) {
      router.push("/autenticacion");
    }

  }, [router]);

  return (
    <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className={`${styles.newProjectContainer} newProjectContainer`}>
        <div className={styles.linksSectionsContainer}>
          <Link href={`/proyectos/`}>
            <button style={{ padding: "1rem", background: "none", color: "white", border: "none", flex: "1", cursor: "pointer" }}>
              Proyectos
            </button>
          </Link>
          <Link href={`/proyectos/nuevo-proyecto/`}>
            <button style={{ padding: "1rem", background: "#992264", color: "white", border: "1px solid var(--input-border)", borderLeft: "none", borderRight: "none", flex: "1", cursor: "pointer" }}>
              Crear proyecto
            </button>
          </Link>
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
