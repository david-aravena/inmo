"use client"
import { useEffect, useState } from "react"
import Link from "next/link";
import Image from "next/image";
import CardPropertyUI from "src/ui/properties/CardPropertyUI";
import CardSocialUI from "src/ui/social/CardSocialUI"
import {get} from './utils/getItems'
import AnimatedInput from 'src/components/animatedInput/'
import styles from './formSearch.module.css'


export default function FormSearch({buttons}){
  const [typeSelected, setTypeSelected] = useState("Propiedades");
  const [inputValues, setInputValues] = useState({});
  const [items, setItems] = useState(null)

  const selectedButton = buttons.find(button => button.value === typeSelected);

  const handleInputChange = (name, value) => {
    setInputValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  useEffect(() => {
    get().then((result) => setItems(result));
  }, [])

  return(
    <div className={styles.container}>
      

      <div className={styles.formContainer}>
        
        <div className={styles.attributesContainer}>
          <div className={styles.typeButtons}>
            {buttons.map((button, index) => (
              <button key={index} style={{ padding: "1rem", background:`${typeSelected === button.value ? "#992264" : "none"}`, color:"white", border:"1px solid var(--input-border)", borderLeft:"none", borderRight:"none", flex:"1" }} onClick={(e) => setTypeSelected(e.target.innerText)}>
                {button.value}
              </button>
            ))}
          </div>
          {selectedButton && (
            <div>
              <div style={{display:"flex", flexDirection:"column"}}>
                  {selectedButton.attributes.map((attribute, index) => (
                    <AnimatedInput
                      index={index} 
                      nameInput={attribute.name} 
                      textInput={attribute.text} 
                      value={inputValues[attribute.name] || ""}
                      onChange={(newValue) => handleInputChange(attribute.name, newValue)}
                    />
                  ))}
              </div>
            </div>
          )}
        </div>
        
        <div className={styles.contais}>
          
          <div className={styles.resultContainer}>
            {items && typeSelected === "Propiedades" && (
              items.items.map((item, index) => (
                <Link href={`/show/${item.id}`} key={index}>
                  <CardPropertyUI item={item} index={index}>
                    <Image
                      src={item.image}
                      alt="error"
                      layout="fill"
                      objectFit="cover"
                    />
                  </CardPropertyUI>
                </Link>
              ))
            )}

            {items && typeSelected === "Publicaciones" && (
              items.socialPosts.map((item, index) => (
                <Link href={``} key={index}>
                  <CardSocialUI item={item} index={index}>
                    <Image
                        src={item.image}
                        alt="error"
                        layout="fill"
                        objectFit="cover"
                    />
                  </CardSocialUI>
                </Link>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  )
}