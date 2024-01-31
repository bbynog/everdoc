import './globals.css';

import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { cn } from '@/lib/utils';

export const metadata = {
  title: 'EverDoc',
  description: 'Created by EverLab',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen max-w-full overflow-x-hidden bg-background font-sans text-foreground antialiased',
          `${GeistSans.variable} ${GeistMono.variable}`,
        )}
      >
        {children}
      </body>
    </html>
  );
}
