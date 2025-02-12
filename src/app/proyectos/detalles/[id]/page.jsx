"use client"
import Link from "next/link";
import {useState, useRef} from "react"
import { useParams } from "next/navigation";
import AnimatedInput from "src/components/animatedInput"
import Editor from "src/components/imageEditor/"
import {saveNewProperty} from 'src/utils/saveProperty/'
import styles from './detailsProject.module.css'

export default function DetailsProject(){

  const [isCreateProperty, setIsCreateProperty] = useState(false);
  const [images, setImages] = useState([]);
  const [imageSelected, setImageSelected] = useState(null)
  const {id} = useParams();
  const formRef = useRef(null);

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
            {isCreateProperty && (
              <div className={styles.formContainer}>
                <div style={{width:"50%"}}>
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
                </div>

                <div style={{width:"50%"}}>

                  <div style={{width:"100%", height:"100%", position:"relative"}}>
                    <div>
                      <input type="file" accept="image/*" multiple onChange={handleImageUpload} />
                    </div>
                    <div style={{display:"flex", overflow:"auto"}}>
                    {images.map((image, index) => (
                      <img key={index} src={image.url} alt="" width="400px" height="500px" onClick={(e) => setImageSelected(e.target.src)} style={{objectFit:"cover", transform:"scale(0.9)"}} />
                    ))}
                    </div>
                    {imageSelected && (
                      <div style={{position:"absolute", top:0, left:0, width:"100%", height:"100%", background:"var(--background-gray)", display:"flex", justifyContent:"center"}}>
                        <Editor image={imageSelected} close={() => setImageSelected(null)} saveImage={(image) => handleSaveImage(image)} />
                      </div>
                    )}
                  </div>
                    <button onClick={(e) => manejarEnvio(e)}>Guardar formulario</button>

                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}