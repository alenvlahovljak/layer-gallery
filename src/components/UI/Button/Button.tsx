import type { FC, ButtonHTMLAttributes } from 'react';

import { Container } from './Button.styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default Button;
