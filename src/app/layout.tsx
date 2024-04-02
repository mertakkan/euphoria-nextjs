import type { Metadata } from 'next';
import './styles/globals.css';
import Navbar from './components/ui/Navbar';

export const metadata: Metadata = {
  title: 'Euphoria',
  description: 'E-Commerce Next.js Project Euphoria',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
