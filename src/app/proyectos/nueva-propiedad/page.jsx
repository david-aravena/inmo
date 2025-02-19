"use client"
import { useState, useEffect, useRef } from 'react';
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
    const dataObj = {cuentaPiscina: true, cuentaBodega: false, cuentaGimnasio: false, ProyectoId:1, latitud:"981278127812", longitud:"982382378387", precioUF:100.0, imagen1:"oiasdioadsib", imagen2:"oahuhadsiohdsaohidas", imagen3:"oinasiondasioas", imagen4:"iohdsaoihsdahioadshiodsa"};
    for (let [key, value] of formData.entries()) {
      if (key === "cantidadDormitorios" || key === "cantidadBaños" || key === "cantidadEstacionamiento") {
        dataObj[key] = Number(value);
      } else if (key === "precioPesos" || key === "metrosCuadrados" || key === "precioUf") {
        dataObj[key] = parseFloat(parseFloat(value)).toFixed(2);  
      } else {
        dataObj[key] = value;
      }
    }

    const selectedImages = images.slice(0, 4);

    const binaryDataArray = {};
    await Promise.all(
      selectedImages.map(async (img, index) => {
        binaryDataArray[`imagen${index + 1}Bit`] = await img.file.arrayBuffer();
      })
    );

    saveNewProperty({...dataObj, ...binaryDataArray, id:0}, currentUser.token);
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
    <div style={{width:"100%", height:"100%", display:"flex", justifyContent: "center", alignItems: "center"}}>
      <div className={`${styles.newProjectContainer} newPropertyContainer`}>

          <div className={styles.formContainer}>
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
            <div style={{display:"flex", justifyContent:"flex-end", width:"100%", paddingRight:"2rem"}}>
              <button onClick={() => scrollToEnd()}>paso 2</button>
            </div>
          </div>
          
          <div className={styles.imageFormContainer}>
            <div className={styles.imageContainer}>
              <div style={{width:"100%", padding:"1rem"}}>
                <input type="file" multiple onChange={(e) => handleImageChange(e)} />
              </div>
              <div style={{width:"100%", height:"auto"}}>
                <ImageEditor images={images}/>
              </div>
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
