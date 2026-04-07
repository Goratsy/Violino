import type { Metadata } from 'next';

import LoginPage from '@/views/admin/LoginPage';

export const metadata: Metadata = {
  title: 'Панель администратора',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLoginRoute() {
  return <LoginPage />;
}
