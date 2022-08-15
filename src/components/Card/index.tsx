import * as S from './styles';

interface CardProps {
  imgUrl: string;
  title: string;
}

function Card({ title, imgUrl }: CardProps) {
  return (
    <S.Container>
      <img src={imgUrl} alt={`${title} banner`} />
      <S.Footer>
        <strong>{title}</strong>
      </S.Footer>
    </S.Container>
  );
}

export default Card;
