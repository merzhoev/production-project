import { Link } from 'react-router-dom';
import { Button } from 'shared/ui/button';
import { useTheme } from 'shared/theme';
import { classNames } from 'shared/lib/helpers/classNames';
import { AppRoutes } from './routes';

import './styles/index.scss';
import { routes } from './routes';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', theme)}>
      <Button onClick={toggleTheme}>Toggle theme</Button>
      <div>
        <Link to={routes.main}>Main</Link>
        &nbsp;
        <Link to={routes.about}>About</Link>
      </div>
      <AppRoutes />
    </div>
  );
}
