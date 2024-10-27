import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Sidebar from '@/components/Sidebar';
import Player from '@/components/Player';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MusicShare - Listen Together',
  description: 'Share and listen to music with friends in real-time',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-black">
          <Sidebar />
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
        <Player />
      </body>
    </html>
  );
}