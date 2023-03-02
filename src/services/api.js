import instance from "./axios-instance";

class Api {
  login(login, password) {
    return instance.post("auth/login", {
      login: login,
      password: password,
    });
  }

  //Получение данных пользователя
  getUser() {
    return instance.get("users/me");
  }

  //Получение продуктов
  getProducts() {
    return instance.get("products/");
  }

  //Получение категорий
  getCategories() {
    return instance.get("categories");
  }
}

export const $api = new Api();
