'use client'

import { useState } from 'react'

export default function FAQSectionComplete() {
  const [openItems, setOpenItems] = useState<number[]>([0, 1, 2])
  const [showMore, setShowMore] = useState(false)

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const faqs = [
    {
      question: "Wie lange dauert die komplette Standortbestimmung?",
      answer: `Die gesamte Standortbestimmung umfasst etwa 2-3 Stunden, aufgeteilt in:
• 15-30 Minuten Erstberatung (telefonisch)
• 60-90 Minuten Test zu Hause (flexibel einteilbar)
• 45-60 Minuten Expertengespräch per Video

Die Auswertung erhalten Sie innerhalb von 3-5 Werktagen.`
    },
    {
      question: "Für welche Kinder ist die Standortbestimmung geeignet?",
      answer: `Unsere Standortbestimmung ist für alle Kinder vom Kindergarten bis zur 9. Klasse (4-15 Jahre) geeignet. Besonders wertvoll ist sie für:
• Kinder vor wichtigen Schulübergängen
• Internationale Familien und Expats, die das Schweizer Schulsystem kennenlernen möchten
• Kinder mit Leistungsschwankungen oder unklarem Potenzial
• Familien, die eine objektive Einschätzung wünschen`
    },
    {
      question: "Was kostet die Standortbestimmung?",
      answer: "Die Kosten für die komplette Standortbestimmung besprechen wir gerne persönlich mit Ihnen in der kostenlosen Erstberatung. Der Preis richtet sich nach dem Umfang der gewünschten Analyse und eventuellen Zusatzleistungen. Die Erstberatung ist immer kostenlos und unverbindlich."
    },
    {
      question: "Wie unterscheidet sich Ihre Standortbestimmung von Schultests?",
      answer: `Unsere Standortbestimmung geht weit über normale Schultests hinaus:
• Ganzheitliche Erfassung aller Kompetenzbereiche
• Stärkenorientierter Ansatz statt reiner Leistungsmessung
• Berücksichtigung des individuellen Lerntyps
• Konkrete Handlungsempfehlungen für die Förderung
• Persönliches Expertengespräch zur vertieften Analyse`
    },
    {
      question: "Muss mein Kind den Test alleine machen?",
      answer: `Das hängt vom Alter und der Selbstständigkeit Ihres Kindes ab. In der Erstberatung klären wir gemeinsam das optimale Setting. Grundsätzlich gilt:
• Bei jüngeren Kindern (Kindergarten bis 2. Klasse) ist Elternbegleitung meist sinnvoll
• Ab der 3. Klasse arbeiten viele Kinder selbstständiger
• Sie können jederzeit für Fragen zur Verfügung stehen
• Wichtig ist eine ruhige, entspannte Atmosphäre ohne Druck`
    },
    {
      question: "Wie wissenschaftlich fundiert sind Ihre Tests?",
      answer: `Unsere Tests basieren auf:
• Validierten Verfahren aus der Pädagogischen Psychologie
• Aktuellen Erkenntnissen der Lernforschung
• Direkter Ableitung aus dem Lehrplan 21
• Regelmäßiger Aktualisierung und Kalibrierung mit kantonalen Standards
• Altersgerechter Methodik basierend auf Entwicklungspsychologie`
    },
    {
      question: "Was passiert mit den Ergebnissen meines Kindes?",
      answer: `Vertraulichkeit hat bei uns oberste Priorität:
• Alle Daten werden streng vertraulich behandelt
• Die Ergebnisse gehören ausschließlich Ihnen
• Keine Weitergabe an Dritte ohne Ihre explizite Zustimmung
• Sie entscheiden, mit wem Sie die Ergebnisse teilen möchten
• Sichere Datenspeicherung gemäß Schweizer Datenschutzrichtlinien`
    },
    {
      question: "Kann die Standortbestimmung bei Schulproblemen helfen?",
      answer: `Ja, definitiv! Die Standortbestimmung hilft bei verschiedenen Herausforderungen:
• Identifikation der Ursachen von Leistungsschwankungen
• Aufdecken von versteckten Stärken und Potenzialen
• Konkrete Strategien für besseres Lernen
• Objektive Grundlage für Gespräche mit Lehrpersonen
• Gezielte Empfehlungen für Fördermaßnahmen

Erfahrungsgemäß zeigen sich bei gezielter Förderung in 6-12 Monaten deutliche Verbesserungen.`
    },
    {
      question: "Bieten Sie auch Nachbetreuung an?",
      answer: `Ja, wir lassen Sie nach der Standortbestimmung nicht allein:
• Nachbesprechung der Ergebnisse bei Bedarf
• Vermittlung passender Nachhilfe über Fokus Nachhilfe
• Regelmäßige Fortschrittskontrolle möglich
• Beratung bei der Umsetzung der Empfehlungen
• Unterstützung bei Schulgesprächen auf Wunsch`
    },
    {
      question: "Wie schnell bekomme ich einen Termin?",
      answer: `Wir bemühen uns um maximale Flexibilität:
• Erstberatung meist innerhalb von 1-2 Werktagen
• Standortbestimmung je nach Verfügbarkeit innerhalb einer Woche
• Flexible Termingestaltung auch abends oder am Wochenende
• Bei dringenden Fällen versuchen wir, Sondertermine zu ermöglichen

Kontaktieren Sie uns einfach, und wir finden gemeinsam einen passenden Termin!`
    }
  ]

  return (
    <section className="faq-section py-24 bg-gray-50">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Häufig gestellte Fragen
        </h2>
        <p className="faq-subtitle text-center text-lg text-gray-600 mb-12">
          Hier finden Sie Antworten auf die wichtigsten Fragen zur Standortbestimmung
        </p>
        
        <div className="faq-container space-y-4">
          {/* First 3 FAQs - always visible */}
          {faqs.slice(0, 3).map((faq, index) => (
            <div key={index} className="faq-item bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="faq-question w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 text-left">
                  {faq.question}
                </h3>
                <i className={`fas fa-chevron-${openItems.includes(index) ? 'up' : 'down'} text-[#ff6b35]`}></i>
              </button>
              {openItems.includes(index) && (
                <div className="faq-answer px-6 pb-6 border-t border-gray-100">
                  <p className="text-gray-600 whitespace-pre-line leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
          
          {/* Expandable FAQs */}
          {showMore && (
            <div className="faq-expandable space-y-4">
              {faqs.slice(3).map((faq, index) => (
                <div key={index + 3} className="faq-item bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    onClick={() => toggleItem(index + 3)}
                    className="faq-question w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 text-left">
                      {faq.question}
                    </h3>
                    <i className={`fas fa-chevron-${openItems.includes(index + 3) ? 'up' : 'down'} text-[#ff6b35]`}></i>
                  </button>
                  {openItems.includes(index + 3) && (
                    <div className="faq-answer px-6 pb-6 border-t border-gray-100">
                      <p className="text-gray-600 whitespace-pre-line leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          
          {/* Show More Button */}
          <button
            onClick={() => setShowMore(!showMore)}
            className="faq-toggle-btn w-full py-4 mt-6 flex items-center justify-center gap-2 text-[#ff6b35] font-semibold hover:bg-white rounded-lg transition-colors"
          >
            <span className={showMore ? 'hide-text' : 'show-text'}>
              {showMore ? 'Weniger Fragen anzeigen' : 'Weitere Fragen anzeigen'}
            </span>
            <i className={`fas fa-chevron-${showMore ? 'up' : 'down'}`}></i>
          </button>
        </div>
      </div>
    </section>
  )
}