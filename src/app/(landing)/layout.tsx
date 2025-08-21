import Link from 'next/link';

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        {/* Minimal Header ohne Navigation */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center py-6">
              <h1 className="text-2xl font-bold text-[#ff6b35]">
                Standortbestimmung-Schweiz.ch
              </h1>
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