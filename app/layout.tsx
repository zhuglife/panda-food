import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Panda Food - Lanches e Pastéis em Sorocaba",
  description: "Deliciosos lanches artesanais e pastéis crocantes em Sorocaba. Peça pelo WhatsApp e receba com rapidez e qualidade!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}