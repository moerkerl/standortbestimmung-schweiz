import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Standortbestimmung Schweiz - Professionelle Lernstandsanalyse",
  description: "Wissenschaftlich fundierte Standortbestimmung für Schweizer Schüler (4-15 Jahre). Lehrplan 21 konform. Klarheit über den Lernstand Ihres Kindes.",
  icons: {
    icon: [
      { url: '/icon', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/icon',
    apple: '/icon',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} font-sans`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
