import {getItems} from 'src/utils/getItems/'

export const get = async() => {
    const items = await getItems("properties");
    return items
}