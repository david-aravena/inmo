"use client"
import { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import AnimatedInput from 'src/components/animatedInput'
import { saveNewProject } from "src/utils/saveNewProject/"
import { useRouter } from "next/navigation";
import ImageEditor from 'src/components/ListImagesSelected'
import { useAuth } from "src/context/auth";
import styles from './newProject.module.css'

export default function NewProject() {
  const [imageSelected, setImageSelected] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);  // Estado para controlar si el botón está habilitado
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
    const dataObj = { regionId: 1, comunaId: 2, estadoProyecto: "Abierto", latitud: null, longitud: null, vigente: true, empresaId: 2 };
    for (let [key, value] of formData.entries()) {
      dataObj[key] = value;
    }
    saveNewProject({ ...dataObj, id: 0, usuarioId: parseInt(currentUser.id, 10) }, currentUser.token);
  }

  const handleImageChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setImageSelected([{ objectUrl: URL.createObjectURL(file) }]);
    }
  };

  useEffect(() => {
    if (!currentUser) {
      router.push("/autenticacion");
    }

    // Verificar si el formulario está completo y si hay una imagen seleccionada
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const isFormComplete = Array.from(formData.values()).every(value => value !== "");
      setIsButtonDisabled(!(isFormComplete && imageSelected.length > 0)); // Habilitar o deshabilitar el botón
    }
  }, [router, imageSelected]); // Se ejecuta cada vez que cambia la imagen seleccionada

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
            <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
              <button onClick={() => onSubmit()} disabled={isButtonDisabled}>Crear proyecto</button>
            </div>
          </div>

          <div className={styles.imageFormContainer}>
            <div className={styles.imageContainer}>
              <input type="file" onChange={(e) => handleImageChange(e)} />
              {imageSelected ?
                <ImageEditor images={imageSelected} width={400} height={500} onSaveImage={setImageSelected} setImages={() => setImageSelected} />
                :
                <h2 style={{ color: "white" }}>hola</h2>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
