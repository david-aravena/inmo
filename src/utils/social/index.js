export const getSocialPosts = async() => {
    const posts = [
        {
            content: "¿Sabías que el 70% de las personas consideran los bienes raíces como la inversión más segura? Las estadísticas demuestran que la compra de propiedades es una de las estrategias más efectivas para mantener el valor del dinero a largo plazo.",
            image: "https://firebasestorage.googleapis.com/v0/b/inmobiliario-e6a3e.appspot.com/o/social%2Fque-son-los-bienes-raices.jpg?alt=media&token=f7f02b9d-e7a7-4b06-90b5-e06ec4a7871b",
            author:"David Powel",
            photoAuthor:"https://media.istockphoto.com/id/1335941248/es/foto/foto-de-un-joven-guapo-de-pie-sobre-un-fondo-gris.jpg?s=612x612&w=0&k=20&c=UK8BGVVCSmHen0sJAgxoZ6sBLrs0ld4TuCwczZZ89AY="
        },
        {
            content: "Reflexión: Los bienes raíces no son solo ladrillos y cemento; son los cimientos donde construimos nuestros sueños, nuestras familias y nuestras vidas. Cada espacio tiene una historia, y cada historia merece ser contada.",
            image: "https://firebasestorage.googleapis.com/v0/b/inmobiliario-e6a3e.appspot.com/o/social%2F1724354044_rt45%20(2)-800x800.jpg?alt=media&token=1bcb46f0-0c70-417c-bcb1-08334dd25fa9",
            author: "Miguel Diaz",
            photoAuthor:"https://definicion.de/wp-content/uploads/2008/05/hombre-1.jpg"
        },
        {
            content: "Consejo: Antes de firmar un contrato de arrendamiento, asegúrate de leer todas las cláusulas. Algunas incluyen cargos adicionales inesperados o restricciones que podrían afectar tu experiencia como inquilino.",
            image: "https://firebasestorage.googleapis.com/v0/b/inmobiliario-e6a3e.appspot.com/o/social%2Fimages.jpg?alt=media&token=1a9ad7d5-4169-4148-b5b8-9dbcb4ff4798",
            author:"Daniela Cespedes",
            photoAuthor:"https://img.freepik.com/foto-gratis/retrato-expresivo-mujer-joven_1258-48167.jpg"

        },
        {
            content: "Oferta especial: Los primeros compradores de un desarrollo inmobiliario suelen obtener descuentos exclusivos y beneficios adicionales como estacionamiento gratuito o membresías en clubes deportivos. ¡Infórmate sobre estos incentivos en tu zona!",
            image: "https://firebasestorage.googleapis.com/v0/b/inmobiliario-e6a3e.appspot.com/o/social%2Fseguridad-en-redes-sociales-1200x630.original.jpg?alt=media&token=fa4b3713-dfb0-4062-b149-ece4f9850746",
            author:"Diana Marambio",
            photoAuthor:"https://eltiempodelasmujeres.elmundo.es/img/marian-rojas.png"
        },

        {
            content: "Dato curioso: En las grandes ciudades, el precio promedio por metro cuadrado puede variar hasta un 50% dependiendo de la cercanía a zonas comerciales y estaciones de transporte público. Elegir sabiamente puede ahorrarte mucho dinero.",
            image: "https://firebasestorage.googleapis.com/v0/b/inmobiliario-e6a3e.appspot.com/o/social%2Fmaxresdefault.jpg?alt=media&token=9e2beb11-ed44-4550-b373-52448d7329cb",
            author:"Oso loco",
            photoAuthor:"https://media.istockphoto.com/id/1316604492/es/foto/retrato-de-perfil-de-un-hombre-de-mediana-edad-sobre-fondo-gris.jpg?s=612x612&w=0&k=20&c=SK7l8rlAnPVAuxRJZYZvHTFG0qeU_jYoVpqY3nIpJRA="
        },
        {
            content: "Reflexión extensa: Una casa no es solo un refugio, sino el lugar donde se construyen los recuerdos más valiosos. Las paredes que te rodean han sido testigos de risas, lágrimas y sueños. Al invertir en un inmueble, no estás comprando un espacio, sino una experiencia que marcará tu vida y la de tus seres queridos.",
            image: "https://firebasestorage.googleapis.com/v0/b/inmobiliario-e6a3e.appspot.com/o/social%2Fistockphoto-1492732089-612x612.jpg?alt=media&token=ab5d7a24-8fc5-4802-857b-f041a4f6bad0",
            author:"Diana Marambio",
            photoAuthor:"https://eltiempodelasmujeres.elmundo.es/img/marian-rojas.png"
        },
        {
            content: "Estadística interesante: Según estudios recientes, el 80% de los inversionistas novatos en bienes raíces optan por inmuebles residenciales antes de expandirse hacia propiedades comerciales o industriales.",
            image: "https://firebasestorage.googleapis.com/v0/b/inmobiliario-e6a3e.appspot.com/o/social%2Fimages%20(1).jpg?alt=media&token=a35fbee5-bd29-4c16-80db-813ea2f044d7",
            author:"Daniela Cespedes",
            photoAuthor:"https://img.freepik.com/foto-gratis/retrato-expresivo-mujer-joven_1258-48167.jpg"
        },
        {
            content: "Tip: Asegúrate de revisar las tendencias del mercado inmobiliario antes de tomar cualquier decisión. Estar informado sobre el crecimiento de una zona o la depreciación de otra puede marcar la diferencia en tu inversión.",
            image: "https://firebasestorage.googleapis.com/v0/b/inmobiliario-e6a3e.appspot.com/o/social%2Fimages%20(4).jpg?alt=media&token=0cb09b95-5a09-4390-9fa6-a652ce7869a0",
            author:"Oso loco",
            photoAuthor:"https://media.istockphoto.com/id/1316604492/es/foto/retrato-de-perfil-de-un-hombre-de-mediana-edad-sobre-fondo-gris.jpg?s=612x612&w=0&k=20&c=SK7l8rlAnPVAuxRJZYZvHTFG0qeU_jYoVpqY3nIpJRA="
        },
        {
            content: "Noticia: Recientes cambios en las leyes de urbanización buscan facilitar la construcción de viviendas sostenibles en las principales ciudades. Estas medidas pretenden promover la eficiencia energética y reducir el impacto ambiental.",
            image: "https://firebasestorage.googleapis.com/v0/b/inmobiliario-e6a3e.appspot.com/o/social%2Fimages%20(3).jpg?alt=media&token=0f1eaa62-dae5-44f6-ad5d-52c1d245ee1b",
            author:"Miguel Diaz",
             photoAuthor:"https://definicion.de/wp-content/uploads/2008/05/hombre-1.jpg"
        },
        {
            content: "Oferta educativa: Inscríbete a nuestro seminario gratuito sobre estrategias para maximizar el valor de tus inversiones inmobiliarias. Aprenderás desde cómo evaluar una propiedad hasta las mejores opciones de financiamiento.",
            image: "https://firebasestorage.googleapis.com/v0/b/inmobiliario-e6a3e.appspot.com/o/social%2Fimages%20(2).jpg?alt=media&token=a3afbbc3-02df-422a-bb39-d3df32d85e7a",
            author:"Luis Daniel",
            photoAuthor:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdPSmmKm0bH3mabimaLCdzQ388vVui1iVdUw&s"
        }
    ];
    

    return posts
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const json = await response.json();
    return json;
}