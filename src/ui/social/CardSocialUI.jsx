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
                </div>
            </div>
            <div>
                <button>me interesa</button>
                <button>comentarios</button>
            </div>
        </>
    )
}