"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ChangeContentBar from "src/components/changeContentBar/";

export default function Profile(){
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    const icons = [
        {
            url: "/proyectos",
            svg: "/svg/projects.svg"
        },
        {
            url: "/perfil",
            svg:"/svg/profile.svg"
        }
    ]

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if (!token) {
            router.push("/autenticacion");
        } else {
            setIsAuthenticated(true);
        }
    }, [router]);

    if (!isAuthenticated) {
        return null;
    }

    return(
        <>
            <h2 style={{color:"white"}}>Perfil de usuario: </h2>
            <div className="changeContentBarContainer">
                <ChangeContentBar icons={icons} />
            </div>
        </>
    )
}