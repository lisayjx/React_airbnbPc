import axios from 'axios'
import { BASE_URL, TIMEOUT } from "./config";

class YXRequest {
    //  this.instance 请求的一个实例
    constructor(baseUrl, timeout) {
        this.instance = axios.create({
            baseURL: baseUrl,
            timeout
        })

        // 响应拦截器
        this.instance.interceptors.response.use(res => {
            return res.data
        }, err => {
            return err
        })
    }

    request(config) {
        return this.instance.request(config)

    }
    get(config) {
        return this.request({ ...config, method: "get" })
    }
    post(config) {
        return this.request({ ...config, method: "post" })
    }
}
const request = new YXRequest(BASE_URL, TIMEOUT)
export default request