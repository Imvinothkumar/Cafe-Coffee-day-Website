/**
 * Root Layout Component – Café Coffee Day
 *
 * Defines global configurations including:
 * - SEO metadata (title, description, Open Graph, Twitter Cards)
 * - Author & Developer Attribution (VINOTHKUMAR P - https://vinothkumar-portfolio-mu.vercel.app/)
 * - Google Fonts optimization using next/font
 * - Global styles via globals.css
 * - Common layout structure (Header, Footer, CookieConsent)
 */

import type { Metadata } from "next";
import "./globals.css";

import { Cormorant_Upright, Open_Sans } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const cormorant_upright = Cormorant_Upright({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant_upright",
});

const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open_sans",
});

export const metadata: Metadata = {
  title: {
    default: "Café Coffee Day – A Lot Can Happen Over Coffee",
    template: "%s | Café Coffee Day",
  },
  description:
    "Café Coffee Day (CCD) – India's favourite coffee destination since 1996. A place for coffee, conversations, meetings and memories. Sourced from thousands of small coffee planters in Chikmagalur.",
  keywords: [
    "Café Coffee Day",
    "CCD",
    "Coffee Day",
    "A Lot Can Happen Over Coffee",
    "coffee shop",
    "espresso",
    "cappuccino",
    "cold coffee",
    "Devil's Own",
    "Iced Eskimo",
    "Crunchy Frappe",
    "Bengaluru coffee",
    "India coffee chain",
    "Chikmagalur coffee",
    "Hot Classics",
    "All-Time Chillers",
    "Coffee Day Global Limited",
  ],
  authors: [
    {
      name: "VINOTHKUMAR P",
      url: "https://vinothkumar-portfolio-mu.vercel.app/",
    },
    {
      name: "Coffee Day Global Limited",
      url: "https://www.cafecoffeeday.com",
    },
  ],
  creator: "VINOTHKUMAR P (https://vinothkumar-portfolio-mu.vercel.app/)",
  publisher: "Coffee Day Global Limited",
  metadataBase: new URL("https://www.cafecoffeeday.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.cafecoffeeday.com",
    siteName: "Café Coffee Day",
    title: "Café Coffee Day – A Lot Can Happen Over Coffee",
    description:
      "India's favourite coffee destination since 1996. A place for coffee, conversations, meetings and memories.",
    images: [
      {
        url: "/assets/ccd-brand-logo.png",
        width: 1200,
        height: 630,
        alt: "Café Coffee Day",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Café Coffee Day – A Lot Can Happen Over Coffee",
    description:
      "India's favourite coffee destination since 1996. A place for coffee, conversations, meetings and memories.",
    images: ["/assets/ccd-brand-logo.png"],
    creator: "@CafeCoffeeDay",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Food & Beverage",
  applicationName: "Café Coffee Day",
  other: {
    portfolio: "https://vinothkumar-portfolio-mu.vercel.app/",
    author_contact: "veeravinoth292@gmail.com",
    ccd_support: "customercare@cafecoffeeday.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant_upright.variable} ${open_sans.variable}`}>
        <Header />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
