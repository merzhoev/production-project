import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.88.37:8000/api",
});

instance.interceptors.request.use(
  async (config) => {
    const session = JSON.parse(localStorage.getItem("user"));

    if (session?.access_token) {
      config.headers = {
        authorization: `Bearer ${session?.access_token}`,
      };
    }

    return config;
  },
  (error) => Promise.reject(error)
);


export default instance;
