import {getUser} from 'src/utils/getUser/';
import Image from "next/image";
import styles from './user.module.css'

export default async function User({ params }){

    const { id } = await params;
    const decodedName = decodeURIComponent(id);
      const user = await getUser(decodedName);
      console.log("user", user)
      
    return(
        <>
        <div className={styles.messageContainer}>
                    <div className="buttons" style={{borderRadius:"0"}}>
                        <img src='/svg/message.svg' width={40} height={40}/>
                    </div>
                </div>
                
        <div className={styles.userContainer}>
                <div className={styles.imageAndLinksContainer}>
                    <div className={styles.imageContainer}>
                        <img src={user.photo} alt="photo user" style={{height:"100%", width:"100%", objectFit:"cover", borderRadius:"4px 4px 0 0"}} />

                        <div style={{position:"absolute", width:"100%", bottom:"0", backgroundColor:"rgba(0, 0, 0, 0.4)"}}>
                            <h2 className={styles.nameUser}>{user.name}</h2>
                        </div>
                    </div>
                    <div className={styles.linksUserContainer}>
                        <img src='/svg/whatsapp.svg' width={24} height={24}/>
                        <img src='/svg/linkedin.svg' width={24} height={24}/>
                        <img src='/svg/instagram.svg' width={24} height={24}/>
                        <img src='/svg/facebook.svg' width={24} height={24}/>
                    </div>
                </div>
        </div>
        </>
    )
}