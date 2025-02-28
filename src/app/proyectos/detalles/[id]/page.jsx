"use client"
import Link from "next/link";
import {useState, useRef, useEffect} from "react"
import { useParams, useRouter } from "next/navigation";
import AnimatedInput from "src/components/animatedInput"
import {saveNewProperty} from 'src/utils/saveProperty/'
import { useAuth } from "src/context/auth";
import styles from './detailsProject.module.css'

export default function DetailsProject(){

  const [project, setProject] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const {id} = useParams();
  const formRef = useRef(null);
  const { currentUser } = useAuth();
  const router = useRouter();

  const handleChange = (key, value) => {
    setProject((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSave = () => {
    fetch("https://pssoft.cl/TI_Proyectos/crearProyecto/", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3NDA0ODIyMzh9.f7MKyUdJ44J3KRao3POlWaApvx4DlsFnAAi7O1joltk` 
      },
      body: JSON.stringify(project),
    })
    .then(response => response.json())
    .then(data => console.log("exito: ", data))
    .catch(error => console.error("Error:", error))
  }

  useEffect(() => {
    if (!currentUser) {
        router.push("/autenticacion");
    } else {
      const storedProjects = JSON.parse(sessionStorage.getItem("projects")) || [];
      const project = storedProjects.find((project) => project.id == id ) 
      setProject(project);
    }
  }, [router]);
  

  return(
    <div className={styles.panel}>
      <div className={styles.panelContainer}>
        <div className={styles.linksSectionsContainer}>
          <Link href={`/proyectos/nuevo-proyecto/`}>
            <button style={{padding: "1rem", background:"#992264", color:"white", border:"1px solid var(--input-border)", borderLeft:"none", borderRight:"none", flex:"1", cursor: "pointer"}}>
                Proyecto
            </button>
          </Link>
          <Link href={`/proyectos/detalles/${id}/nueva-propiedad`}>
            <button style={{padding: "1rem", background:"none", color:"white", border:"none", flex:"1", cursor: "pointer"}}>
              Propiedades
            </button>
          </Link>
        </div>

        <div className={styles.dataContainer}>
          <div style={{width:"100%", color:"white"}}>
          {project ? (
              <>
                <button onClick={() => setIsEditing(!isEditing)}>
                  {isEditing ? "Cancelar" : "Editar"}
                </button>

                {isEditing ? (
                  <>
                    <ul>
                      {Object.entries(project).map(([key, value]) => (
                        <li key={key}>
                          <strong>{key}:</strong>{" "}
                          <input
                            type="text"
                            value={value}
                            onChange={(e) => handleChange(key, e.target.value)}
                          />
                        </li>
                      ))}
                    </ul>
                    <button onClick={() => handleSave()}>Guardar</button>
                  </>
                ) : (
                  <ul>
                    {Object.entries(project).map(([key, value]) => (
                      <li key={key}>
                        <strong>{key}:</strong> {String(value)}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <p>No hay proyecto seleccionado.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}