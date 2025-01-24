import {getUser} from 'src/utils/getUser/'

export default async function User({ params }){

    const { id } = await params;
    const decodedName = decodeURIComponent(id);
      const user = await getUser(decodedName);
      console.log("user", user)
      
    return(
        <div style={{width:"100%", height:"100%", overflow:"auto", background:"red"}}>
            <p>{user.name}</p>
        </div>
    )
}