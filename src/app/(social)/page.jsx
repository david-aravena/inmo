import Image from "next/image";
import Link from "next/link";
import CardSocialUI from "src/ui/social/CardSocialUI"
import ChangeContentBar from 'src/components/changeContentBar/'
import Search from 'src/components/searchItems/'
import {getSocialPosts} from 'src/utils/social/'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Social(){

    const icons = [
        {
            url: "/",
            svg: "/svg/users.svg"
        },
        {
            url: "/properties",
            svg: "/svg/realstate.svg"
        },
        {
            url: "/info",
            svg: "/svg/info.svg"
        }
    ]

    await delay(2000);
    const posts = await getSocialPosts();


    return(
        <>
            
            <div className="searchContainer">
                <Link href={`/buscador`}>
                    <Search />
                </Link>
            </div>
            <div style={{position:"relative", width:"100%", display:"flex", flexDirection:"column", alignItems:"center", height:"auto"}}>
                {posts.map((item, index) => (
                    <CardSocialUI item={item} index={index}>
                        <Image
                            src={item.image}
                            alt="error"
                            layout="fill"
                            style={{objectFit:"cover", height:"100%", width:"100%"}}

                        />
                    </CardSocialUI>
                ))}
            </div>
            <div className="changeContentBarContainer">
                <ChangeContentBar icons={icons} />
            </div>
        </>
    )
}