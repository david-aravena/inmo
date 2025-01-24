import {getItems} from 'src/utils/getItems/'
import {getSocialPosts} from 'src/utils/social/'

export const get = async() => {
    const [items, socialPosts] = await Promise.all([
        getItems("properties"),
        getSocialPosts()
    ]);
    return {
        items,
        socialPosts
    };
}