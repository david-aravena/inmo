import Link from "next/link";
import Image from "next/image";
import CardSocialUI from "src/ui/social/CardSocialUI"
import {getSocialPosts} from 'src/utils/social/'
import styles from './socialUI.module.css'


export default async function Social(){

    const posts = await getSocialPosts()

    return(
        <div style={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center"}}>
            {posts.map((item, index) => (
                <Link href={``} key={index}>
                    <CardSocialUI item={item} index={index} styles={styles}>
                        <Image
                            src={item.image}
                            alt="error"
                            layout="fill"
                            style={{objectFit:"cover", height:"100%", width:"100%"}}

                        />
                    </CardSocialUI>
                </Link>
            ))}
        </div>
    )
}