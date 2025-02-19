"use client"
import Link from "next/link";
import {useState, useRef, useEffect} from "react"
import { useParams, useRouter } from "next/navigation";
import AnimatedInput from "src/components/animatedInput"
import {saveNewProperty} from 'src/utils/saveProperty/'
import {getProject} from 'src/utils/getProject/'
import { useAuth } from "src/context/auth";
import styles from './detailsProject.module.css'

export default function DetailsProject(){

  const [project, setProject] = useState(null);
  const {id} = useParams();
  const formRef = useRef(null);
  const { currentUser } = useAuth();
  const router = useRouter();



  useEffect(() => {
    if (!currentUser) {
        router.push("/autenticacion");
    } else {
      getProject(id, currentUser.token).then((result) => {
        console.log(result)
        setProject(result)
      })
    }
  }, [router]);
  

  return(
    <div className={styles.panel}>
      <div className={styles.panelContainer}>
        <div className={styles.linksSectionsContainer}>
            <Link href={`/proyectos/nuevo-proyecto/`}>
              <button style={{padding: "1rem", background:"#992264", color:"white", border:"1px solid var(--input-border)", borderLeft:"none", borderRight:"none", flex:"1", cursor: "pointer"}}>
                  Propiedades
              </button>
            </Link>
            <Link href="/proyectos/nueva-propiedad">
              <button style={{padding: "1rem", background:"none", color:"white", border:"none", flex:"1", cursor: "pointer"}}>
                Crear propiedad
              </button>
            </Link>
        </div>

        <div className={styles.dataContainer}>
          <div style={{width:"100%", height:"100%"}}>
            <div>
              
            </div>
            <div style={{width:"100%", border:"2px solid red"}}>
              <h2>Lista propiedades</h2>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}