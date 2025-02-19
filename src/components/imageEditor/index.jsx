import { useState } from "react";

export default function Editor({ images }) {

  return (
    <div style={{display:"flex", width:"100%", overflow:"auto", margin:"auto"}}>
      {images.map((image, index) => (
        <img src={image.objectUrl} alt="" key={index} width="400px" height="500px" style={{objectFit:"cover", padding:"0 8px"}} />
      ))}
    </div>
  );
}
