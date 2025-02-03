"use client"
import {useState} from 'react';
import AnimatedInput from 'src/components/animatedInput/';
import styles from './newProperty.module.css';

export default function NewProperty(){

  const [imageSelected, setImageSelected] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);

  const getImageProperty = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.onchange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImageSelected(imageUrl)
            setUploadedImages((prevImages) => [...prevImages, { file, imageUrl }]);
        }
    };
    input.click();
  }

  return(
    <div className={styles.profile}>
      <div className={styles.profileContainer}>
        <div style={{width:"50%", height:"100%"}}>
          <form>
            <AnimatedInput textInput={"Valor"} nameInput={"price"} />
            <AnimatedInput textInput={"Direccion"} nameInput={"address"} />
            <AnimatedInput textInput={"Tipo"} nameInput={"type"} type={"select"} options={["casa", "departamento"]} />
            <AnimatedInput textInput={"Estado"} nameInput={"state"} type={"select"} options={["venta", "arriendo", "arriendo temporal", "bingo"]} />
            <AnimatedInput textInput={"Mts"} nameInput={"mts"} />
            <AnimatedInput textInput={"Dormitorios"} nameInput={"bedrooms"} />
            <AnimatedInput textInput={"Baños"} nameInput={"bathrooms"} />
            <AnimatedInput textInput={"Estacionamientos"} nameInput={"parkings"} />
          </form>
        </div>
        <div style={{width:"50%", height:"100%"}}>
          {uploadedImages.length ? 
            <div style={{width:"100%", height:"100%"}}>
              <div style={{width:"100%", height:"80%", display:"flex", alignItems:"center"}}>
                <img src={imageSelected} alt="" width="100%" />
              </div>
              <div style={{width:"100%", height:"20%", display:"flex"}}>
                <div style={{background:"black"}}>
                  <img src="/svg/uploadImage.svg" alt="error" height="100%" width="100px" onClick={() => getImageProperty()} />
                </div>
                {uploadedImages.map((image) => (
                  <img src={image.imageUrl} alt="" height="100%" width="100px" style={{objectFit:"cover"}} onClick={() => setImageSelected(image.imageUrl)} />
                ))}
              </div>
            </div>
          :
            <div style={{width:"100%", height:"100%", display:"flex", justifyContent:"center", alignItems:"center"}} onClick={() => getImageProperty()}>
              <img src="/svg/uploadImage.svg" alt="error" width={"15%"} height={"15%"} />
            </div>
          }
        </div>
      </div>
    </div>
  )
}