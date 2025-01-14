"use client"
import { useState } from "react"
import { useRouter } from 'next/navigation';
import { useAnimationInput } from "./hook/useAnimationInput"
import { useAuth } from "src/context/auth";
import styles from './formAuth.module.css'

export default function FormAuth(){

    const [isLogin, setIsLogin] = useState(true)
    const animationName = useAnimationInput();
    const animationPass = useAnimationInput();
    const router = useRouter();
    const { setCurrentUser } = useAuth();

    const getInputsValues = async(e) => {
        e.preventDefault();
        console.log(e.target.name.value)
        try {
            const response = await fetch(`https://pssoft.cl/TI_Credenciales/login?user=${e.target.name.value}&password=${e.target.pass.value}&esMovil=0`);
    
            const data = await response.json();
            const usuarioData = JSON.parse(data.usuario)[0];
            setCurrentUser({ 
                token: usuarioData.TokenVinculo, 
                name: usuarioData.NombreCompleto
            });
            router.push('/perfil')
    
        } catch (error) {
            console.error("Error al autenticar:", error.message);
        }
    }

    return(
        <>
            {isLogin ? 
                <>
                <div style={{width:"100%", height:"100%", background:"none", display:"flex", justifyContent:"center", alignItems:"center"}}>

                    
                    <div className={styles.container}>
                        <div style={{display:"flex", justifyContent:"flex-start", padding:"1rem"}}>
                            <h2 className={styles.titleText}>Ingresa tus credenciales para autenticarte</h2>
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
                                <input type="submit" value={"Entrar"} style={{padding:"8px"}} className="buttonsHot"/>
                            </div>
                        </form>
                    </div>
                </div>
                </>
            :
                <>

                </>
                
            }
        </>
    )
}