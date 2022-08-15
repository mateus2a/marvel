import AppProvider from './hooks/Providers/index';

import Home from './pages/Home';

import GlobalStyle from './styles/global';

function App() {
  return (
    <AppProvider>
      <GlobalStyle />
      <Home />
    </AppProvider>
  );
}

export default App;
