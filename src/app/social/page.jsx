import Link from "next/link";
import Image from "next/image";
import CardSocialUI from "src/ui/social/CardSocialUI"
import {getSocialPosts} from 'src/utils/social/'

export default async function Social(){

    const posts = await getSocialPosts()

    return(
        <div style={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center"}}>
            {posts.map((item, index) => (
                <Link href={`/show/${item.id}`} key={index}>
                    <CardSocialUI item={item} index={index}>
                        <Image
                            src={item.image}
                            alt="error"
                            layout="fill"
                            objectFit="cover"
                        />
                    </CardSocialUI>
                </Link>
            ))}
        </div>
    )
}