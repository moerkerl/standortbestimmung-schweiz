import Link from 'next/link';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        {/* Header mit Navigation */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4">
              <Link href="/" className="flex items-center">
                <h1 className="text-xl font-bold text-[#ff6b35]">
                  Standortbestimmung-Schweiz.ch
                </h1>
              </Link>
              
              {/* Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-gray-700 hover:text-[#ff6b35] transition-colors">
                  Home
                </Link>
                <Link href="/landing-page" className="text-gray-700 hover:text-[#ff6b35] transition-colors">
                  Angebot
                </Link>
                <Link href="/ueber-uns" className="text-gray-700 hover:text-[#ff6b35] transition-colors">
                  Über uns
                </Link>
                <Link href="/ablauf" className="text-gray-700 hover:text-[#ff6b35] transition-colors">
                  Ablauf
                </Link>
                <Link 
                  href="/standortbestimmung-anfragen" 
                  className="bg-[#ff6b35] text-white px-6 py-2 rounded-lg hover:bg-[#e55a2b] transition-colors font-medium"
                >
                  Jetzt Termin vereinbaren
                </Link>
              </nav>
              
              {/* Mobile Menu Button */}
              <button className="md:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </header>
        
        <main className="min-h-screen">
          {children}
        </main>
        
        {/* Footer */}
        <footer className="bg-gray-50 py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-[#ff6b35] mb-2">Standortbestimmung-Schweiz.ch</h3>
                <p className="text-sm text-gray-600">Ein Service der Bildungsinstitut Fokus AG</p>
                <p className="text-sm text-gray-600 mt-1">Professionelle Standortbestimmungen für Kinder vom Kindergarten bis zur 9. Klasse</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Kontakt</h4>
                <p className="text-sm text-gray-600">
                  <span className="block">info@standortbestimmung-schweiz.ch</span>
                  <span className="block">Staffelstrasse 8, 8045 Zürich</span>
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Rechtliches</h4>
                <div className="space-y-1">
                  <Link href="/datenschutz" className="block text-sm text-gray-600 hover:text-[#ff6b35]">Datenschutz</Link>
                  <Link href="/impressum" className="block text-sm text-gray-600 hover:text-[#ff6b35]">Impressum</Link>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 mt-8 pt-4 text-center">
              <p className="text-sm text-gray-600">&copy; 2024 Bildungsinstitut Fokus AG. Alle Rechte vorbehalten.</p>
            </div>
          </div>
        </footer>
    </>
  );
}