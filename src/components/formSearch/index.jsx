"use client"
import { useState } from "react"
import AnimatedInput from 'src/components/animatedInput/'
import styles from './formSearch.module.css'


export default function FormSearch({buttons}){
  const [typeSelected, setTypeSelected] = useState(null);
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
      <div className={styles.dashboardContainer}>
        <div className={styles.typeButtons}>
          {buttons.map((button) => (
            <button style={{ padding: "1rem" }} onClick={(e) => setTypeSelected(e.target.innerText)}>
              {button.value}
            </button>
          ))}
        </div>

        <div className={styles.attributesContainer}>
          {selectedButton && (
            <div>
              <h3 style={{color:"white"}}>Buscar por: </h3>
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
      </div>

      <div className={styles.resultContainer}>
        
      </div>
    </div>
  )
}