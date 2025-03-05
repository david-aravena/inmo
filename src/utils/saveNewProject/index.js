import {uploadImages} from 'src/serverless/storage/'

export const saveNewProject = (formData, token) => {
  const { image, ...formDataWithoutImage } = formData;

  uploadImages([image]).then((result) => {
    fetch("https://pssoft.cl/TI_Proyectos/crearProyecto/", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` 
      },
      body: JSON.stringify({ ...formDataWithoutImage, ...result }),
    })
    .then(response => response.json())
    .then(data => console.log("exito: ", data))
    .catch(error => console.error("Error:", error))
  })
  
}

