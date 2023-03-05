import { useCallback, useContext } from 'react';
import { useLatest } from 'shared/lib/hooks/use-latest';
import { ThemeContext } from './theme-context';
import { LOCAL_STORAGE_THEME_KEY } from './theme.constants';
import { Theme } from './theme.types';

interface UseThemeOutput {
  theme: Theme;
  toggleTheme: () => void;
}

export function useTheme(): UseThemeOutput {
  const { theme, setTheme } = useContext(ThemeContext);
  const latestTheme = useLatest<Theme>(theme);

  const toggleTheme = useCallback(() => {
    const newTheme = latestTheme.current === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  }, []);

  return { theme, toggleTheme };
}
