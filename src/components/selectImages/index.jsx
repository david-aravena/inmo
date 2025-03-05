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

  useEffect(() => {
    if(capturedImage){
      setImage(capturedImage)
    }
  },[capturedImage])

  const handleCapture = async () => {
    if (captureRef.current) {
      const canvas = await html2canvas(captureRef.current);
      canvas.toBlob((blob) => {
        if (blob) {
          const file = new File([blob], "captured-image.png", { type: "image/png" });
          setCapturedImage(file);
        }
      }, "image/png");
      setStartX(0);
      setTranslateX(0);
      setCurrentTranslateX(0);
    }
  };


  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  // Iniciar el arrastre con touch
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  // Mover el contenedor con el mouse
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    setTranslateX(currentTranslateX + deltaX);
  };

  // Mover el contenedor con touch
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - startX;
    setTranslateX(currentTranslateX + deltaX);
  };

  // Finalizar el arrastre con el mouse
  const handleMouseUp = () => {
    setIsDragging(false);
    setCurrentTranslateX(translateX);
  };

  // Finalizar el arrastre con touch
  const handleTouchEnd = () => {
    setIsDragging(false);
    setCurrentTranslateX(translateX);
  };

  return (
    <div>
      <button onClick={handleCapture}>Capturar</button>
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
            width:"100%",
            height:"100%",
            display: "flex",
            transform: `translateX(${translateX}px)`,
            transition: isDragging ? "none" : "transform 0.2s ease-out",
            cursor: isDragging ? "grabbing" : "grab",
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {images.map((image) => (
            <img
              src={capturedImage ? URL.createObjectURL(capturedImage) : URL.createObjectURL(image)}
              alt=""
              height="100%"
              style={{ userSelect: "none" }}
              draggable="false"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
