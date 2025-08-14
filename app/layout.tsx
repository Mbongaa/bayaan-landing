import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "bayaan - real time sermon translation for mosques | amplify your dawah",
  description: "Transform your mosque with Bayaan's real-time sermon translation technology. Break language barriers, unite your congregation, and expand your Dawah reach. Arabic, English, Dutch support.",
  keywords: "mosque translation, sermon translation, khutbah translation, islamic technology, dawah tools, mosque software, real-time translation, LiveKit, Speechmatics, multi-language mosque",
  openGraph: {
    title: "bayaan - break language barriers in your mosque",
    description: "Real-time sermon translation that brings communities together. Expand your Dawah impact today.",
    type: "website",
    url: "https://bayaan.app",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bayaan - Mosque Translation Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "bayaan - real time sermon translation",
    description: "Transform your mosque's Dawah with instant translation technology",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className="font-sans antialiased"
        style={{
          background: "linear-gradient(135deg, #fdf1f4 0%, #f9c295 50%, #f8fdfc 100%)",
          minHeight: "100vh"
        }}
        suppressHydrationWarning
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
