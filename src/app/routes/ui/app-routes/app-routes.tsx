import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '../../routes';
import { useResetScroll } from '../../lib/hooks/useResetScroll';
import { AboutPage } from 'pages/about-page';
import { MainPage } from 'pages/main-page';
import { PageLoader } from '../page-loader';

export function AppRoutes() {
  useResetScroll();

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path={routes.main} element={<MainPage />} />
        <Route path={routes.about} element={<AboutPage />} />
      </Routes>
    </Suspense>
  );
}
