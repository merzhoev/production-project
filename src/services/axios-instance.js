import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.88.37:8000/api",
});

instance.interceptors.request.use(
  async (config) => {
    const session = JSON.parse(localStorage.getItem("token"));

    if (session?.token) {
      config.headers = {
        authorization: `Bearer ${session?.token}`,
      };
    }

    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error?.config;

    if (error?.response?.status === 401 && !config?.sent) {
      config.sent = true;

      localStorage.removeItem("token")

      return axios(config);
    }
    return Promise.reject(error);
  }
);





export default instance;
