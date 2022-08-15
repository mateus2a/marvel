import Card from '../Card';
import * as S from './styles';

interface Comic {
  id: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  title: string;
  description: string;
  creators: {
    items: [{ name: string }];
  };
  characters: {
    items: [{ name: string }];
  };
  pageCount: number;
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
      {comics.map((comic: Comic) => (
        <Card key={comic.id} comic={comic} />
      ))}
    </S.Container>
  );
}

export default CardGrid;
