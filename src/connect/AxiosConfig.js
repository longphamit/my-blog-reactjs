import axios from "axios"
axios.defaults.baseURL="http://localhost:8080/api"
const config={
    headers:{
        "Content-type":"Application/json",
    }
}


const request = {
  get: (url) => axios.get(url),
  post: (url, data) => axios.post(url, data, config),
  put: (url, data) => axios.put(url, data, config),
  delete: (url) => axios.delete(url),
};

export default request;