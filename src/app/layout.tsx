// src/app/layout.tsx
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import Head from 'next/head';
import './styles/globals.css';
import type { ReactNode } from 'react';
import { Metadata } from 'next';

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Project Euphoria',
  description: 'E-Commerce Next.js Project Euphoria',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>{/* SEO */}</head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
