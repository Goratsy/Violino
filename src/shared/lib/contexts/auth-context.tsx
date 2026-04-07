'use client';

import { Dispatch, SetStateAction, createContext, useContext } from 'react';

type AuthContextValue = {
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
};

const noop = () => {
  throw new Error('setIsAuthenticated is not initialized');
};

export const AuthContext = createContext<AuthContextValue>({
  isAuthenticated: false,
  setIsAuthenticated: noop,
});

export const useAuth = () => useContext(AuthContext);
