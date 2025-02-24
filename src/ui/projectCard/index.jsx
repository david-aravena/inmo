import styles from './projectCardUI.module.css';

export default function ProjectCardUI({ data, index, children }) {

    return (
        <div className={styles.projectContainer}>
            <div className={styles.nameContainer}>
                <h3 style={{ color:"white", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)"}}>
                    {data.descripcion}
                </h3>
            </div>
            <div className={styles.dataContainer}>
                <ul>
                    <li>Inicio: {data.fechaInicio}</li>
                    <li>Termino: {data.fechaFin}</li>
                    <li>Estado: {data.estadoProyecto}</li>
                    <li>Vigente: {data.vigente}</li>
                </ul>
            </div>
            
        </div>
    );
}