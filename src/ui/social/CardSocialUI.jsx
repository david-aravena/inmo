
export default function CardSocialUI({children, item, styles}){
    return(
        <>
            <div className={styles.card}>
                <div className={styles.contentContainer}>
                    <div style={{display:"flex"}}>
                        <img src="https://media.istockphoto.com/id/1335941248/es/foto/foto-de-un-joven-guapo-de-pie-sobre-un-fondo-gris.jpg?s=612x612&w=0&k=20&c=UK8BGVVCSmHen0sJAgxoZ6sBLrs0ld4TuCwczZZ89AY=" height={"50px"} width={"50px"} style={{borderRadius:"50px", objectFit:"cover"}} />
                        <h3>{item.author}</h3>
                    </div>
                    <p>{item.content}</p>
                </div>

                    {children}
            </div>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <button className="buttons">comentarios</button>
                <button className="buttons">me interesa</button>
            </div>
            
        </>
    )
}