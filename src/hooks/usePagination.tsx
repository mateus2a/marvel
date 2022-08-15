import {
  useState,
  createContext,
  useContext,
  ReactNode,
  useCallback,
} from 'react';

interface PaginationProviderProps {
  children: ReactNode;
}

interface PaginationContextData {
  offset: number;
  nextPage: (newOffset: number) => void;
}

const PaginationContext = createContext<PaginationContextData>(
  {} as PaginationContextData
);

function PaginationProvider({ children }: PaginationProviderProps) {
  const [offset, setOffset] = useState(0);

  const nextPage = useCallback((newOffset: number) => {
    setOffset(newOffset);
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <PaginationContext.Provider value={{ offset, nextPage }}>
      {children}
    </PaginationContext.Provider>
  );
}

function usePagination() {
  const context = useContext(PaginationContext);

  return context;
}

export { PaginationProvider, usePagination };
