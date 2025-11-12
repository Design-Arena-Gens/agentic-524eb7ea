import "@/app/globals.css";
import { Space_Grotesk, Inter } from "next/font/google";
import type { Metadata } from "next";

const display = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display"
});

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Linea Avant | Sistemi AI Su Misura per Aziende Visionarie",
  description:
    "Linea Avant crea sistemi di intelligenza artificiale su misura: dashboard predittive, automazioni omnicanale, marketing generativo e siti ad alte prestazioni. Prenota una consulenza gratuita.",
  metadataBase: new URL("https://agentic-524eb7ea.vercel.app"),
  openGraph: {
    title: "Linea Avant | Sistemi AI Su Misura per Aziende Visionarie",
    description:
      "Potenzia ogni reparto con tecnologia AI integrata end-to-end: automazioni operative, marketing predittivo e customer experience intelligente.",
    url: "https://agentic-524eb7ea.vercel.app",
    siteName: "Linea Avant",
    locale: "it_IT",
    type: "website"
  },
  alternates: {
    canonical: "https://agentic-524eb7ea.vercel.app"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${sans.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
