import { ReactNode } from 'react';
import { ComicsSelectedProvider } from '../useComicsSelected';
import { LoaderProvider } from '../useLoader';
import { PaginationProvider } from '../usePagination';

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <ComicsSelectedProvider>
      <LoaderProvider>
        <PaginationProvider>{children}</PaginationProvider>
      </LoaderProvider>
    </ComicsSelectedProvider>
  );
}

export default AppProvider;
