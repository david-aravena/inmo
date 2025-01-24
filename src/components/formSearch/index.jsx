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
  const [items, setItems] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const selectedButton = buttons.find(button => button.value === typeSelected);

  const handleInputChange = (name, value) => {
    setInputValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const submitSearch = () => {
    setIsLoading(true);
    setTimeout(() => {
      alert("Funcionalidad no habilitada")
      setIsLoading(false)
    }, 1000)
  }

  useEffect(() => {
    get().then((result) => setItems(result));
  }, [])

  return(
    <div className={styles.container}>
      

      <div className={styles.formContainer}>
        
        <div className={styles.attributesContainer}>
          <div className={styles.typeButtons}>
            {buttons.map((button, index) => (
              <button key={index} style={{ padding: "1rem", background:`${typeSelected === button.value ? "#992264" : "none"}`, color:"white", border:"1px solid var(--input-border)", borderLeft:"none", borderRight:"none", flex:"1", cursor: "pointer" }} onClick={(e) => setTypeSelected(e.target.innerText)}>
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
              <div style={{display:"flex", justifyContent:"flex-end", padding:"0 1rem"}}>
              <button type="submit" style={{ padding: "8px" }} className="buttonsHot" onClick={() => submitSearch()}>
                        {!isLoading ? (
                            "Buscar"
                        ):(
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path
                                fill="#88024b"
                                d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                                opacity="0.25"
                                />
                                <path
                                fill="#88024b"
                                d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
                                >
                                <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" />
                                </path>
                            </svg>
                            )
                        }
                    </button>
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