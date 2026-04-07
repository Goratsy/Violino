import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './globals.css';

import AppProviders from './providers/AppProviders';

export const metadata: Metadata = {
  title: {
    default: 'Виолино',
    template: '%s | Виолино',
  },
  description: 'Торты на заказ и кафе-кондитерская в Москве.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
