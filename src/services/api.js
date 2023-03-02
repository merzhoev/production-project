import instance from "./axios-instance";

class Api {
  login(login, password) {
    return instance.post("auth/login", {
      login: login,
      password: password,
    });
  }

  makeOrder(orders) {
    return instance.post("orders/make", { orders });
  }

  //Получение данных пользователя
  getUser() {
    return instance.get("users/me");
  }

  //Получение продуктов
  getProducts(params) {
    return instance.get(`products${params}`);
  }

  //Получение категорий
  getCategories() {
    return instance.get("categories");
  }
}

export const $api = new Api();