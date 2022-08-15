import { useState, createContext, useContext, ReactNode } from 'react';

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

interface ComicsSelectedProviderProps {
  children: ReactNode;
}

interface ComicsSelectedContextData {
  comics: Comic[];
  handleAddComic: (comic: Comic) => void;
  handleRemoveComic: (comic: Comic) => void;
}

const ComicsSelectedContext = createContext<ComicsSelectedContextData>(
  {} as ComicsSelectedContextData
);

function ComicsSelectedProvider({ children }: ComicsSelectedProviderProps) {
  const [comics, setComics] = useState<Comic[]>([]);

  function handleAddComic(comic: Comic) {
    const updatedComics = [...comics];

    updatedComics.push(comic);

    setComics(updatedComics);
  }

  function handleRemoveComic(comic: Comic) {
    const updatedComics = [...comics];

    const comicIndex = comics.findIndex(
      (comicSelected) => comic.id === comicSelected.id
    );

    if (comicIndex >= 0) {
      updatedComics.splice(comicIndex, 1);

      setComics(updatedComics);
    }
  }

  return (
    <ComicsSelectedContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        comics,
        handleAddComic,
        handleRemoveComic,
      }}
    >
      {children}
    </ComicsSelectedContext.Provider>
  );
}

function useComicsSelected() {
  const context = useContext(ComicsSelectedContext);

  return context;
}

export { ComicsSelectedProvider, useComicsSelected };
