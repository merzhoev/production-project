import { ReactNode, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import styles from './button.module.scss';

type Props<T, K> = Omit<DetailedHTMLProps<T, K>, 'ref'>;

interface ButtonProps extends Props<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children?: ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
}
