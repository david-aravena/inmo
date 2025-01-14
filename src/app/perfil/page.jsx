"use client"
import { useAuth } from "src/context/auth"

export default function Profile(){

    const auth = useAuth().currentUser;

    return(
        <h2 style={{color:"white"}}>Token de usuario: {auth.token}</h2>
    )
}