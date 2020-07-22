import axios from "axios"
export function request(config) {
  const instance = axios.create({
    baseUrl: 'http://152.136.185.210:8000/api/n3',
    timeout: 500
  })
  instance.interceptors.request.use(config => {
    return config 
  },err => {
    console.log(err)
  })
  instance.interceptors.request.use(res => {
    return res
  },err => {
    console.log(err)
  })
  return instance(config)
}