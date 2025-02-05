"use client"
import { useState } from "react"
import { useRouter } from 'next/navigation';
import Login from './components/login/'
import Register from './components/register/'
import { useAuth } from "src/context/auth";
import styles from './formAuth.module.css'

export default function FormAuth(){

    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { setCurrentUser } = useAuth();

    const getInputsValues = async(e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(async() => {
            try {
                const response = await fetch(`https://pssoft.cl/TI_Credenciales/login?user=${e.target.name.value}&password=${e.target.pass.value}&esMovil=0`);
        
                const data = await response.json();
                const usuarioData = JSON.parse(data.usuario)[0];
                setCurrentUser({ 
                    token: usuarioData.TokenVinculo, 
                    name: usuarioData.NombreCompleto,
                    id: usuarioData.Id
                });
                router.push('/proyectos')
        
            } catch (error) {
                setIsLoading(false);
                console.error("Error al autenticar:", error.message);
            }
          }, 1000);
    }

    return(
        <div style={{width:"100%", height:"100%", background:"none", display:"flex", justifyContent:"center", alignItems:"center"}}>
            {isLogin ? 
                <Login styles={styles} submit={getInputsValues} isLoading={isLoading} setIsLogin={setIsLogin} />
            :
                <Register styles={styles} submit={getInputsValues} isLoading={isLoading} setIsLogin={setIsLogin} />
            }
        </div>
    )
}