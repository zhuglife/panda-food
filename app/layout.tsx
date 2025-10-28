import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Panda Food - Lanches Artesanais e Pastéis em Sorocaba | Delivery",
  description: "Lanches artesanais, pastéis crocantes e batata frita em Sorocaba-SP. Ingredientes frescos, preparados na hora. Peça pelo WhatsApp (15) 99665-4685. Delivery rápido!",
  keywords: [
    "lanches Sorocaba",
    "pastéis Sorocaba",
    "lanchonete Sorocaba",
    "delivery Sorocaba",
    "hamburguer artesanal Sorocaba",
    "pastel de carne",
    "batata frita",
    "Panda Food",
    "comida delivery Sorocaba",
    "lanches artesanais",
    "fast food Sorocaba"
  ],
  authors: [{ name: "Panda Food" }],
  creator: "Panda Food",
  publisher: "Panda Food",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://panda-food-lanches.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Panda Food - Lanches Artesanais e Pastéis em Sorocaba",
    description: "Lanches artesanais, pastéis crocantes e batata frita. Ingredientes frescos, preparados na hora. Peça agora pelo WhatsApp!",
    url: 'https://panda-food-lanches.vercel.app',
    siteName: 'Panda Food',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Panda Food - Lanches e Pastéis em Sorocaba',
      }
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Panda Food - Lanches Artesanais e Pastéis em Sorocaba",
    description: "Lanches artesanais e pastéis crocantes em Sorocaba. Peça pelo WhatsApp!",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/panda-logo.png',
  },
  category: 'food',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Schema.org para Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Panda Food",
              "image": "https://panda-food-lanches.vercel.app/og-image.jpg",
              "description": "Lanches artesanais, pastéis crocantes e batata frita em Sorocaba-SP. Ingredientes frescos, preparados na hora.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Sorocaba",
                "addressRegion": "SP",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -23.5015,
                "longitude": -47.4526
              },
              "url": "https://panda-food-lanches.vercel.app",
              "telephone": "+5515996654685",
              "servesCuisine": "Brasileira, Fast Food",
              "priceRange": "$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "18:00",
                  "closes": "23:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "18:00",
                  "closes": "00:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Sunday",
                  "opens": "18:00",
                  "closes": "23:00"
                }
              ],
              "menu": "https://panda-food-lanches.vercel.app/#cardapio",
              "acceptsReservations": "False",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "150"
              }
            })
          }}
        />
        
        {/* Schema.org para Organização */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Panda Food",
              "legalName": "Vania Dias Motta",
              "url": "https://panda-food-lanches.vercel.app",
              "logo": "https://panda-food-lanches.vercel.app/panda-logo.png",
              "foundingDate": "2011",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Vania Dias Motta"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Sorocaba",
                "addressRegion": "SP",
                "addressCountry": "BR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+5515996654685",
                "contactType": "customer service",
                "availableLanguage": "Portuguese"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}