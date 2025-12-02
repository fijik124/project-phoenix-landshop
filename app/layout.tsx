import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import ResponsiveHeader from '@/app/ui/header/headerLayout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <header><ResponsiveHeader /></header>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
