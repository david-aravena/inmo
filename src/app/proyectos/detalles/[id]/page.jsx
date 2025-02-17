"use client"
import Link from "next/link";
import {useState, useRef, useEffect} from "react"
import { useParams, useRouter } from "next/navigation";
import AnimatedInput from "src/components/animatedInput"
import Editor from "src/components/imageEditor/"
import {saveNewProperty} from 'src/utils/saveProperty/'
import {getProject} from 'src/utils/getProject/'
import { useAuth } from "src/context/auth";
import styles from './detailsProject.module.css'

export default function DetailsProject(){

  const [isCreateProperty, setIsCreateProperty] = useState(false);
  const [project, setProject] = useState(null);
  const [images, setImages] = useState([]);
  const [imageSelected, setImageSelected] = useState(null)
  const {id} = useParams();
  const formRef = useRef(null);
  const { currentUser } = useAuth();
  const router = useRouter();

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => {
      return {
        url: URL.createObjectURL(file),
        file: file,
      };
    });

    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleSaveImage = (image) => {
    const imageUrl = URL.createObjectURL(image);
    const imageObject = {
      file: image, 
      url: imageUrl
    };
    setImages((prevImages) => [imageObject, ...prevImages]);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    const valoresFormulario = {id:0, ProyectoId: parseInt(id, 10)};

    const inputs = formRef.current.elements;

    for (let input of inputs) {
      if (input.name) {
        let valor = input.value;

        if (input.type === 'number') {
          valor = parseFloat(valor);
        }

        if (input.type === 'checkbox') {
          valor = input.checked;
        }

        valoresFormulario[input.name] = valor;
      }
    }

    saveNewProperty(valoresFormulario);
  };

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

  useEffect(() => {
    if (!currentUser) {
        router.push("/autenticacion");
    } else {
      getProject(id).then((result) => {
          setProject(result)
      })
    }
  }, [router]);
  

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
          <div style={{width:"100%", height:"100%"}}>
            <div>
              <button onClick={() => setIsCreateProperty(!isCreateProperty)} style={{padding: "1rem", background:"#992264", color:"white", border:"1px solid var(--input-border)", borderLeft:"none", borderRight:"none", flex:"1", cursor: "pointer"}}>
                {isCreateProperty ? "Lista" : "Crear"}
              </button>
            </div>
            {isCreateProperty ? 
              <div className={`${styles.formContainer} newPropertyContainer`}>
                <div style={{width:"100%", flex: "0 0 auto"}}>
                  <form ref={formRef}>
                    <AnimatedInput nameInput="precioPesos" textInput="Valor" type="number" />
                    <AnimatedInput nameInput="direccion" textInput="Direccion" type="text" />
                    <AnimatedInput nameInput="tipoInmueble" textInput="Tipo" type="select" options={["casa", "departamento", "terreno", "oficina"]} />
                    <AnimatedInput nameInput="estadoInmueble" textInput="Estado" type="select" options={["venta", "arriendo"]} />
                    <AnimatedInput nameInput="metrosCuadrados" textInput="Mts" type="number" />
                    <AnimatedInput nameInput="cantidadDormitorios" textInput="Dormitorios" type="number" />
                    <AnimatedInput nameInput="cantidadBaños" textInput="Baños" type="number" />
                    <AnimatedInput nameInput="cantidadEstacionamiento" textInput="Estacionamiento" type="number" />
                  </form>
                  <button onClick={() => scrollToEnd()}>paso 2</button>
                </div>

                <div className={styles.imageFormContainer}>
                  <div className={styles.imageContainer}>
                    <input type="file" onChange={(e) => handleImageChange(e)} />
                    {imageSelected && (
                      <ImageEditor image={imageSelected} width={400} height={500} onSaveImage={setImageSelected} />
                    )}
                  </div>
                  <div style={{display:"flex", justifyContent:"space-around", width:"100%", paddingRight:"2rem"}}>
                    <button onClick={() => scrollToStart()}>paso 1</button>
                    <button onClick={() => onSubmit()}>Crear proyecto</button>
                  </div>
                  </div>
                </div>
            :
              <div style={{width:"100%", border:"2px solid red"}}>
                <h2>Lista propiedades</h2>
              </div>
              
            }
          </div>

        </div>
      </div>
    </div>
  )
}