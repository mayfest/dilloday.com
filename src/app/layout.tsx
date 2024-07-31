import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';

import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import StyledComponentsRegistry from '@/lib/registry';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
      <GoogleAnalytics gaId="G-BFDC0L8DB2" />
    </html>
  );
}
