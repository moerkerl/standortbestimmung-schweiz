'use client'

export default function ResourceSection() {
  const resources = [
    {
      title: 'Beispiel-Standortbestimmung',
      description: 'Sehen Sie sich ein anonymisiertes Beispiel einer kompletten Standortbestimmung an.',
      file: 'beispiel-standortbestimmung.pdf',
      icon: '📋',
      category: 'Beispiel'
    },
    {
      title: 'Lehrplan 21 Mathematik Zyklus 2',
      description: 'Offizielle Kompetenzen für Mathematik in der 3.-6. Klasse nach Lehrplan 21.',
      file: 'lehrplan21-mathematik-zyklus2.pdf',
      icon: '📐',
      category: 'Lehrplan'
    },
    {
      title: 'Lernplan-Beispiel Mathematik',
      description: 'Musterlernplan basierend auf einer realen Standortbestimmung.',
      file: 'lernplanbeispiel-mathematik.pdf',
      icon: '📊',
      category: 'Lernplan'
    },
    {
      title: 'Übertritt Primar - Sekundar',
      description: 'Wichtige Informationen zum Übertritt von der Primarschule zur Sekundarstufe.',
      file: 'uebertritt-primar-sekundar.pdf',
      icon: '🎓',
      category: 'Übertritt'
    },
    {
      title: 'Übertritt allgemein',
      description: 'Allgemeine Richtlinien und Tipps für Schulübertritte in der Schweiz.',
      file: 'uebertritt-allgemein.pdf',
      icon: '🔄',
      category: 'Übertritt'
    },
    {
      title: 'Lerntypen wissenschaftlich erklärt',
      description: 'Wissenschaftliche Grundlagen zu verschiedenen Lerntypen und deren Förderung.',
      file: 'lerntypen-wissenschaft.pdf',
      icon: '🧠',
      category: 'Lerntheorie'
    },
    {
      title: 'Fördern ohne überfordern',
      description: 'Praktische Tipps, wie Sie Ihr Kind optimal fördern ohne es zu überlasten.',
      file: 'foerdern-ohne-ueberfordern.pdf',
      icon: '⚖️',
      category: 'Förderung'
    },
    {
      title: 'Pomodoro-Technik für Kinder',
      description: 'Die bewährte Zeitmanagement-Technik kindgerecht erklärt und angewendet.',
      file: 'pomodoro-technik.pdf',
      icon: '🍅',
      category: 'Lerntechnik'
    },
    {
      title: 'Das richtige Lernumfeld schaffen',
      description: 'Wie Sie zu Hause optimale Lernbedingungen für Ihr Kind schaffen.',
      file: 'lernumfeld.pdf',
      icon: '🏠',
      category: 'Lernumgebung'
    },
    {
      title: 'Umgang mit Lernkrisen',
      description: 'Strategien für schwierige Phasen im Lernprozess Ihres Kindes.',
      file: 'lernkrisen.pdf',
      icon: '🆘',
      category: 'Krisenmanagement'
    }
  ]

  const categories = ['Alle', 'Beispiel', 'Lehrplan', 'Lernplan', 'Übertritt', 'Lerntheorie', 'Förderung', 'Lerntechnik', 'Lernumgebung', 'Krisenmanagement']
  
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          Kostenlose Ressourcen
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Nützliche Downloads und Informationen rund um Bildung und Förderung
        </p>
        
        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 bg-gray-100 hover:bg-[#ff6b35] hover:text-white rounded-full text-sm font-medium transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <div key={index} className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#ff6b35] rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                  {resource.icon}
                </div>
                <div className="flex-1">
                  <div className="inline-block bg-[#ff6b35] text-white text-xs px-2 py-1 rounded-full mb-2">
                    {resource.category}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {resource.description}
              </p>
              
              <a 
                href={`/downloads/${resource.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#ff6b35] border border-[#ff6b35] px-4 py-2 rounded-lg hover:bg-[#ff6b35] hover:text-white transition-colors text-sm font-medium w-full justify-center"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                PDF herunterladen
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Individuelle Beratung gewünscht?
            </h3>
            <p className="text-gray-700 mb-6">
              Lassen Sie sich persönlich beraten, welche Ressourcen für Ihr Kind am besten geeignet sind.
            </p>
            <a 
              href="/standortbestimmung-anfragen"
              className="bg-[#ff6b35] text-white px-8 py-3 rounded-lg hover:bg-[#e55a2b] transition-colors font-semibold inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.13 8.13 0 01-3.618-.82L3 21l1.82-6.382A8.13 8.13 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
              </svg>
              Jetzt Beratung anfordern
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}