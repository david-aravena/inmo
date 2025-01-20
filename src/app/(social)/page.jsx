import Image from "next/image";
import CardSocialUI from "src/ui/social/CardSocialUI"
import ChangeContentBar from 'src/components/changeContentBar/'
import Search from 'src/components/searchItems/'
import {getSocialPosts} from 'src/utils/social/'
import styles from './socialUI.module.css'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Social(){

    await delay(2000);
    const posts = await getSocialPosts();


    return(
        <>
            <div style={{position:"relative", width:"100%", display:"flex", flexDirection:"column", alignItems:"center"}}>
                <div className="searchContainer" style={{width: "fit-content"}}>
                    <Search />
                </div>
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
            </div>
            <div className="changeContentBarContainer">
                <ChangeContentBar />
            </div>
        </>
    )
}