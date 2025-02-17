export const getProject = async (id) => {
  const url = `https://pssoft.cl/TI_Proyectos/obtenerPropiedadesProyecto?proyectoId=${id}`;

  try {
    const response = await fetch(url, {
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.statusText}`);
    }

    const data = await response.json();
    return JSON.parse(data.datos);
  } catch (error) {
    console.error('Error al obtener los proyectos:', error);
    throw error;
  }
};
