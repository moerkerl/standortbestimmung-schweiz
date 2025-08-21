export default function ScientificSection() {
  const pillars = [
    {
      icon: 'fa-microscope',
      title: 'Wissenschaftliche Basis',
      description: 'Unsere Tests basieren auf validierten Verfahren aus der Pädagogischen Psychologie und aktuellen Erkenntnissen der Lernforschung.',
      bulletPoints: [
        'Altersgerechte Methodik basierend auf Entwicklungspsychologie',
        'Evidenzbasierte Testverfahren',
        'Kontinuierliche Weiterentwicklung nach neuesten Forschungserkenntnissen'
      ]
    },
    {
      icon: 'fa-book-open',
      title: 'Lehrplan 21 konform',
      description: 'Alle Aufgaben werden direkt aus dem offiziellen Lehrplan abgeleitet - transparent und nachvollziehbar.',
      hasExample: true,
      bulletPoints: [
        'Regelmässige Aktualisierung gemäss Lehrplanänderungen',
        'Kalibrierung mit kantonalen Standards'
      ]
    },
    {
      icon: 'fa-eye',
      title: 'Ganzheitliche Beobachtung',
      description: 'Wir erfassen nicht nur Wissen, sondern beobachten systematisch verschiedene Kompetenzbereiche:',
      bulletPoints: [
        'Fachkompetenz in allen Kernfächern',
        'Methodenkompetenz und Arbeitsstrategien',
        'Sozial- und Selbstkompetenz'
      ]
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Wissenschaftlich fundiert &amp; transparent
          </h2>
          <p className="text-xl text-gray-600">
            Unsere Standortbestimmung basiert auf drei Säulen höchster Qualität
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-[#ff6b35] to-[#ff8c61] rounded-2xl flex items-center justify-center mb-6">
                <i className={`fas ${pillar.icon} text-white text-3xl`}></i>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{pillar.title}</h3>
              
              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">{pillar.description}</p>
              
              {/* Example for Lehrplan 21 */}
              {pillar.hasExample && (
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 mb-6 border border-blue-200">
                  <p className="text-sm font-semibold text-blue-900 mb-2">Konkretes Beispiel:</p>
                  <div className="bg-white rounded-lg p-3">
                    <code className="text-[#ff6b35] font-mono font-semibold">MA.1.C.2.i</code>
                    <p className="text-sm text-gray-700 mt-1">Arithmetische Strukturen algebraisch formulieren</p>
                  </div>
                </div>
              )}
              
              {/* Bullet Points */}
              <ul className="space-y-3">
                {pillar.bulletPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <i className="fas fa-check text-green-500 mt-1"></i>
                    <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}