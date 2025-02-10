import { useState, useRef } from "react";

export default function MovableImage({ 
  width = 400, 
  height = 500, 
  autoSize = "none",
  onSaveImage
}) {
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [scale, setScale] = useState(1);
  const [image, setImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [lastX, setLastX] = useState(null);
  const [lastY, setLastY] = useState(null);
  const [isEdited, setIsEdited] = useState(false);
  const imageRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(url);
    }
  };

  const handleStart = (e) => {
    setIsDragging(true);
    setLastX(e.type === "touchstart" ? e.touches[0].clientX : e.clientX);
    setLastY(e.type === "touchstart" ? e.touches[0].clientY : e.clientY);
  };

  const handleMove = (e) => {
    if (!isDragging || !image) return;
    const clientX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    const clientY = e.type === "touchmove" ? e.touches[0].clientY : e.clientY;
    if (lastX !== null && lastY !== null) {
      setPositionX((prev) => prev + (clientX - lastX));
      setPositionY((prev) => prev + (clientY - lastY));
    }
    setLastX(clientX);
    setLastY(clientY);
    if (e.type === "touchmove") {
      e.preventDefault();
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
    setLastX(null);
    setLastY(null);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!imageRef.current) return;
  
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
  
    canvas.width = imageRef.current.naturalWidth;
    canvas.height = imageRef.current.naturalHeight;
  
    ctx.drawImage(imageRef.current, 0, 0);
  
    canvas.toBlob((blob) => {
      if (blob) {
        onSaveImage(blob);
        setIsEdited(true);
        alert("Imagen editada. Revise el formulario y guárdelo.");
      }
    }, "image/png");
  };

  const containerStyles = {
    width: autoSize === "width" ? "auto" : autoSize === "full-width" ? "100%" : `${width}px`,
    height: autoSize === "height" ? "auto" : autoSize === "full-height" ? "100%" : `${height}px`,
    overflow: "hidden",
    border: "2px solid black",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    touchAction: "none",
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <div 
        style={containerStyles} 
        onMouseMove={!isEdited ? handleMove : undefined} 
        onMouseUp={!isEdited ? handleEnd : undefined} 
        onMouseLeave={!isEdited ? handleEnd : undefined} 
        onTouchMove={!isEdited ? handleMove : undefined} 
        onTouchEnd={!isEdited ? handleEnd : undefined}
      >
        {image ? 
          <img
            ref={imageRef}
            src={image}
            alt="Uploaded"
            draggable="false"
            onMouseDown={handleStart}
            onTouchStart={handleStart}
            style={{
              position: "absolute",
              left: `calc(50% + ${positionX}px)`, 
              top: `calc(50% + ${positionY}px)`, 
              transform: `translate(-50%, -50%) scale(${scale})`, 
              transformOrigin: "center", 
              cursor: isDragging ? "grabbing" : "grab",
              height: "100%",
            }}
          />
        :
          <img
            src={"/svg/photoEditor.svg"}
            alt="Uploaded"
            draggable="false"
            style={{
              position: "absolute",
              transformOrigin: "center", 
              cursor: isDragging ? "grabbing" : "grab",
              height:"15%"
            }}
          />
        }
      </div>

      {image && !isEdited && (
        <>
          <label style={{color:"white"}}>
            Escala: {scale.toFixed(2)}
            <input 
              type="range" 
              min="0.5" 
              max="2" 
              step="0.05" 
              value={scale} 
              onChange={(e) => setScale(parseFloat(e.target.value))} 
            />
          </label>
    
          <button type="button" onClick={handleSave}>Aplicar edición</button>
        </>
      )}
    </div>
  );
}
