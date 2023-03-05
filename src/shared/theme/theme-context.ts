import { createContext } from 'react';
import { Theme } from './theme.types';

export interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>(null);
