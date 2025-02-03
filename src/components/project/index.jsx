import { useState, useEffect } from 'react';
import Link from "next/link";
import AnimatedInput from 'src/components/animatedInput/';
import styles from './project.module.css';

export default function Project({ data, index }) {
    const [project, setProject] = useState(data);

    useEffect(() => {
        setProject(data);
    }, [data]);

    const getNameNewProject = (e) => {
        e.preventDefault();
        const nameValue = e.target.elements["name"].value;
        setProject((prev) => ({ ...prev, name: nameValue }));
    };

    return (
        <div className={styles.projectContainer} style={!project.name ? { borderTop: "2px solid red", borderBottom: "2px solid red", background: "#230000" } : {}}>
            <div className={styles.infoProjectContainer}>
                <div>
                    {project.name ?
                        <p>nombre: {project.name}</p>
                    :
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            getNameNewProject(e);
                        }}>
                            <AnimatedInput textInput={"Nombre"} nameInput={"name"} />
                            <input type="submit" value="crear" />
                        </form>
                    }
                </div>
                <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <h2>{project.propertiesAmmount} propiedades</h2>
                </div>
            </div>

            {project.properties && project.properties.length ?
                <div className={styles.imagesPropertiesContainer}>
                    {project.properties.map((property, index) => (
                        <img key={index} src={property.previewImage} alt="" height="100%" width="100px" style={{ objectFit: "cover" }} />
                    ))}
                </div>
                :
                <div className={styles.imagesPropertiesContainer} style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}>
                    <Link href={`/perfil/nueva-propiedad/${project.name}`}>
                        <img src="/svg/createProperty.svg" alt="" />
                    </Link>
                </div>
            }

            <div className={styles.showContainer}>
                {project.name && (
                    <Link href={`/perfil/proyecto-${project.name}`}>
                        Ver
                    </Link>
                )}
            </div>
        </div>
    );
}