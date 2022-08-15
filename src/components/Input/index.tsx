import { InputHTMLAttributes } from 'react';

import * as S from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

function Input({ ...props }: InputProps) {
  return <S.Input {...props} />;
}

export default Input;
