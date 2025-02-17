import styles from './projectCardUI.module.css';

export default function ProjectCardUI({ data, index, children }) {

    return (
        <div className={styles.projectContainer}>
            <div style={{position:"absolute", top:0, left:0, width:"100%"}}>
                <h3 style={{ color:"white", margin: "8px", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)"}}>
                    {data.descripcion}
                </h3>
            </div>
            <div style={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                <ul>
                    <li>Inicio: {data.fechaInicio}</li>
                    <li>Termino: {data.fechaFin}</li>
                    <li>Estado: {data.estadoProyecto}</li>
                    <li>Vigente: {data.vigente}</li>
                </ul>
            </div>

            <div 
                style={{position:"absolute", bottom:0, left:0, width:"100%", color:"white"}}
                className={styles.footer}
            >
                <p>{data.descripcion}</p>
            </div>
            
        </div>
    );
}