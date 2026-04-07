'use client';

import type { AuthLoginResponse } from '@/shared/api/generated';

const ACCESS_TOKEN_KEY = 'violino_access_token';
const STAFF_KEY = 'violino_staff';

type StaffSession = AuthLoginResponse['staff'];

export type StoredSession = {
  token: string;
  staff: StaffSession;
};

const isBrowser = () => typeof window !== 'undefined';

export const getAccessToken = (): string | null => {
  if (!isBrowser()) {
    return null;
  }

  return localStorage.getItem(ACCESS_TOKEN_KEY);
};

export const getStoredStaff = (): StaffSession | null => {
  if (!isBrowser()) {
    return null;
  }

  const rawStaff = localStorage.getItem(STAFF_KEY);

  if (!rawStaff) {
    return null;
  }

  try {
    return JSON.parse(rawStaff) as StaffSession;
  } catch {
    return null;
  }
};

export const getStoredSession = (): StoredSession | null => {
  const token = getAccessToken();
  const staff = getStoredStaff();

  if (!token || !staff) {
    return null;
  }

  return { token, staff };
};

export const persistSession = (session: StoredSession) => {
  if (!isBrowser()) {
    return;
  }

  localStorage.setItem(ACCESS_TOKEN_KEY, session.token);
  localStorage.setItem(STAFF_KEY, JSON.stringify(session.staff));
};

export const clearSession = () => {
  if (!isBrowser()) {
    return;
  }

  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(STAFF_KEY);
};

export const hasAdminRole = () => getStoredStaff()?.role === 'admin';
