"use client"
import { useState } from "react"
import { useAnimationInput } from "./hook/useAnimationInput"
import styless from './formContact.module.css'

export default function FormContact({styles}){

    const [isContact, setIsContact] = useState(false)
    const animationName = useAnimationInput();
    const animationEmail = useAnimationInput();
    const animationPhone = useAnimationInput();
    const animationMessage = useAnimationInput();

    const getInputsValues = (e) => {
        e.preventDefault()
        alert("Su mensaje a sido enviado. Recibira una respuesta via telefonica o via email.")
    }

    return(
        <>
            {isContact ? 
                <>
                <div style={{position:"absolute", top:"0", left:"0", width:"100vw", height:"100vh", background:"none", backdropFilter:"blur(10px)", display:"flex", justifyContent:"center", alignItems:"center"}}>

                    
                    <div className={styless.container}>
                        <button onClick={() => setIsContact(false)}>Cerrar</button>
                        <div style={{display:"flex", justifyContent:"flex-start", padding:"1rem"}}>
                            <h2 className={styless.titleText}>Ingresa tus datos para contactar al encargado de la propiedad</h2>
                        </div>
                        <form onSubmit={getInputsValues}>
                            <div className={styless.inputField}>
                                <label 
                                    htmlFor="name"
                                    className={`${animationName.inputFocus ? styless.labelBlur : styless.labelFocus}`}   
                                >
                                    Nombre
                                </label>
                                <input 
                                    id="name" 
                                    type="text" 
                                    className={`${styless.textInput} ${animationName.inputFocus && styless.textInputBlur}`}
                                    onFocus={() => animationName.focusAnimation()}
                                    onBlur={(e) => animationName.blurAnimation(e)}
                                />
                            </div>
                            <div className={styless.inputField}>
                                <label 
                                    htmlFor="email"
                                    className={`${animationEmail.inputFocus ? styless.labelBlur : styless.labelFocus}`}   
                                >
                                    Email
                                </label>
                                <input 
                                    id="email" 
                                    type="text" 
                                    className={`${styless.textInput} ${animationEmail.inputFocus && styless.textInputBlur}`}
                                    onFocus={() => animationEmail.focusAnimation()}
                                    onBlur={(e) => animationEmail.blurAnimation(e)}
                                />
                            </div>
                            <div className={styless.inputField}>
                                <label 
                                    htmlFor="phone"
                                    className={`${animationPhone.inputFocus ? styless.labelBlur : styless.labelFocus}`}   
                                >
                                    Fono
                                </label>
                                <input 
                                    id="phone" 
                                    type="text" 
                                    className={`${styless.textInput} ${animationPhone.inputFocus && styless.textInputBlur}`}
                                    onFocus={() => animationPhone.focusAnimation()}
                                    onBlur={(e) => animationPhone.blurAnimation(e)}
                                />
                            </div>
                            <div className={styless.inputField}>
                                <textarea 
                                    className={`${styless.textInput} ${animationMessage.inputFocus && styless.textInputBlur}`}
                                    placeholder="Escribe aqui un mensaje para el corredor" 
                                    onFocus={() => animationMessage.focusAnimation()}
                                    onBlur={(e) => animationMessage.blurAnimation(e)}
                                />
                            </div>
                            <div className={styless.inputField} style={{display:"flex", justifyContent:"flex-end"}}>
                                <input type="submit" value={"enviar"} style={{padding:"8px"}} />
                            </div>
                        </form>
                    </div>
                </div>
                </>
            :
            <button onClick={() => setIsContact(true)}>Contactar corredor</button>
                
            }
        </>
    )
}