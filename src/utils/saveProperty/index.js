import {uploadImages} from 'src/serverless/storage/'

export const saveNewProperty = (formData, token) => {

  uploadImages(formData.images)
    .then((result) => {
      const { images, ...filteredFormData } = formData;
      console.log({...filteredFormData, ...result})
      fetch("https://pssoft.cl/TI_Proyectos/crearPropiedad/", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` 
        },
        body: JSON.stringify({...filteredFormData, ...result}),
      })
      // .then(response => response.json())
      .then(data => console.log("exito: ", data))
      .catch(error => console.error("Error:", error));

    })


}

