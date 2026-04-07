'use client';

import { ReactNode, useState } from 'react';

import { AuthContext } from '@/shared/lib/contexts/auth-context';
import { PopupContext, PopupMessage } from '@/shared/lib/contexts/popup-context';
import Popup from '@/shared/ui/popup/Popup';

type Props = {
  children: ReactNode;
};

export default function AppProviders({ children }: Props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [steckMessages, setSteckMessages] = useState<PopupMessage[]>([]);

  return (
    <PopupContext.Provider value={{ steckMessages, setSteckMessages }}>
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <Popup />
        {children}
      </AuthContext.Provider>
    </PopupContext.Provider>
  );
}
