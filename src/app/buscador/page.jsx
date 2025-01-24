import FormSearch from 'src/components/formSearch'
export default function Search(){

    const buttons=[
        { 
            value: "Propiedades", 
            attributes: [
                {text:"dormitorios", name:"roomsNumber"},
                {text: "baños", name:"bathroomsNumber"}, 
                {text: "estacionamientos", name:"parking"}, 
                {text: "mts", name:"mts"}, 
                {text: "direccion", name:"address"}
            ] 
        },
        { 
            value: "Publicaciones", 
            attributes: [
                {text:"tema", name:"theme"},
                {text: "tipo", name:"type"}
            ] 
        },
        { 
            value: "Usuarios", 
            attributes: [
                {text:"nombre", name:"name"},
                {text: "autor", name:"author"}, 
                {text: "ciudad", name:"city"},
                {text: "rubro", name:"heading"},
                {text: "edad", name:"age"}
            ] 
        }
      ]

    return(
        <div style={{width:"100%", height:"100%", display:"flex"}}> 
            <FormSearch buttons={buttons} />
        </div>
    )
}