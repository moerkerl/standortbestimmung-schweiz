export default function ScientificSection() {
  const scientificPoints = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Lehrplan 21 konform",
      description: "Unsere Tests basieren vollständig auf dem aktuellen Schweizer Lehrplan und erfassen genau die Kompetenzen, die Ihr Kind in der Schule benötigt."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Wissenschaftlich fundiert", 
      description: "Entwickelt von erfahrenen Pädagoginnen und getestet mit hunderten von Schweizer Schülern für maximale Aussagekraft."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Individuelle Auswertung",
      description: "Jede Standortbestimmung wird persönlich ausgewertet und mit konkreten, auf Ihr Kind zugeschnittenen Empfehlungen ergänzt."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253z" />
        </svg>
      ),
      title: "Alle Fachbereiche abgedeckt",
      description: "Mathematik, Deutsch und je nach Alter weitere Fächer - für ein vollständiges Bild der schulischen Leistungen."
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Wissenschaftlich fundierte Standortbestimmung
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Unsere Standortbestimmung basiert auf bewährten pädagogischen Methoden und dem aktuellen Lehrplan 21. 
            So erhalten Sie eine objektive und präzise Einschätzung des Lernstands Ihres Kindes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {scientificPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-6 p-6 bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex-shrink-0 w-16 h-16 bg-[#ff6b35] rounded-full flex items-center justify-center text-white">
                {point.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                <p className="text-gray-700 leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Info Box */}
        <div className="mt-12 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-[#ff6b35] rounded-full flex items-center justify-center text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Warum eine wissenschaftliche Grundlage wichtig ist</h4>
              <p className="text-gray-700 leading-relaxed">
                Nur durch standardisierte und erprobte Testverfahren können wir sicherstellen, dass die Ergebnisse 
                objektiv und vergleichbar sind. Dies ermöglicht es uns, Ihnen verlässliche Empfehlungen für die 
                weitere Bildungslaufbahn Ihres Kindes zu geben.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}