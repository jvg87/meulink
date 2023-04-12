import axios from "axios";

export const key = 'e9ac88fcdfad26200e58eba78e77fb7db8792c29'

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api
