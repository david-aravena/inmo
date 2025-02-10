"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Project from 'src/components/project/'
import {getProjects} from 'src/utils/getProjects/'
import styles from './projects.module.css'


export default function Projects(){
    const [projects, setProjects] = useState([])

    const router = useRouter();

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if (!token) {
            router.push("/autenticacion");
        } else {
            const storedData = sessionStorage.getItem('token');
            if (storedData) {
                const parsedData = JSON.parse(storedData);
                getProjects(parsedData.id).then((result) => {
                    setProjects(result)
                })
            }
        }
    }, [router]);

    return(
        <>
            <div className={styles.projects}>
                <div className={styles.projectsContainer}>
                    <div className={styles.linksSectionsContainer}>
                        <Link href={`/proyectos/nuevo-proyecto/`}>
                            <button style={{padding: "1rem", background:"#992264", color:"white", border:"1px solid var(--input-border)", borderLeft:"none", borderRight:"none", flex:"1", cursor: "pointer"}}>
                                Crear proyecto
                            </button>
                        </Link>
                    </div>

                    <div className={styles.listProjectsContainer}>
                        {projects.length ? 
                            <>
                                {projects.map((project, index) => (
                                    <Project key={index} data={project} index={index}>
                                        <img
                                            src={project.imagen ?? "/images/inmobiliarioLogo.png"}
                                            alt="error"
                                            style={{
                                                objectFit: "cover",
                                                height: project.imagen ? "100%" : "15%",
                                                width: project.imagen ? "100%" : "15%",
                                                position: "absolute",
                                                top: "50%",
                                                left: "50%",
                                                transform: "translate(-50%, -50%)",
                                            }}
                                        />

                                    </Project>
                                ))}
                            </>
                        :
                            <h2 style={{color:"white"}}>No hay proyectos guardados</h2>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}