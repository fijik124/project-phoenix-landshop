import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import ResponsiveHeader from '@/app/ui/header/headerLayout';
import ResponsiveFooter from '@/app/ui/footer/footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <header><ResponsiveHeader /></header>
      <body className={`${inter.className} antialiased`}>{children}</body>
      <footer><ResponsiveFooter /></footer>
    </html>
  );
}
