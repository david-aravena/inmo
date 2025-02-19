export const getProject = async (id, token) => {

  const url = `https://pssoft.cl/TI_Proyectos/obtenerPropiedadesProyecto?proyectoId=${id}`;

  try {
    const response = await fetch(url, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.statusText}`);
    }

    const propiedades = [
      {

      }
    ]

    const data = await response.json();
    return JSON.parse(data.datos);
  } catch (error) {
    console.error('Error al obtener los proyectos:', error);
    throw error;
  }
};
