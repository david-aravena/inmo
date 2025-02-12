export const saveNewProperty = (formData) => {
  fetch("https://pssoft.cl/TI_Proyectos/crearPropiedad/", {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3Mzg3NTAwNDN9.-TJodmsD1UY8-zhq91tFE53X-djpdwt3-AK0CcHSUU4` 
    },
    body: JSON.stringify(formData),
  })
  .then(response => response.json())
  .then(data => console.log("exito: ", data))
  .catch(error => console.error("Error:", error));
}
