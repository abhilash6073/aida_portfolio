import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Aida Anna Tom | Senior Product Manager & AI Strategist",
  description: "Portfolio of Aida Anna Tom. 12+ years building AI-powered products at IBS, Amadeus, and Torry Harris.",
  openGraph: {
    title: "Aida Anna Tom | Senior Product Manager & AI Strategist",
    description: "Portfolio of Aida Anna Tom. 12+ years building AI-powered products at IBS, Amadeus, and Torry Harris.",
    url: 'https://aida-portfolio.vercel.app',
    siteName: 'Aida Anna Tom',
    images: [
      {
        url: '/headshot.jpg',
        width: 800,
        height: 800,
        alt: 'Aida Anna Tom',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Aida Anna Tom | Senior Product Manager & AI Strategist",
    description: "Portfolio of Aida Anna Tom. 12+ years building AI-powered products at IBS, Amadeus, and Torry Harris.",
    images: ['/headshot.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

