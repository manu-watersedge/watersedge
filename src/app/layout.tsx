import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Water's Edge Maldives | Waterfront Venue & Event Destination",
  description: "A premier waterfront destination for weddings, corporate events, conferences, celebrations, and private functions in Hulhumale, Maldives.",
  keywords: ["Water's Edge Maldives", "Maldives wedding venue", "Hulhumale event space", "Maldives corporate conference", "waterfront rooftop venue"],
  authors: [{ name: "Water's Edge Maldives" }],
  openGraph: {
    title: "Water's Edge Maldives | Waterfront Venue",
    description: "Where Extraordinary Events Begin. Multi-level waterfront venue for up to 750+ guests.",
    url: "https://watersedgemaldives.com",
    siteName: "Water's Edge Maldives",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="preload" href="/images/hero/hero-bg.webp" as="image" type="image/webp" />
        <link rel="preload" href="/vdo-bg.mp4" as="video" type="video/mp4" />
      </head>
      <body className="bg-[#080D1A] text-slate-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
