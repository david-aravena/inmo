"use client"
import { useState } from "react"
import AnimatedInput from 'src/components/animatedInput/'

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
    <div style={{width:"100%", height:"100%", display:"flex"}}>
      <div style={{width:"15%", height:"100%", backgroundColor:"var(--background-gray)"}}>
        <div style={{width:"100%", height:"auto", display:"flex", flexDirection:"column"}}>
          {buttons.map((button) => (
            <button style={{ padding: "1rem" }} onClick={(e) => setTypeSelected(e.target.innerText)}>
              {button.value}
            </button>
          ))}
        </div>

        <div style={{width:"100%", height:"50%"}}>
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

      <div style={{width:"85%", height:"100%"}}>
        
      </div>
    </div>
  )
}