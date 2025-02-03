"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ChangeContentBar from "src/components/changeContentBar/";
import Project from 'src/components/project/'
import styles from './profile.module.css'


export default function Profile(){
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [projects, setProjects] = useState([])

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
    ];

    const newProject = {
        name: null,
        propertiesAmmount: 0,
        properties:[]
    }

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
            <div className={styles.profile}>
                <div className={styles.profileContainer}>
                    <div className={styles.linksSectionsContainer}>
                        <button style={{padding: "1rem", background:"#992264", color:"white", border:"1px solid var(--input-border)", borderLeft:"none", borderRight:"none", flex:"1", cursor: "pointer"}}>
                            Proyectos
                        </button>
                    </div>

                    <div style={{display:"flex", justifyContent:"flex-end", padding:"1rem 1rem"}}>
                        <button onClick={() => setProjects([...projects, newProject])}> crear proyecto </button>
                    </div>

                    <div className={styles.projectsContainer}>
                        {projects.length ? 
                            <>
                                {projects.map((project, index) => (
                                    <Project key={index} data={project} index={index} />
                                ))}
                            </>
                        :
                            <h2 style={{color:"white"}}>No hay proyectos guardados</h2>
                        }
                    </div>


             
                </div>
            </div>

            <div className="changeContentBarContainer">
                <ChangeContentBar icons={icons} />
            </div>
        </>
    )
}