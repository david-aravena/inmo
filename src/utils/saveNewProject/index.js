export const saveNewProject = (formData, token) => {
  fetch("https://pssoft.cl/TI_Proyectos/crearProyecto/", {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}` 
    },
    body: JSON.stringify(formData),
  })
  .then(response => response.json())
  .then(data => console.log("exito: ", data))
  .catch(error => console.error("Error:", error))
}

