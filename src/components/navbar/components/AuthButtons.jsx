"use client"
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import { useAuth } from "src/context/auth"

export default function AuthButtons(){
    const auth = useAuth().currentUser;
    const pathname = usePathname();

    if(pathname === "/autenticacion"){
        return(
            <>
            </>
        )
    }

    if(auth?.name){
        return(
            <div>
                <p style={{color:"white"}}>{auth.name}</p>
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
