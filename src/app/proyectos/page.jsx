import ChangeContentBar from "src/components/changeContentBar/"

export default function Projects(){

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
            <h2 style={{color:"white"}}>Gestion de proyectos</h2>
            <div className="changeContentBarContainer">
                <ChangeContentBar icons={icons} />
            </div>
        </>
    )
}

