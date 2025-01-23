"use client"
import { useState } from "react"
import AnimatedInput from 'src/components/animatedInput/'
import styles from './formSearch.module.css'


export default function FormSearch({buttons}){
  const [typeSelected, setTypeSelected] = useState("Propiedades");
  const [inputValues, setInputValues] = useState({});

  const selectedButton = buttons.find(button => button.value === typeSelected);

  const handleInputChange = (name, value) => {
    setInputValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return(
    <div className={styles.container}>
      

      <div className={styles.formContainer}>
        
        <div className={styles.attributesContainer}>
        <div className={styles.typeButtons}>
          {buttons.map((button) => (
            <button style={{ padding: "1rem", background:`${typeSelected === button.value ? "#992264" : "none"}`, color:"white", border:"1px solid var(--input-border)", borderLeft:"none", borderRight:"none", flex:"1" }} onClick={(e) => setTypeSelected(e.target.innerText)}>
              {button.value}
            </button>
          ))}
        </div>
          {selectedButton && (
            <div>
              <div style={{display:"flex", flexDirection:"column"}}>
                  {selectedButton.attributes.map((attribute, index) => (
                    <AnimatedInput 
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
        
        <div style={{width:"100%", display:"flex", flexDirection:"column", position:"relative"}}>
          
          <div className={styles.resultContainer}>
            
          </div>
        </div>
      </div>
    </div>
  )
}