import ReactModal from 'react-modal';

import * as S from './styles';

import Close from '../../assets/close.svg';

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
  comic: Comic;
  isOpen: boolean;
  onRequestClose: () => void;
}

function ModalDetailComic({
  comic,
  isOpen,
  onRequestClose,
}: ModalDetailComicProps) {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Comic Detail"
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '750px',
          background: '#fff',
        },
        overlay: {
          backgroundColor: '#000000bb',
        },
      }}
    >
      <S.Container>
        <button type="button" onClick={onRequestClose}>
          <img src={Close} alt="Fechar modal" />
        </button>
        <h2>{comic.title}</h2>
        <S.Content>
          <img
            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            alt={`${comic.title} banner`}
          />
          <S.ContentDetail>
            <div>
              <strong>Descrição</strong>
              <p>
                {comic.description
                  ? comic.description
                  : 'Descrição indisponível'}
              </p>
            </div>
            <div>
              <strong>Total de páginas</strong>
              <p>
                {comic.pageCount
                  ? comic.pageCount
                  : 'Total de páginas indisponível'}
              </p>
            </div>
            <div>
              <strong>Criadores</strong>
              {comic.creators.items.length < 1 && (
                <p>Criadores não informados</p>
              )}
              <ul>
                {comic.creators.items.map((creator) => (
                  <li>{creator.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <strong>Personagens</strong>
              {comic.characters.items.length < 1 && (
                <p>Personagens não informados</p>
              )}
              <ul>
                {comic.characters.items.map((character) => (
                  <li>{character.name}</li>
                ))}
              </ul>
            </div>
          </S.ContentDetail>
        </S.Content>
      </S.Container>
    </ReactModal>
  );
}

export default ModalDetailComic;
