import axios from "axios";

const API_URL = "https://avs.zevall.com/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "login/", {
        username,
        password
      })
      .then(response => {
        if (response.data.access_token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        // console.log(JSON.parse( localStorage.user ).user)
        return response.data;
      });
  }

  isAuth(token) {
    return axios.post(API_URL + "token/verify/",{
      token
    })
  }

  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();