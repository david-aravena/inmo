import styles from './projectCardUI.module.css';

export default function ProjectCardUI({ data, index, children }) {

    return (
        <div className={styles.projectContainer}>
            <div style={{position:"absolute", top:0, left:0, width:"100%"}}>
                <h3 style={{ color:"white", margin: "8px", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)"}}>
                    {data.descripcion}
                </h3>
            </div>

            {children}

            <div 
                style={{position:"absolute", bottom:0, left:0, width:"100%", color:"white"}}
                className={styles.footer}
            >
                <p>{data.direccion}</p>
            </div>
            
        </div>
    );
}