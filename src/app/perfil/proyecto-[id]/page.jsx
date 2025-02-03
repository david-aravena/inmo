import SectionsProject from 'src/components/sectionsProject/'
import styles from './showProject.module.css'

export default async function ShowProject({ params }){
  const { id } = await params;

  if(id === "new"){
    return(
      <div className={styles.createProject}>
        <div className={styles.createProjectContainer}>

          <div className={styles.linksSectionsContainer}>
            <button style={{padding: "1rem", background:"#992264", color:"white", border:"1px solid var(--input-border)", borderLeft:"none", borderRight:"none", flex:"1", cursor: "pointer"}}>
                Data
            </button>
            <button style={{padding: "1rem", background:"#992264", color:"white", border:"1px solid var(--input-border)", borderLeft:"none", borderRight:"none", flex:"1", cursor: "pointer"}}>
                Propiedades
            </button>
          </div>

          <div className={styles.projectContainer}>
            <SectionsProject styles={styles} />
          </div>
        </div>
      </div>
    )
  }

}