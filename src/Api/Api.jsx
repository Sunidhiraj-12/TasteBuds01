import axios from 'axios';
 const api = axios.create({
    baseURL: "https://dummyjson.com/recipes",
 })
 export default api