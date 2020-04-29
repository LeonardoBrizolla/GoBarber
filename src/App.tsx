import React from 'react';

import SingIn from './pages/SingIn';
// import SingUp from './pages/SingUp';
import GlobalStyle from './styles/global';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SingIn />
      <GlobalStyle />
    </AuthProvider>
  </>
);

export default App;
