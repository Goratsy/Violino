import type { Metadata } from 'next';

import LandingPage from '@/views/home/LandingPage';

export const metadata: Metadata = {
  title: 'Торты на заказ. Кафе-кондитерская. Москва, Ленинский 79',
};

export default function HomeRoute() {
  return <LandingPage />;
}
