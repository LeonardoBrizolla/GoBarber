import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';

const AppProvider: React.FC = ({ children }) => (
  <AppProvider>
    <ToastProvider>{children}</ToastProvider>
  </AppProvider>
);

export default AppProvider;
