import { useState } from "react";

export default function ListImagesSelected({ images, setImages }) {

  const deleteImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  }

  return (
    <div style={{ display: "flex", width: "100%", overflow: "auto", margin: "auto" }}>
      {images?.map((image, index) => (
        <ImageCard key={index} image={image} deleteImage={deleteImage} />
      ))}
    </div>
  );
}

function ImageCard({ image, deleteImage, key }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div style={{ position: "relative", display: "inline-block", margin: "10px" }}>
      <img
        src={image.objectUrl}
        alt={image.name || "Imagen seleccionada"}
        width="400px"
        height="500px"
        style={{ objectFit: "cover" }}
      />
      <button
        style={{ position: "absolute", top: 0, right: 0 }}
        onClick={() => setShowMenu(!showMenu)}
      >
        Opciones
      </button>
      {showMenu && (
        <div
          style={{
            position: "absolute",
            top: "30px",
            right: "0px",
            background: "white",
            border: "1px solid #ccc",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
            borderRadius: "5px",
            padding: "10px",
            zIndex: 10,
          }}
        >
          <button style={{ display: "block", width: "100%", padding: "5px" }}>Editar</button>
          <button style={{ display: "block", width: "100%", padding: "5px", marginTop: "5px" }} onClick={() => deleteImage(key)}>Eliminar</button>
        </div>
      )}
    </div>
  );
}
