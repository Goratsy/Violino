'use client';

import { Dispatch, SetStateAction, createContext, useContext } from 'react';

export type PopupMessage = {
  isErrorPopup: boolean;
  message: string;
};

type PopupContextValue = {
  steckMessages: PopupMessage[];
  setSteckMessages: Dispatch<SetStateAction<PopupMessage[]>>;
};

const noop = () => {
  throw new Error('setSteckMessages is not initialized');
};

export const PopupContext = createContext<PopupContextValue>({
  steckMessages: [],
  setSteckMessages: noop,
});

export const usePopup = () => useContext(PopupContext);
