"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Project from 'src/components/project/'
import styles from './projects.module.css'


export default function Projects(){
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [projects, setProjects] = useState([
        {
            nombre:"las garzas",
            imagen:"https://pics.nuroa.com/nueva_propiedad_a_estrenar_en_venta_comuna_de_lampa_1970002727385474407.jpg",
            direccion:"los tilos 730",
            comuna:"talca"

        }
    ])

    const router = useRouter();

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
            <div className={styles.projects}>
                <div className={styles.projectsContainer}>
                    <div className={styles.linksSectionsContainer}>
                        <button style={{padding: "1rem", background:"#992264", color:"white", border:"1px solid var(--input-border)", borderLeft:"none", borderRight:"none", flex:"1", cursor: "pointer"}}>
                            Crear proyecto
                        </button>
                    </div>

                    <div className={styles.listProjectsContainer}>
                        {projects.length ? 
                            <>
                                {projects.map((project, index) => (
                                    <Project key={index} data={project} index={index}>
                                        <img
                                            src={project.imagen}
                                            alt="error"
                                            layout="fill"
                                            style={{objectFit:"cover", height:"100%", width:"100%"}}
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