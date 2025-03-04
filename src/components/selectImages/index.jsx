import { useState, useRef, useEffect } from "react";

export default function SelectImages({images}){

  const [imageSelected, setImageSelected] = useState(null);

  return(
    <div style={{width:"400px", height:"500px", overflow:"hidden"}}>
      {images.map((image) => (
        <img src={image.objectUrl} alt="" height={"100%"} onClick={() => setImageSelected(image)} />
      ))}

      {imageSelected && <ImageCropper imageSelected={imageSelected} />}
    </div>
  )
}


function ImageCropper({imageSelected}) {
  const [image, setImage] = useState(imageSelected);
  const canvasRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (!image) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = image;
    img.onload = () => {
      // Redibujar la imagen en el canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, 400, 500);
    };
  }, [image]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = "cropped-image.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div style={{ textAlign: "center" }}>
      <input type="file" onChange={handleFileChange} accept="image/*" />
      <div
        style={{
          width: "400px",
          height: "500px",
          overflow: "hidden",
          border: "2px solid black",
          margin: "20px auto",
        }}
      >
        {image && <img src={image} alt="preview" style={{ width: "100%" }} />}
      </div>
      <canvas ref={canvasRef} width="400" height="500" style={{ display: "none" }} />
      {image && <button onClick={handleDownload}>Descargar Imagen</button>}
    </div>
  );
}
