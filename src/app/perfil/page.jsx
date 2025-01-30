"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ChangeContentBar from "src/components/changeContentBar/";
import AnimatedInput from 'src/components/animatedInput/'
import styles from './profile.module.css'


export default function Profile(){
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isCreateProject, setIsCreateProject] = useState(false);
    const [isCreateProperty, setIsCreateProperty] = useState(false);
    const [imageSelected, setImageSelected] = useState("")
    const [uploadedImages, setUploadedImages] = useState([]);
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

    const getImageProperty = () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";

        input.onchange = (event) => {
            const file = event.target.files[0];
            if (file) {
                const imageUrl = URL.createObjectURL(file);
                setImageSelected(imageUrl)
                setUploadedImages((prevImages) => [...prevImages, { file, imageUrl }]);
            }
        };
        input.click();
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
                    <div className={styles.createProjectContainer}>
                        <button style={{padding: "1rem", background:"#992264", color:"white", border:"1px solid var(--input-border)", borderLeft:"none", borderRight:"none", flex:"1", cursor: "pointer"}} onClick={() => setIsCreateProject(!isCreateProject)}>
                            {isCreateProject ? "Proyectos" : "Crear proyecto"}
                        </button>
                    </div>
                    <div className={styles.formNewProjectContainer}>
                        {isCreateProject && (
                            !isCreateProperty ? 
                                <div className={styles.nameNewProjectContainer}>
                                    <h3 style={{color: "white"}}>Nuevo proyecto</h3>
                                    <form>
                                        <AnimatedInput nameInput={"name"} textInput={"Nombre"} />
                                    </form>
                                    <div style={{display:"flex", justifyContent:"flex-end"}}>
                                        <button className="buttonsHot" style={{fontSize:"16px"}} onClick={() => setIsCreateProperty(true)}>Crear propiedad</button>
                                    </div>
                                </div>
                            :
                                <div className={styles.formNewPropertyContainer}>
                                    <div className={styles.inputsNewPropertyContainer}>
                                        <form>
                                            <AnimatedInput nameInput={"price"} textInput={"Valor"} />
                                            <AnimatedInput nameInput={"ubication"} textInput={"Ubicación"} />
                                            <AnimatedInput nameInput={"bedrooms"} textInput={"Dormitorios"} />
                                            <AnimatedInput nameInput={"bathrooms"} textInput={"Baños"} />
                                        </form>
                                    </div>
                                    <div className={styles.imagesNewProperty}>
                                        {uploadedImages.length ?
                                            <div 
                                                style={{width:"100%", height:"80%", background:"white", display:"flex", justifyContent:"center", alignItems:"center"}}
                                            >
                                                <img src={imageSelected} alt="" width="100%" height="100%" style={{objectFit:"cover"}} />
                                            </div>
                                    
                                        :

                                            <div 
                                                onClick={() => getImageProperty()}
                                                style={{width:"100%", height:"80%", background:"white", display:"flex", justifyContent:"center", alignItems:"center"}}
                                            >
                                                <img src="/svg/uploadImage.svg" width="15%" height="15%" alt="" />
                                            </div>
                                        }
                                        
                                        <div style={{width:"100%", height:"20%"}}>
                                            {uploadedImages.length && (
                                                <>
                                                    <button onClick={() => getImageProperty()}>
                                                        agregar foto
                                                    </button>
                                                    {uploadedImages.map((image) => (
                                                        <img src={image.imageUrl} alt="" height="100%" width="100px" style={{objectFit:"cover", padding:"8px"}} onClick={() => setImageSelected(image.imageUrl)} />
                                                    ))}
                                                </>
                                            )}
                                        </div>

                                    </div>
                                </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="changeContentBarContainer">
                <ChangeContentBar icons={icons} />
            </div>
        </>
    )
}