import Modal from '../Modal';

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

interface ModalDetailComicProps {
  comic?: Comic;
  isOpen: boolean;
  onRequestClose: () => void;
}

function ModalDetailComic({
  comic,
  isOpen,
  onRequestClose,
}: ModalDetailComicProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Comic Detail"
    >
      <S.Wrapper>
        <h2>{comic?.title}</h2>
        <S.Content>
          <img
            src={`${comic?.thumbnail.path}.${comic?.thumbnail.extension}`}
            alt={`${comic?.title} banner`}
          />
          <S.ContentDetail>
            <div>
              <strong>Descrição</strong>
              <p>
                {comic?.description
                  ? comic?.description
                  : 'Descrição indisponível'}
              </p>
            </div>
            <div>
              <strong>Total de páginas</strong>
              <p>
                {comic?.pageCount
                  ? comic?.pageCount
                  : 'Total de páginas indisponível'}
              </p>
            </div>
            <div>
              <strong>Criadores</strong>
              {comic && comic.creators.items.length < 1 && (
                <p>Criadores não informados</p>
              )}
              <ul>
                {comic?.creators.items.map((creator) => (
                  <li key={creator.name}>{creator.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <strong>Personagens</strong>
              {comic && comic.characters.items.length < 1 && (
                <p>Personagens não informados</p>
              )}
              <ul>
                {comic?.characters.items.map((character) => (
                  <li key={character.name}>{character.name}</li>
                ))}
              </ul>
            </div>
          </S.ContentDetail>
        </S.Content>
      </S.Wrapper>
    </Modal>
  );
}

export default ModalDetailComic;
