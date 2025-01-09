"use client"
import { useState } from "react"
import { useAnimationInput } from "./hook/useAnimationInput"
import styles from './formContact.module.css'

export default function FormContact(){

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

                    
                    <div className={styles.container}>
                        <div>
                            <button onClick={() => setIsContact(false)} className={`buttons`}>Cerrar</button>
                        </div>
                        <div style={{display:"flex", justifyContent:"flex-start", padding:"1rem"}}>
                            <h2 className={styles.titleText}>Ingresa tus datos para contactar al encargado de la propiedad</h2>
                        </div>
                        <form onSubmit={getInputsValues}>
                            <div className={styles.inputField}>
                                <label 
                                    htmlFor="name"
                                    className={`${animationName.inputFocus ? styles.labelBlur : styles.labelFocus}`}   
                                >
                                    Nombre
                                </label>
                                <input 
                                    id="name" 
                                    type="text" 
                                    className={`${styles.textInput} ${animationName.inputFocus && styles.textInputBlur}`}
                                    onFocus={() => animationName.focusAnimation()}
                                    onBlur={(e) => animationName.blurAnimation(e)}
                                />
                            </div>
                            <div className={styles.inputField}>
                                <label 
                                    htmlFor="email"
                                    className={`${animationEmail.inputFocus ? styles.labelBlur : styles.labelFocus}`}   
                                >
                                    Email
                                </label>
                                <input 
                                    id="email" 
                                    type="text" 
                                    className={`${styles.textInput} ${animationEmail.inputFocus && styles.textInputBlur}`}
                                    onFocus={() => animationEmail.focusAnimation()}
                                    onBlur={(e) => animationEmail.blurAnimation(e)}
                                />
                            </div>
                            <div className={styles.inputField}>
                                <label 
                                    htmlFor="phone"
                                    className={`${animationPhone.inputFocus ? styles.labelBlur : styles.labelFocus}`}   
                                >
                                    Fono
                                </label>
                                <input 
                                    id="phone" 
                                    type="text" 
                                    className={`${styles.textInput} ${animationPhone.inputFocus && styles.textInputBlur}`}
                                    onFocus={() => animationPhone.focusAnimation()}
                                    onBlur={(e) => animationPhone.blurAnimation(e)}
                                />
                            </div>
                            <div className={styles.inputField}>
                                <textarea 
                                    className={`${styles.textInput} ${animationMessage.inputFocus && styles.textInputBlur}`}
                                    placeholder="Escribe aqui un mensaje para el corredor" 
                                    onFocus={() => animationMessage.focusAnimation()}
                                    onBlur={(e) => animationMessage.blurAnimation(e)}
                                />
                            </div>
                            <div className={styles.inputField} style={{display:"flex", justifyContent:"flex-end"}}>
                                <input type="submit" value={"enviar"} style={{padding:"8px"}} className="buttonsHot"/>
                            </div>
                        </form>
                    </div>
                </div>
                </>
            :
            <button onClick={() => setIsContact(true)} className="buttonsHot" style={{borderRadius:"0"}}>Contactar corredor</button>
                
            }
        </>
    )
}