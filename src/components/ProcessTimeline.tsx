'use client'

import Image from 'next/image'

export default function ProcessTimeline() {
  const processSteps = [
    {
      number: 1,
      title: 'Erstberatung',
      description: 'Sie füllen zuerst unser Kontaktformular aus. Anschließend prüfen wir Ihre Anfrage und kontaktieren Sie persönlich. Gemeinsam klären wir, ob eine Standortbestimmung in Ihrem Fall sinnvoll ist, was Sie sich davon erhoffen und welcher konkrete Mehrwert für Ihre individuelle Situation entsteht.',
      icon: '📞'
    },
    {
      number: 2,
      title: 'Test zu Hause',
      description: 'Ihr Kind führt den Test alleine Zuhause durch (andere Optionen nach Absprache). Alle Aufgaben basieren direkt auf dem Lehrplan 21 und sind exakt auf die kantonalen Anforderungen abgestimmt.',
      icon: '🏠',
      details: {
        tested: 'Spezifische Kompetenzen aus allen relevanten Fachbereichen, z.B. in Mathematik Zyklus 3:',
        example: {
          code: 'MA.1.C.2.i',
          description: 'Arithmetische Strukturen algebraisch formulieren (z.B. die Produkte 2·3, 4·3, 5·3, 6·3, ... sind durch 6 teilbar → 3(a + 1))'
        },
        additional: 'Den bevorzugten Lerntyp Ihres Kindes durch separate Abfragen, um zu verstehen, wie es am besten lernt.'
      }
    },
    {
      number: 3,
      title: 'Expertengespräch',
      description: 'Unsere Expertin ist per Video live dabei, während Ihr Kind weitere Testaufgaben löst. Nach dem Test folgt ein persönlicher Austausch mit Ihrem Kind. Dabei geht es nicht nur um richtige Antworten, sondern um eine ganzheitliche Beobachtung.',
      icon: '📹',
      observations: [
        'Wie reagiert Ihr Kind auf verschiedene Aufgabentypen?',
        'Wie ist das Konzentrationsvermögen über die Zeit?',
        'Wie geht es mit Sofort-Feedback um (richtig/falsch)?',
        'Kann es Hinweise nutzen und umsetzen?',
        'Welche Arbeitsstrategien wendet es an?'
      ]
    },
    {
      number: 4,
      title: 'Detaillierte Auswertung',
      description: 'Sie erhalten eine umfassende Standortbestimmung mit detailliertem Nachweis der Wissenslücken, klarer Übersicht über Stärken & Schwächen sowie konkreten Handlungsempfehlungen für die individuelle Zielerreichung.',
      icon: '📊',
      usage: [
        'Als Basis für gezielte Unterstützung zu Hause',
        'Als Grundlage für Gespräche mit der Klassenlehrperson',
        'Für den Aufbau effektiver Privatnachhilfe',
        'Zur objektiven Einschätzung des Niveaus im CH-Bildungssystem'
      ],
      timeline: 'Erfahrungsgemäß sind bei gezielter Förderung in 6-12 Monaten starke Verbesserungen möglich.'
    },
    {
      number: 5,
      title: 'Geschafft! Vollständige Klarheit erreicht',
      description: 'Sie haben es geschafft! Nach maximal 14 Tagen besitzen Sie nun vollständige Gewissheit über den Lernstand Ihres Kindes. Die Unsicherheit ist vorbei - Sie wissen genau, wo Ihr Kind steht und wie Sie es optimal fördern können.',
      icon: '🏆'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
          So funktioniert unsere Standortbestimmung
        </h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#ff6b35] opacity-30"></div>
          
          <div className="space-y-12">
            {processSteps.map((step) => (
              <div key={step.number} className="relative flex items-start">
                {/* Step Number */}
                <div className="flex-shrink-0 w-16 h-16 bg-[#ff6b35] rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg z-10">
                  {step.number}
                </div>
                
                {/* Content */}
                <div className="ml-8 flex-1">
                  <div className="bg-gradient-to-r from-orange-50 to-white rounded-2xl p-8 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{step.icon}</span>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {step.description}
                    </p>
                    
                    {/* Test Details */}
                    {step.details && (
                      <div className="space-y-4">
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-semibold text-gray-900 mb-2">Was wird getestet:</p>
                          <p className="text-gray-700 text-sm mb-3">{step.details.tested}</p>
                          <div className="bg-gray-100 rounded-lg p-3">
                            <p className="font-mono text-[#ff6b35] font-semibold">{step.details.example.code}</p>
                            <p className="text-gray-600 text-sm mt-1">{step.details.example.description}</p>
                          </div>
                          <p className="text-gray-700 text-sm mt-3">
                            <strong>Zusätzlich erfassen wir:</strong> {step.details.additional}
                          </p>
                        </div>
                        
                        {/* Test Preview */}
                        <div className="text-center">
                          <div className="inline-block bg-gray-900 rounded-2xl p-4 shadow-2xl">
                            <div className="bg-white rounded-lg p-4 w-64 h-40">
                              <Image 
                                src="/images/mathe 1+2. klasse übung.jpg" 
                                alt="Beispiel einer Testaufgabe" 
                                width={256}
                                height={160}
                                className="w-full h-full object-cover rounded"
                              />
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm mt-3">Beispielauszug einer unserer altersgerechten Testaufgaben</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Observations */}
                    {step.observations && (
                      <div className="bg-white rounded-lg p-4">
                        <p className="font-semibold text-gray-900 mb-3">Was wir beobachten:</p>
                        <ul className="space-y-2">
                          {step.observations.map((obs, obsIndex) => (
                            <li key={obsIndex} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-[#ff6b35] rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 text-sm">{obs}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* Usage */}
                    {step.usage && (
                      <div className="space-y-4">
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-semibold text-gray-900 mb-3">So nutzen Sie die Ergebnisse:</p>
                          <ul className="space-y-2">
                            {step.usage.map((use, useIndex) => (
                              <li key={useIndex} className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-[#ff6b35] rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-700 text-sm">{use}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {step.timeline && (
                          <div className="bg-blue-50 rounded-lg p-4 flex items-center gap-3">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-blue-800 text-sm">
                              <strong>Zeithorizont:</strong> {step.timeline}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16">
          <a 
            href="/standortbestimmung-anfragen"
            className="bg-[#ff6b35] text-white px-8 py-4 rounded-lg hover:bg-[#e55a2b] transition-colors font-semibold text-lg shadow-lg inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-10V7a3 3 0 00-3-3H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3v-4" />
            </svg>
            Standortbestimmung starten
          </a>
        </div>
      </div>
    </section>
  )
}