import axios from 'axios'

const API_URL = '/api/items'

// Get All Items
const list = async () => {
    const response = await axios.get(API_URL, { withCredentials: true })
    return response.data
}

// Save Item
const save = async (itemData) => {
    console.log(itemData);
    const response = await axios.post(API_URL, itemData, { withCredentials: true },)
    return response.data
}



const itemService = {
    list,
    save
}

export default itemService