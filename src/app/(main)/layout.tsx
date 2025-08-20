import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nachhilfeportal Zürich - Jetzt Tutor in Zürich finden",
  description: "Finden Sie den perfekten Nachhilfelehrer in Zürich. Privatunterricht zuhause oder online für alle Altersgruppen im Kanton Zürich und Umgebung.",
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={inter.className}>
        {/* Minimaler Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center md:justify-between py-4">
              <Link href="/" className="flex items-center">
                <img 
                  src="/logo-compact.svg" 
                  alt="Nachhilfeportal Zürich" 
                  className="h-20 w-auto"
                />
              </Link>
              <Link 
                href="/lehrer-finden" 
                className="border-2 border-[#047857] text-[#047857] px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors font-medium bg-white hidden md:block"
              >
                Jetzt Tutor finden
              </Link>
            </div>
          </div>
        </header>
        
        <main className="min-h-screen">
          {children}
        </main>
        
        {/* Minimaler Footer */}
        <footer className="bg-gray-50 py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-sm text-gray-600">
              <p>&copy; 2024 Nachhilfeportal Zürich. Alle Rechte vorbehalten.</p>
              <div className="mt-2 space-x-4">
                <Link href="/datenschutz" className="hover:text-[#047857]">Datenschutz</Link>
                <Link href="/impressum" className="hover:text-[#047857]">Impressum</Link>
              </div>
              <div className="mt-2 text-xs text-gray-500">
                Ein Brand der Bildungsinstitut Fokus AG
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}