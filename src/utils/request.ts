import axios, { type AxiosInstance } from "axios";
import { message } from 'ant-design-vue';

function getToken() {
  const tokenName = localStorage.getItem("tokenName")
  return localStorage.getItem(tokenName || "");
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL:  import.meta.env.VITE_API_BASE_URL
});

axiosInstance.interceptors.request.use(
  config => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  err => {
    message.error(err);
    return Promise.resolve(err);
  }
);

axiosInstance.interceptors.response.use(
  response => {
    if (response.status !== 200) {
      message.error(response.data);
    }
    return response.data;
  },
  err => {
    console.log(err);
    if (err.code === "ERR_BAD_REQUEST") {
      message.error(err.response.data);
    } else {
      message.error(err.code);
    }
    return Promise.reject(err);
  }
);


type Methods = "GET" | "POST" | "PUT" | "DELETE";

export function request<T>(
  method: Methods,
  url: string,
  data?: any,
  params?: any
): Promise<{ code: number; data: T; message: string }> {
  return axiosInstance({ url, method, data, params });
}



