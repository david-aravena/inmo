import ChangeContentBar from 'src/components/changeContentBar/'

export default function Profile(){

    
    const icons = [
        {
            url: "/proyectos",
            svg: "/svg/projects.svg"
        },
        {
            url: "/perfil",
            svg:"/svg/profile.svg"
        }
    ]

    return(
        <>
            <h2 style={{color:"white"}}>Perfil de usuario: </h2>
            <div className="changeContentBarContainer">
                <ChangeContentBar icons={icons} />
            </div>
        </>
    )
}