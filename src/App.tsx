import React from 'react';

import SingIn from './pages/SingIn';
// import SingUp from './pages/SingUp';
import GlobalStyle from './styles/global';

import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SingIn />
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
