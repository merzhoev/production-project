import { useCallback, useContext } from 'react';
import { useLatest } from '../hooks/use-latest';
import { Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY } from './theme-context';

interface UseThemeOutput {
  theme: Theme;
  toggleTheme: () => void;
}

export default function useTheme(): UseThemeOutput {
  const { theme, setTheme } = useContext(ThemeContext);
  const latestTheme = useLatest<Theme>(theme);

  const toggleTheme = useCallback(() => {
    const newTheme = latestTheme.current === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  }, []);

  return { theme, toggleTheme };
}
