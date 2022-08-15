import { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

function Button({ title, ...props }: ButtonProps) {
  return <S.Button {...props}>{title}</S.Button>;
}

export default Button;
