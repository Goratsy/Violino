import type { Metadata } from 'next';

import AdminDashboardPage from '@/views/admin/AdminDashboardPage';

export const metadata: Metadata = {
  title: 'Панель администратора',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminRoute() {
  return <AdminDashboardPage />;
}
