"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ProjectCardUI from 'src/ui/projectCard/'
import {getProjects} from 'src/utils/getProjects/'
import { useAuth } from "src/context/auth";
import styles from './projects.module.css'


export default function Projects(){
    const [projects, setProjects] = useState([])
    const { currentUser } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!currentUser) {
            router.push("/autenticacion");
        } else {
            getProjects(currentUser.id).then((result) => {
                setProjects(result)
            })
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
                                    <Link href={`/proyectos/detalles/${project.id}`}>
                                        <ProjectCardUI key={index} data={project} index={index}>
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

                                        </ProjectCardUI>
                                    </Link>
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