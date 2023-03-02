import axios from "axios";

const instance = axios.create({
  baseURL: "https://store.kod06.ru/api",
});

instance.interceptors.request.use(
  async (config) => {
    const token = JSON.parse(localStorage.getItem("token"));

    if (token) {
      config.headers = {
        authorization: `Bearer ${token}`,
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

    if (error?.response?.status === 500 && !config?.sent) {
      config.sent = true;

      localStorage.removeItem("token")

      window.location.pathname = '/login'

      // return axios(config);
    }
    return Promise.reject(error);
  }
);





export default instance;
