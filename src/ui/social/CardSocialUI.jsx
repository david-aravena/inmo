"use client";
import { useState } from "react";

export default function CardSocialUI({ children, item, styles }) {
  const [isClick, setIsClick] = useState(false);

  const clickCard = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsClick(!isClick);
  }

  return (
    <div className={styles.card} onClick={(e) => clickCard(e)}>
      <div 
        className={styles.headerCard}
        style={{position:"absolute", top:0, left:0, width:"100%"}} 
      >
        <div className={styles.authorContainer}>
          <img
            src={item.photoAuthor}
            alt={`Foto de ${item.author}`}
            height="50"
            width="50"
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
          <h3 style={{ marginLeft: "10px", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)"}}>{item.author}</h3>
        </div>
      </div>

      {/* imagen ocupa el tamaño completo de la card */}
      {children}
      
      <div 
        className={styles.footerCard} 
        style={{position:"absolute", bottom:0, left:0, width:"100%"}}
      >
        <p>{item.content}</p>
      </div>
    </div>
  );
}
