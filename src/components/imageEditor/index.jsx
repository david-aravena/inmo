import { useState, useRef } from "react";

export default function Editor({ image, close, saveImage }) {
  const [scale, setScale] = useState(1);
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [lastX, setLastX] = useState(null);
  const [lastY, setLastY] = useState(null);

  const imageRef = useRef(null);

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

  const handleStart = (e) => {
    setIsDragging(true);
    setLastX(e.type === "touchstart" ? e.touches[0].clientX : e.clientX);
    setLastY(e.type === "touchstart" ? e.touches[0].clientY : e.clientY);
  };

  const handleEnd = () => {
    setIsDragging(false);
    setLastX(null);
    setLastY(null);
  };

  const containerStyles = {
    width: `${400}px`,
    height: `${500}px`,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    touchAction: "none",
    background: "#141414",
    border: "2px solid green",
  };

  return (
    <>
      <div
        style={containerStyles}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
      >
        <img
          src={image}
          alt="Uploaded"
          draggable="false"
          onMouseDown={handleStart}
          onTouchStart={handleStart}
          ref={imageRef}
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
      </div>

      {/* Slider para modificar la escala */}
      <div style={{ position: "absolute", top: "20px", width: "100%", textAlign: "center" }}>
        <label htmlFor="scaleSlider" style={{ display: "block", color: "#fff" }}>
          Escala
        </label>
        <input
          type="range"
          id="scaleSlider"
          min="0.5"
          max="3"
          step="0.01"
          value={scale}
          onChange={(e) => setScale(e.target.value)}
          style={{ width: "80%" }}
        />
        <button onClick={() => close()}>cerrar editor</button>
      </div>
    </>
  );
}
