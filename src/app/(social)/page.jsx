import Link from "next/link";
import CardSocialUI from "src/ui/social/CardSocialUI"
import ChangeContentBar from 'src/components/changeContentBar/'
import Search from 'src/components/searchItems/'
import {getSocialPosts} from 'src/utils/social/'

export default async function Social(){

    const posts = await getSocialPosts();

    return(
        <>
            <div style={{width:"100%", height:"100%", display:"flex", flexDirection:"column", alignItems:"center", height:"auto"}}>
                {posts.map((item, index) => (  
                    <CardSocialUI item={item} index={index} />
                ))}
            </div>

            <div className="changeContentBarContainer">
                <ChangeContentBar />
            </div>
            <div className="searchContainer">
                <Link href={`/buscador`}>
                    <Search />
                </Link>
            </div>
        </>
    )
}