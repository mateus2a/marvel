import { useCallback, useState } from 'react';

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

interface CardProps {
  comic: Comic;
}

function Card({ comic }: CardProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleCloseModal = useCallback(() => {
    setModalIsOpen(false);
  }, []);

  return (
    <>
      <S.Container onClick={() => setModalIsOpen(true)}>
        <img
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          alt={`${comic.title} banner`}
        />
        <S.Footer>
          <strong>{comic.title}</strong>
        </S.Footer>
      </S.Container>
      <ModalDetailComic
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        comic={comic}
      />
    </>
  );
}

export default Card;
