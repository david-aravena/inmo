export const getUser = async(name) => {
    const users = [
        {
            name:"David Powel",
            photo:"https://media.istockphoto.com/id/1335941248/es/foto/foto-de-un-joven-guapo-de-pie-sobre-un-fondo-gris.jpg?s=612x612&w=0&k=20&c=UK8BGVVCSmHen0sJAgxoZ6sBLrs0ld4TuCwczZZ89AY="
        },
        {
            name: "Miguel Diaz",
            photo:"https://definicion.de/wp-content/uploads/2008/05/hombre-1.jpg"
        },
        {
            name:"Daniela Cespedes",
            photo:"https://img.freepik.com/foto-gratis/retrato-expresivo-mujer-joven_1258-48167.jpg"
        },
        {
            name:"Diana Marambio",
            photo:"https://eltiempodelasmujeres.elmundo.es/img/marian-rojas.png"
        },
        {
            name:"Oso loco",
            photo:"https://media.istockphoto.com/id/1316604492/es/foto/retrato-de-perfil-de-un-hombre-de-mediana-edad-sobre-fondo-gris.jpg?s=612x612&w=0&k=20&c=SK7l8rlAnPVAuxRJZYZvHTFG0qeU_jYoVpqY3nIpJRA="
        
        },
        {
            name:"Luis Daniel",
            photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdPSmmKm0bH3mabimaLCdzQ388vVui1iVdUw&s"
        
        }
    ]

    const user = users.find(user => user.name === name);
    return user || null;
}
