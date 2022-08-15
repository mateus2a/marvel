import { useCallback, useState } from 'react';

import { useComicsSelected } from '../../hooks/useComicsSelected';

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

  const { handleAddComic, handleRemoveComic } = useComicsSelected();

  function handleChangeCheckbox(value: boolean) {
    if (value) {
      handleAddComic(comic);
    } else {
      handleRemoveComic(comic);
    }
  }

  const handleCloseModal = useCallback(() => {
    setModalIsOpen(false);
  }, []);

  return (
    <>
      <S.Container>
        <button type="button" onClick={() => setModalIsOpen(true)}>
          <img
            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            alt={`${comic.title} banner`}
          />
        </button>
        <S.Footer>
          <input
            type="checkbox"
            onChange={(event) => {
              handleChangeCheckbox(event.target.checked);
            }}
          />
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
