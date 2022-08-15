import { useLoader } from '../../hooks/useLoader';

import * as S from './styles';

function Loading() {
  const { isLoading } = useLoader();

  if (!isLoading) {
    return null;
  }

  return (
    <S.Container>
      <S.Loading>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </S.Loading>

      <h2>Carregando...</h2>
    </S.Container>
  );
}

export default Loading;
