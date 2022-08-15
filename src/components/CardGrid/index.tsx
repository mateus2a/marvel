import { useCallback, useState } from 'react';

import Card from '../Card';
import ModalDetailComic from '../ModalDetailComic';

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
  const [comicSelected, setComicSelected] = useState<Comic>();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleCloseModal = useCallback(() => {
    setModalIsOpen(false);
  }, []);

  const handleComicSelected = useCallback((comic: Comic) => {
    setComicSelected(comic);
    setModalIsOpen(true);
  }, []);

  if (comics.length === 0) {
    return (
      <S.NoResults>
        <h1>Nenhum resultado encontrado! =(</h1>
      </S.NoResults>
    );
  }

  return (
    <>
      <S.Container>
        {comics.map((comic: Comic) => (
          <Card
            key={comic.id}
            comic={comic}
            handleComicSelected={handleComicSelected}
          />
        ))}
      </S.Container>
      <ModalDetailComic
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        comic={comicSelected}
      />
    </>
  );
}

export default CardGrid;
