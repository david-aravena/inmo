import styles from './cardSocialUI.module.css'

export default function CardSocialUI({children, item}){
    return(
        <>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    {children}
                </div>
            
                <div className={styles.contentContainer}>
                    <h3>{item.author}</h3>
                    <p>{item.content}</p>
                    <div style={{display:"flex", justifyContent:"space-between", padding:"8px"}}>
                        <button className={styles.buttons}>comentarios</button>
                        <button className={styles.buttons}>me interesa</button>
                    </div>
                </div>
                
            </div>
            
        </>
    )
}