"use client"
export default function CardSocialUI({ children, item, styles }) {
    return (
      <>
        <div className={styles.card}>
          {/* Contenedor fijado en la parte superior */}
          <div className={styles.contentContainer}>
            <div style={{ display: "flex" }}>
              <img
                src={item.photoAuthor}
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
  