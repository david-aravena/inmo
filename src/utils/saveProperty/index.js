export const saveNewProperty = (formData, token) => {
  console.log(formData, token)
  fetch("https://pssoft.cl/TI_Proyectos/crearPropiedad/", {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}` 
    },
    body: JSON.stringify(formData),
  })
  .then(response => response.json())
  .then(data => console.log("exito: ", data))
  .catch(error => console.error("Error:", error));
}

