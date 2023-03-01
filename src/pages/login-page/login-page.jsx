import { useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "services/axios-instance";

import "./login-page.scss";

export function LoginPage() {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false);

  localStorage.getItem("user");

  const navigate = useNavigate();

  const handleLogin = () => {
    instance
      .post("auth/login", {
        login: login,
        password: pass,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data.token));
        }
      });
    navigate("/");
  };

  return (
    <div className="main">
      <div className="authContainer auth">
        <h2 className="auth__title">Вход</h2>
        <div className="auth__form">
          <label htmlFor="login">Логин</label>
          <input
            value={login}
            onChange={(change) => setLogin(change.target.value)}
            type="email"
            id="login"
            placeholder="Введите логин..."
          />
          <label htmlFor="pass">Пароль</label>
          <input
            value={pass}
            onChange={(change) => setPass(change.target.value)}
            type="password"
            id="pass"
            placeholder="Введите пароль..."
          />
          {error ? (
            <label className="error" htmlFor="error">
              Неверный логин или пароль
            </label>
          ) : (
            ""
          )}
          <div className="auth__buttons ">
            <button onClick={() => handleLogin()} className="btn">
              {" "}
              Войти
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
