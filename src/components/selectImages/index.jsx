import { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";

export default function SelectImages({ images, setImage }) {
  const captureRef = useRef(null);
  const containerRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [currentTranslateX, setCurrentTranslateX] = useState(0);

  // Estado para controlar el modo edición
  const [isEditing, setIsEditing] = useState(false);

  // Offset en píxeles para desplazar la imagen al hacer click en las flechas
  const scrollOffset = 100;

  useEffect(() => {
    if (capturedImage) {
      setImage(capturedImage);
    }
  }, [capturedImage]);

  const handleCapture = async () => {
    if (captureRef.current) {
      // Reiniciamos los estados de desplazamiento para volver al estado original
      setStartX(0);
      setTranslateX(0);
      setCurrentTranslateX(0);
      // Capturamos el contenedor sin las flechas (ya que isEditing es false)
      const canvas = await html2canvas(captureRef.current);
      canvas.toBlob((blob) => {
        if (blob) {
          const file = new File([blob], "captured-image.png", { type: "image/png" });
          setCapturedImage(file);
        }
      }, "image/png");
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    setTranslateX(currentTranslateX + deltaX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - startX;
    setTranslateX(currentTranslateX + deltaX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setCurrentTranslateX(translateX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setCurrentTranslateX(translateX);
  };

  // Flecha izquierda: desplaza la imagen hacia la izquierda (restando el offset)
  const handleLeftArrowClick = () => {
    const newTranslateX = currentTranslateX - scrollOffset;
    setTranslateX(newTranslateX);
    setCurrentTranslateX(newTranslateX);
  };

  // Flecha derecha: desplaza la imagen hacia la derecha (sumando el offset)
  const handleRightArrowClick = () => {
    const newTranslateX = currentTranslateX + scrollOffset;
    setTranslateX(newTranslateX);
    setCurrentTranslateX(newTranslateX);
  };

  // Al hacer click en el botón:
  // - Si no está en modo edición, entra en modo edición.
  // - Si ya está en modo edición, oculta los controles (flechas), espera a que se remuevan del DOM y captura la imagen.
  const handleButtonClick = () => {
    if (!isEditing) {
      setIsEditing(true);
    } else {
      setIsEditing(false);
      // Usamos setTimeout para esperar a que se re-renderice sin las flechas
      setTimeout(() => {
        handleCapture();
      }, 0);
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>
        {isEditing ? "aplicar edicion" : "editar"}
      </button>
      <div
        style={{
          width: "400px",
          height: "500px",
          overflow: "hidden",
          position: "relative",
          border: "1px solid black",
        }}
        ref={captureRef}
      >
        <div
          ref={containerRef}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            transform: `translateX(${translateX}px)`,
            transition: isDragging ? "none" : "transform 0.2s ease-out",
            cursor: isEditing ? (isDragging ? "grabbing" : "grab") : "default",
          }}
          onMouseDown={isEditing ? handleMouseDown : undefined}
          onMouseMove={isEditing ? handleMouseMove : undefined}
          onMouseUp={isEditing ? handleMouseUp : undefined}
          onMouseLeave={isEditing ? handleMouseUp : undefined}
          onTouchStart={isEditing ? handleTouchStart : undefined}
          onTouchMove={isEditing ? handleTouchMove : undefined}
          onTouchEnd={isEditing ? handleTouchEnd : undefined}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={
                capturedImage
                  ? URL.createObjectURL(capturedImage)
                  : URL.createObjectURL(image)
              }
              alt=""
              height="100%"
              style={{ userSelect: "none" }}
              draggable="false"
            />
          ))}
        </div>
        {isEditing && (
          <>
            {/* Flecha izquierda en el contenedor principal */}
            <div
              onClick={handleLeftArrowClick}
              style={{
                position: "absolute",
                top: "50%",
                left: "0",
                transform: "translate(-50%, -50%)",
                background: "rgba(0,0,0,0.5)",
                color: "white",
                padding: "10px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              &#9664;
            </div>
            {/* Flecha derecha en el contenedor principal */}
            <div
              onClick={handleRightArrowClick}
              style={{
                position: "absolute",
                top: "50%",
                right: "0",
                transform: "translate(50%, -50%)",
                background: "rgba(0,0,0,0.5)",
                color: "white",
                padding: "10px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              &#9654;
            </div>
          </>
        )}
      </div>
    </div>
  );
}
