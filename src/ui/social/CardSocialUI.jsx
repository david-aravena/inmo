"use client";
import { useState } from "react";
import styles from './cardSocialUI.module.css'

export default function CardSocialUI({ children, item, index }) {
  const [isSelected, setIsSelected] = useState(false);

  const clickCard = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSelected(!isSelected);
  }

  return (
    <div className={styles.card} key={index} onClick={(e) => clickCard(e)}>
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

      {isSelected && (
        <div
          style={{position:"absolute", bottom:0, left:0, width:"100%", height:"auto"}}
          className={styles.contentContainer} 
          onClick={(e) => clickCard(e)}
        >
          {item.content}
        </div>
      )}
    </div>
  );
}
