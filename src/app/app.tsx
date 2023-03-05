import { Routes, Route, Link } from 'react-router-dom';
import { Suspense } from 'react';
import { AboutPage } from 'pages/about-page';
import { MainPage } from 'pages/main-page';
import { Button } from 'shared/ui/button';
import { useTheme } from 'shared/theme';
import { classNames } from 'shared/lib/helpers/classNames';

import './styles/index.scss';

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
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
