import type { Metadata } from 'next';
import { Courier_Prime } from 'next/font/google';
import './globals.css';

// Setup Courier Prime font
const courierPrime = Courier_Prime({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bootstrap Kat',
  description: 'Turning Ideas into Code',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${courierPrime.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
