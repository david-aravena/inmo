import {getItems} from "src/utils/getItems/"
import {getSocialPosts} from 'src/utils/social/'

export const getUser = async(name) => {
    const users = [
        {
            "name": "David Powel",
            "email": "david@gmail.com",
            "phone": "123456789",
            "image": "https://media.istockphoto.com/id/1335941248/es/foto/foto-de-un-joven-guapo-de-pie-sobre-un-fondo-gris.jpg?s=612x612&w=0&k=20&c=UK8BGVVCSmHen0sJAgxoZ6sBLrs0ld4TuCwczZZ89AY="
        },
        {
            "name": "Miguel Diaz",
            "email": "miguel.diaz@example.com",
            "phone": "987654321",
            "image": "https://definicion.de/wp-content/uploads/2008/05/hombre-1.jpg"
        },
        {
            "name": "Daniela Cespedes",
            "email": "daniela.cespedes@example.com",
            "phone": "456789123",
            "image": "https://img.freepik.com/foto-gratis/retrato-expresivo-mujer-joven_1258-48167.jpg"
        },
        {
            "name": "Diana Marambio",
            "email": "diana.marambio@example.com",
            "phone": "567123456",
            "image": "https://eltiempodelasmujeres.elmundo.es/img/marian-rojas.png"
        },
        {
            "name": "Oso loco",
            "email": "oso.loco@example.com",
            "phone": "678901234",
            "image": "https://media.istockimage.com/id/1316604492/es/foto/retrato-de-perfil-de-un-hombre-de-mediana-edad-sobre-fondo-gris.jpg?s=612x612&w=0&k=20&c=SK7l8rlAnPVAuxRJZYZvHTFG0qeU_jYoVpqY3nIpJRA="
        },
        {
            "name": "Luis Daniel",
            "email": "luis.daniel@example.com",
            "phone": "789012345",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdPSmmKm0bH3mabimaLCdzQ388vVui1iVdUw&s"
        }
    ]
    
    const user = users.find(user => user.name === name);
    const propertiesUser = await getItems()
    const publicationsUser = await getSocialPosts()
    return {user, propertiesUser, publicationsUser} || null;
}
