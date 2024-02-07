import axios from "axios";

const axiosClient = axios.create({
    baseURL: `https://coding.zippy.com.gh/api`
})

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('ACCESS_TOKEN');
    config.headers.Authorization = `Bearer ${token}`
    return config;
})

axiosClient.interceptors.response.use((response) => {
    return response
}, (error) => {
    const { response } = error;
    console.log(response)
    if (response) {
        localStorage.removeItem('ACCESS_TOKEN')
    }
    throw error;
})

export default axiosClient