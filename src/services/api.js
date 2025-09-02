import axios from 'axios'

const api = axios.create({
    //baseURL: 'https://walrus-app-y2l9m.ondigitalocean.app/'
    baseURL: 'http://localhost:8080'
})

export default api