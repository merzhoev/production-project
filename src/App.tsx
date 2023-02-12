import { Routes, Route, Link } from 'react-router-dom';
import { Suspense } from 'react';
import { AboutPageAsync } from './pages/about-page';
import { MainPageAsync } from './pages/main-page';
import { Button } from './components/button';
import useTheme from './theme/use-theme';

import './styles/index.scss';
import { classNames } from './helpers/classNames/classNames';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', theme)}>
      <h1>Welcome!</h1>
      <Button onClick={toggleTheme}>Toggle theme</Button>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
}
