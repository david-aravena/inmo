"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import styles from "./cardSocialUI.module.css";

export default function CardSocialUI({ item, index }) {
  const scrollRef = useRef(null);
  const [isSelected, setIsSelected] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // ========================
  // Manejadores de eventos Mouse
  // ========================

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    if (scrollRef.current) {
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const distance = e.clientX - startX;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - distance;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // ========================
  // Manejadores de eventos Touch
  // ========================

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    if (scrollRef.current) {
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const distance = e.touches[0].clientX - startX;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - distance;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchCancel = () => {
    setIsDragging(false);
  };

  // ========================
  // Función para alternar el contenido de la tarjeta
  // ========================

  const clickCard = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSelected(!isSelected);
  };

  return (
    <div className={styles.card} key={index}>
      {/* Encabezado: Información del autor */}
      <div
        className={styles.headerCard}
        style={{ position: "absolute", top: 0, left: 0, width: "100%" }}
      >
        <Link href={`/user/${item.author}`} key={index}>
          <div className={styles.authorContainer}>
            <img
              src={item.photoAuthor}
              alt={`Foto de ${item.author}`}
              height="50"
              width="50"
              style={{ borderRadius: "50%", objectFit: "cover" }}
            />
            <h3 style={{ marginLeft: "10px", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)" }}>
              {item.author}
            </h3>
          </div>
        </Link>
      </div>

      {/* Contenedor de imágenes con desplazamiento */}
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "auto",
          cursor: isDragging ? "grabbing" : "grab",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchCancel}
      >
        {item.images.map((image, i) => (
          <img
            key={i}
            src={image}
            alt={`Imagen ${i + 1} de la publicación`}
            draggable="false" // Deshabilita el arrastre nativo de la imagen
            onDragStart={(e) => e.preventDefault()}
            style={{
              objectFit: "cover",
              height: "100%",
              width: "100%",
              userSelect: "none",
            }}
          />
        ))}
      </div>

      {/* Pie de tarjeta */}
      <div
        className={styles.footerCard}
        style={{ position: "absolute", bottom: 0, left: 0, width: "100%" }}
        onClick={clickCard}
      >
        <p>{item.content}</p>
      </div>

      {/* Contenido expandido cuando se selecciona la tarjeta */}
      {isSelected && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "auto",
          }}
          className={styles.contentContainer}
          onClick={clickCard}
        >
          {item.content}
        </div>
      )}
    </div>
  );
}
