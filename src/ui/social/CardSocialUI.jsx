"use client"
export default function CardSocialUI({ children, item, styles }) {
    return (
      <>
        <div className={styles.card}>
          {/* Contenedor fijado en la parte superior */}
          <div className={styles.contentContainer}>
            <div style={{ display: "flex" }}>
              <img
                src="https://media.istockphoto.com/id/1335941248/es/foto/foto-de-un-joven-guapo-de-pie-sobre-un-fondo-gris.jpg?s=612x612&w=0&k=20&c=UK8BGVVCSmHen0sJAgxoZ6sBLrs0ld4TuCwczZZ89AY="
                height="50px"
                width="50px"
                style={{ borderRadius: "50%", objectFit: "cover" }}
              />
              <h3>{item.author}</h3>
            </div>
            <p>{item.content}</p>
          </div>
  
          {/* Div que ocupa el espacio restante */}
          <div
            style={{
              flex: 1,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex:100
            }}
          >
            {children}
          </div>
  
          {/* Contenedor fijado en la parte inferior */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#1e1e1e"

            }}
          >
            <button type="button" className={styles.buttons} onClick={(e) => {
                e.preventDefault()
                alert("boton no habilitado")
            }}>
                comentarios
            </button>
            <button type="button" className={styles.buttons} onClick={(e) => {
                e.preventDefault()
                alert("boton no habilitado")
            }}>me interesa</button>
          </div>
        </div>
      </>
    );
  }
  