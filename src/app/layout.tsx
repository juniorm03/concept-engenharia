import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./_components/header";
import Footer from "./_components/footer";


export const metadata: Metadata = {
  title: "Concept Construções",
  description: "Em desenvolvimento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased`}
      >

        <Header />
        {children}
        <Footer />

        
      </body>
    </html>
  );
}
