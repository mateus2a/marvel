import Card from '../Card';
import * as S from './styles';

interface Comic {
  id: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  title: string;
}
interface CardGridProps {
  comics: Comic[];
}

function CardGrid({ comics }: CardGridProps) {
  if (comics.length === 0) {
    return (
      <S.NoResults>
        <h1>Nenhum resultado encontrado! =(</h1>
      </S.NoResults>
    );
  }

  return (
    <S.Container>
      {comics.map((item: Comic) => (
        <Card
          key={item.id}
          imgUrl={`${item.thumbnail.path}.${item.thumbnail.extension}`}
          title={item.title}
        />
      ))}
    </S.Container>
  );
}

export default CardGrid;
