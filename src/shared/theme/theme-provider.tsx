import { PropsWithChildren, useMemo, useState } from 'react';
import { ThemeContext } from './theme-context';
import { LOCAL_STORAGE_THEME_KEY } from './theme.constants';
import { Theme } from './theme.types';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ?? Theme.LIGHT;

export function ThemeProvider({ children }: PropsWithChildren<{}>) {
  const [theme, setTheme] = useState<Theme>(() => defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
}
