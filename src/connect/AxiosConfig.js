import axios from "axios";
import { useSelector } from "react-redux";
axios.defaults.baseURL = "http://localhost:8080/api";
axios.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    if (originalConfig.url !== "/auth/signin" && err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          const rs = await axios.post("/auth/refreshtoken", {"refreshToken":localStorage.getItem("REFRESH_TOKEN")});
          const { token } = rs.data;
          localStorage.setItem("TOKEN",token);
          return axios(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }
    return Promise.reject(err);
  }
);
const getConfig = () => {
  const token = localStorage.getItem("TOKEN");
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
