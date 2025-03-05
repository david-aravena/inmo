"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ProjectCardUI from 'src/ui/projectCard/'
import Links from 'src/components/links/'
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
                sessionStorage.setItem("projects", JSON.stringify(result));
                setProjects(result)
            })
        }
    }, [router]);

    const links = [
        {text:"Proyectos",href:`#`},
        {text:"Crear proyecto",href:`/proyectos/nuevo-proyecto/`}
    ]

    return(
        <> 
            <div className={styles.projects}>
                <div className={styles.projectsContainer}>
                    <div style={{width:"100%"}}>
                        <Links styles={styles} data={links} />
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
                            <img src="/images/inmobiliarioLogo.png" alt="" />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}