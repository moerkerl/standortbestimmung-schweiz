'use client'

export default function PhilosophySection() {
  const values = [
    {
      icon: '❤️',
      title: 'Empathie',
      description: 'Wir begegnen jedem Schüler mit echtem Verständnis und Einfühlungsvermögen. Unsere empathische Herangehensweise ermöglicht es uns, auf die individuellen Bedürfnisse einzugehen und persönliche Lernwege zu gestalten.',
      points: [
        'Aktives Zuhören in Erstgesprächen und regelmäßigen Feedback-Runden',
        'Individuell angepasste Lerntechniken statt standardisierter Programme',
        'Flexible Anpassung unserer Methoden auf Basis der Rückmeldungen der Schüler'
      ]
    },
    {
      icon: '🤝',
      title: 'Respekt',
      description: 'Wir achten die Individualität jedes Schülers und erkennen an, dass jeder Mensch einzigartige Stärken und Herausforderungen mitbringt. Respekt bedeutet für uns, diese Unterschiede wertzuschätzen und mit Würde zu behandeln.',
      points: [
        'Wertschätzende Kommunikation auf Augenhöhe mit Schülern und Eltern',
        'Anerkennung unterschiedlicher Lernstile und -geschwindigkeiten',
        'Einbeziehung der Perspektiven aller Beteiligten in Entscheidungsprozesse'
      ]
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Wir sind ständig auf der Suche nach neuen, besseren Wegen, um Schüler zu unterstützen. Innovation bedeutet für uns, kreative Lösungen zu finden und unsere Methoden kontinuierlich weiterzuentwickeln.',
      points: [
        'Regelmäßige Fortbildungen und Weiterentwicklung unserer Methodenkompetenzen',
        'Integration neuester Erkenntnisse aus der Forschung',
        'Entwicklung digitaler Tools zur Unterstützung des Lernprozesses'
      ]
    },
    {
      icon: '🏆',
      title: 'Exzellenz',
      description: 'Wir streben nach höchster Qualität in allem, was wir tun. Exzellenz bedeutet für uns, kontinuierlich an der Verbesserung unserer Dienstleistungen zu arbeiten und dabei stets die Bedürfnisse unserer Schüler im Fokus zu behalten.',
      points: [
        'Kontinuierliche Qualitätskontrolle und Verbesserung unserer Lehrmethoden',
        'Regelmäßige Evaluation und Anpassung unserer Programme',
        'Hohe Standards bei der Auswahl und Ausbildung unserer Tutoren'
      ]
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
          Unsere Philosophie und Werte
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {values.map((value) => (
            <div key={value.title} className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#ff6b35] rounded-full flex items-center justify-center text-2xl mr-4">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{value.title}</h3>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                {value.description}
              </p>
              
              <ul className="space-y-3">
                {value.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-[#ff6b35] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm leading-relaxed">{point}</span>
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