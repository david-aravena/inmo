import { useState } from "react";
import { useAnimationInput } from "./../../hook/useAnimationInput"

export default function Login({styles, submit, isLoading, setIsLogin}){

    const animationName = useAnimationInput();
    const animationPass = useAnimationInput();

    return(
        <div className={styles.container}>
            <div style={{display:"flex", justifyContent:"flex-start", padding:"1rem"}}>
                <h2 className={styles.titleText}>Ingresa tus credenciales para autenticarte</h2>
            </div>
            <form onSubmit={submit}>
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
                        htmlFor="pass"
                        className={`${animationPass.inputFocus ? styles.labelBlur : styles.labelFocus}`}   
                    >
                        Contraseña
                    </label>
                    <input 
                        id="pass" 
                        type="text" 
                        className={`${styles.textInput} ${animationPass.inputFocus && styles.textInputBlur}`}
                        onFocus={() => animationPass.focusAnimation()}
                        onBlur={(e) => animationPass.blurAnimation(e)}
                    />
                </div>
            
                <div className={styles.inputField} style={{display:"flex", justifyContent:"flex-end"}}>
                    <button type="submit" style={{ padding: "8px" }} className="buttonsHot">
                        {!isLoading ? (
                            "Entrar"
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
            </form>
            <div className={styles.optionsAuthContainer}>
                <p onClick={() => alert("Funcion no habilitada")}>Olvide mi contraseña</p>
                <p onClick={() => setIsLogin(false)}>crear cuenta</p>
            </div>
        </div>
    )
}