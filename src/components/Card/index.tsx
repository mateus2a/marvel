import { useComicsSelected } from '../../hooks/useComicsSelected';

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
  handleComicSelected: (comic: Comic) => void;
}

function Card({ comic, handleComicSelected }: CardProps) {
  const { handleAddComic, handleRemoveComic } = useComicsSelected();

  function handleChangeCheckbox(value: boolean) {
    if (value) {
      handleAddComic(comic);
    } else {
      handleRemoveComic(comic);
    }
  }

  return (
    <S.Container>
      <button type="button" onClick={() => handleComicSelected(comic)}>
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
  );
}

export default Card;
