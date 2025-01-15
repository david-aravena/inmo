import Image from "next/image";
import CardSocialUI from "src/ui/social/CardSocialUI"
import ChangeContentBar from 'src/components/changeContentBar/'
import {getSocialPosts} from 'src/utils/social/'
import styles from './socialUI.module.css'


export default async function Social(){

    const posts = await getSocialPosts()

    return(
        <div style={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center"}}>
            {posts.map((item) => (
                <CardSocialUI item={item} index={item.id} styles={styles}>
                    <Image
                        src={item.image}
                        alt="error"
                        layout="fill"
                        style={{objectFit:"cover", height:"100%", width:"100%"}}

                    />
                </CardSocialUI>
            ))}
            <div className="changeContentBarContainer">
                <ChangeContentBar />
            </div>
        </div>
    )
}