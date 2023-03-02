import instance from "./axios-instance";

class Api {
  login(login, password) {
    return instance.post("auth/login", {
      login: login,
      password: password,
    });
  }
}

export const $api = new Api();
