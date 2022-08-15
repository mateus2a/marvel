import {
  useState,
  createContext,
  useContext,
  ReactNode,
  useCallback,
} from 'react';

interface LoaderProviderProps {
  children: ReactNode;
}

interface LoaderContextData {
  isLoading: boolean;
  showLoader: () => void;
  hideLoader: () => void;
}

const LoaderContext = createContext<LoaderContextData>({} as LoaderContextData);

function LoaderProvider({ children }: LoaderProviderProps) {
  const [loading, setLoading] = useState(false);

  const showLoader = useCallback(() => {
    setLoading(true);
  }, []);

  const hideLoader = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <LoaderContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ isLoading: !!loading, showLoader, hideLoader }}
    >
      {children}
    </LoaderContext.Provider>
  );
}

function useLoader() {
  const context = useContext(LoaderContext);

  return context;
}

export { LoaderProvider, useLoader };
