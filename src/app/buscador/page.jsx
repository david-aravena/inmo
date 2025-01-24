import FormSearch from 'src/components/formSearch'
export default function Search(){

    const buttons=[
        { 
            value: "Propiedades", 
            attributes: [
                {text:"Dormitorios", name:"roomsNumber"},
                {text: "Baños", name:"bathroomsNumber"}, 
                {text: "Estacionamientos", name:"parking"}, 
                {text: "Mts", name:"mts"}, 
                {text: "Direccion", name:"address"}
            ] 
        },
        { 
            value: "Publicaciones", 
            attributes: [
                {text:"Tema", name:"theme"},
                {text: "Tipo", name:"type"}
            ] 
        },
        { 
            value: "Usuarios", 
            attributes: [
                {text:"Nombre", name:"name"},
                {text: "Autor", name:"author"}, 
                {text: "Ciudad", name:"city"},
                {text: "Rubro", name:"heading"},
                {text: "Edad", name:"age"}
            ] 
        }
      ]

    return(
        <div style={{width:"100%", height:"100%", display:"flex"}}> 
            <FormSearch buttons={buttons} />
        </div>
    )
}