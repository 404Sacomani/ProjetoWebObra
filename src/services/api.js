import axios from 'axios'

const api = axios.create({
    baseURL: 'https://walrus-app-y2l9m.ondigitalocean.app/'
})

export default api