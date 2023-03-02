import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { $api } from 'services/api';
import { isAuth } from 'services/useAuth';
import './login-page.scss';

export function LoginPage() {
  const [login, setLogin] = useState('example@mail.ru');
  const [pass, setPass] = useState('Pass1234$');
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    $api
      .login(login, pass)
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem('token', JSON.stringify(response.data.token));
          navigate('/');
        }
      })
      .catch(() => setError(true));
  };

  useEffect(() => {
    if (isAuth()) {
      navigate('/');
    }
  }, []);

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
            ''
          )}
          <div className="auth__buttons ">
            <button onClick={() => handleLogin()} className="btn">
              {' '}
              Войти
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
