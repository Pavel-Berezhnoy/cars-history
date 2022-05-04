import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../features/header/ui/Header';

export const PublicContext = createContext({
  loginType: 'auth',
  setLoginType: () => { },
});

export default function PublicRouter() {
  const [loginType, setLoginType] = useState('auth');
  const contextValue = { loginType, setLoginType };
  return (
    <PublicContext.Provider value={contextValue}>
      <div className='main-container'>
        <Header />
        <Outlet />
      </div>
    </PublicContext.Provider >
  )
}
