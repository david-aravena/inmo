"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ChangeContentBar from "src/components/changeContentBar/";
import AnimatedInput from 'src/components/animatedInput/'

export default function Profile(){
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isCreateProject, setIsCreateProject] = useState(false);
    const [isCreateProperty, setIsCreateProperty] = useState(false);
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
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", width:"100%", height:"100%"}}>
                <div style={{width:"75%", height:"75%", background:"var(--background-gray)", border: "1px solid var(--input-border)", borderRadius:"8px", display:"flex", flexDirection:"column"}}>
                    <div style={{borderBottom: "1px solid var(--input-border)", width:"100%"}}>
                        <button style={{padding: "1rem", background:"#992264", color:"white", border:"1px solid var(--input-border)", borderLeft:"none", borderRight:"none", flex:"1", cursor: "pointer"}} onClick={() => setIsCreateProject(!isCreateProject)}>
                            {isCreateProject ? "Proyectos" : "Crear proyecto"}
                        </button>
                    </div>
                    <div style={{height:"100%"}}>
                        {isCreateProject && (
                            !isCreateProperty ? 
                                <div style={{width:"50%", height:"100%"}}>
                                    <h3 style={{color: "white"}}>Nuevo proyecto</h3>
                                    <form>
                                        <AnimatedInput nameInput={"name"} textInput={"Nombre"} />
                                    </form>
                                    <div style={{display:"flex", justifyContent:"flex-end"}}>
                                        <button className="buttonsHot" style={{fontSize:"16px"}} onClick={() => setIsCreateProperty(true)}>Crear propiedad</button>
                                    </div>
                                </div>
                            :
                                <div style={{display:"flex", height:"100%"}}>
                                    <div style={{width:"50%"}}>
                                        <form>
                                            <AnimatedInput nameInput={"price"} textInput={"Valor"} />
                                            <AnimatedInput nameInput={"ubication"} textInput={"Ubicación"} />
                                            <AnimatedInput nameInput={"bedrooms"} textInput={"Dormitorios"} />
                                            <AnimatedInput nameInput={"bathrooms"} textInput={"Baños"} />
                                        </form>
                                    </div>
                                    <div style={{width:"50%", height:"100%", display:"flex", flexDirection:"column", alignItems:"center", padding:"1rem"}}>
                                        {uploadedImages.length ?
                                            <div 
                                            style={{width:"100%", height:"80%", background:"white", display:"flex", justifyContent:"center", alignItems:"center"}}>
                                            {uploadedImages[0] ? 
                                                <img src={uploadedImages[0].imageUrl} alt="" width="100%" height="100%" style={{objectFit:"cover"}} />
                                            
                                            :
                                                <img src="/svg/uploadImage.svg" width="15%" height="15%" alt="" />
                                            }
                                            </div>
                                    
                                        :

                                            <div 
                                            onClick={() => getImageProperty()}
                                            style={{width:"100%", height:"80%", background:"white", display:"flex", justifyContent:"center", alignItems:"center"}}>
                                            {uploadedImages[0] ? 
                                                <img src={uploadedImages[0].imageUrl} alt="" width="100%" height="100%" style={{objectFit:"cover"}} />
                                            
                                            :
                                                <img src="/svg/uploadImage.svg" width="15%" height="15%" alt="" />
                                            }
                                            </div>
                                        }
                                        
                                        <div style={{width:"100%", height:"20%"}}>
                                            {uploadedImages.length && (
                                                <>
                                                    <button onClick={() => getImageProperty()}>
                                                        agregar foto
                                                    </button>
                                                    {uploadedImages.map((image) => (
                                                        <img src={image.imageUrl} alt="" height="100%" width="100px" style={{objectFit:"cover", padding:"8px"}} />
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