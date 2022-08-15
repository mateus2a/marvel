import { ReactNode } from 'react';

import * as S from './styles';

interface CardGridProps {
  children: ReactNode;
}

function CardGrid({ children }: CardGridProps) {
  return <S.Container>{children}</S.Container>;
}

export default CardGrid;
