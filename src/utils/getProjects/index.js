export const getProjects = async (id) => {
  const url = `https://pssoft.cl/TI_Proyectos/obtenerProyectos?regionId=0&comunaId=0&empresaId=0&usuarioId=${id}`;

  try {
    const response = await fetch(url, {
      cache: "no-store" // Evita que Next.js almacene en caché la respuesta
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
