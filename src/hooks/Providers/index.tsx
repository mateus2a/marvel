import { ReactNode } from 'react';
import { LoaderProvider } from '../useLoader';
import { PaginationProvider } from '../usePagination';

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <LoaderProvider>
      <PaginationProvider>{children}</PaginationProvider>
    </LoaderProvider>
  );
}

export default AppProvider;
