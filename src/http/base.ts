import axios from "axios";

const service = axios.create({
    withCredentials: false,
    timeout: 5000,
})

//请求拦截
service.interceptors.request.use(
     (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

//响应拦截
service.interceptors.response.use(
    (response) => {
        // return response.data.data
        return response.request.responseType == "blob" ? response.data : response.data.data;
    },
    (error) => {
        const msg = error.response.data.msg || '请求失败'
        return Promise.reject(error)
    })

export default service
