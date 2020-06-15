import axios from "axios"
export function request(config){
    const instance = axios.create({
        baseURL : "http",
        timeout : 5000
    })
    return instance(config)
}
