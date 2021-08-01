import axios from "axios";
import { useSelector } from "react-redux";
axios.defaults.baseURL = "http://localhost:8080/api";
const getConfig = () => {
  const token = localStorage.getItem("TOKEN");
  console.log(token)
  if (token) {
    console.log("true")
    return {
      headers: {
        "Content-type": "Application/json",
        "X-LONGPC-ACCESS-TOKEN":token,
      },
    };
  }else{
    console.log("false")
    return {
      headers: {
        "Content-type": "Application/json",
      },
    }
  }
};

const request = {
  get: (url) => axios.get(url,getConfig()),
  post: (url, data) => axios.post(url, data, getConfig()),
  put: (url, data) => axios.put(url, data, getConfig()),
  delete: (url) => axios.delete(url,getConfig()),
};

export default request;
