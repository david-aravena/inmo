"use client"
import { usePathname, useRouter } from "next/navigation";
import Link from 'next/link'
import { useAuth } from "src/context/auth"

export default function AuthButtons(){
    const {currentUser, setCurrentUser} = useAuth();
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = () => {
        sessionStorage.removeItem("token");
        setCurrentUser(null);
        router.push("/");
    };

    if(pathname === "/autenticacion"){
        return(
            <>
            </>
        )
    }

    if(currentUser?.name){
        return(
            <div style={{backgroundColor:"#3980ff", padding:"1rem", color:"white", borderRadius:"8px"}}>
                <button className="textMonserratRegular" onClick={handleLogout} style={{background:"none", border:"none"}}>
                    Cerrar sesión
                </button>
            </div>
        )
      }

    return(
        <div style={{backgroundColor:"#3980ff", padding:"1rem", color:"white", borderRadius:"8px"}}>
            <Link href="/autenticacion">
                <p className="textMonserratRegular">Iniciar sesion</p>
            </Link>
        </div>
    )
}
