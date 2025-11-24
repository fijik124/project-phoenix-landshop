import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import NavBar from '@/app/ui/header/main';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <header><NavBar /></header>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
