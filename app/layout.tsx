import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import ResponsiveHeader from "@/app/ui/header/headerLayout";
import ResponsiveFooter from "@/app/ui/footer/footer";
import { Metadata } from "next";

import AuthProvider from "@/app/component/AuthProvider";

export const metadata: Metadata = {
  title: "SPEAR - Arma 3 Unit Tool",
  description:
    "Automated Discord synchronization, secure software distribution, and management tools for Arma units.",
  keywords: [
    "Arma",
    "Unit Management",
    "Discord Bot",
    "Software Distribution",
    "Gaming Community",
  ],
  authors: [{ name: "SPARTANS CZ/SK", url: "https://spear.com" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <header>
          <ResponsiveHeader />
        </header>
        <AuthProvider>{children}</AuthProvider>
        <footer>
          <ResponsiveFooter />
        </footer>
      </body>
    </html>
  );
}
