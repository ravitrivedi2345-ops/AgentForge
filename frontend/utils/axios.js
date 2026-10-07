import axios from "axios";

const serverUrl = import.meta.env.VITE_SERVER_URL;
const baseURL = serverUrl
    ? (/^https?:\/\//i.test(serverUrl) ? serverUrl : `https://${serverUrl}`)
    : window.location.origin;

const api=axios.create({
    baseURL,
    withCredentials:true
})

export default api
