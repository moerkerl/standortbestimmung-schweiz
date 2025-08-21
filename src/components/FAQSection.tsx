'use client'

import { useState } from 'react'

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Für welche Altersgruppen bieten Sie Standortbestimmungen an?',
      answer: 'Unsere Standortbestimmungen sind für Kinder und Jugendliche von 4 bis 15 Jahren geeignet - vom Kindergarten bis zur 9. Klasse. Je nach Alter arbeiten Sie mit Nicole Benjamin (Primarstufe) oder Nadja Ritter (Sekundarstufe) zusammen.'
    },
    {
      question: 'Wie lange dauert eine komplette Standortbestimmung?',
      answer: 'Der gesamte Prozess dauert in der Regel 10-14 Tage. Nach der Erstberatung führt Ihr Kind den Test zu Hause durch (1-2 Stunden), anschließend findet das Expertengespräch statt (30-45 Minuten). Die detaillierte Auswertung erhalten Sie dann innerhalb weniger Tage.'
    },
    {
      question: 'Was kostet eine Standortbestimmung?',
      answer: 'Wir bieten drei verschiedene Pakete an: die Basis-Standortbestimmung, PLUS (mit Lernplan) und KOMPLETT (mit Nachhilfe-Vermittlung). Die genauen Preise teilen wir Ihnen gerne im persönlichen Beratungsgespräch mit, da sie je nach Umfang und individuellen Bedürfnissen variieren können.'
    },
    {
      question: 'Muss mein Kind den Test alleine durchführen?',
      answer: 'Grundsätzlich ja, damit wir eine objektive Einschätzung erhalten. Ihr Kind führt den Test selbstständig zu Hause durch, während unsere Expertin per Video live dabei ist. Bei besonderen Bedürfnissen oder jüngeren Kindern können wir jedoch individuelle Lösungen finden.'
    },
    {
      question: 'Welche Fächer werden getestet?',
      answer: 'Die Testung erfolgt lehrplankonform und umfasst je nach Alter die relevanten Kernfächer: Mathematik, Deutsch, Französisch (ab 3. Klasse) und Englisch (ab 5. Klasse). Zusätzlich erfassen wir den Lerntyp Ihres Kindes, um zu verstehen, wie es am besten lernt.'
    },
    {
      question: 'Was passiert mit den Testergebnissen?',
      answer: 'Sie erhalten eine detaillierte, schriftliche Auswertung mit konkreten Handlungsempfehlungen. Die Ergebnisse werden vertraulich behandelt und nur mit Ihnen geteilt. Sie können diese als Basis für Gespräche mit Lehrpersonen, für gezielte Förderung zu Hause oder für die Auswahl passender Nachhilfe nutzen.'
    },
    {
      question: 'Ist eine Standortbestimmung auch bei guten Schulnoten sinnvoll?',
      answer: 'Ja, durchaus! Eine Standortbestimmung zeigt nicht nur Schwächen auf, sondern identifiziert auch Stärken und ungenutztes Potenzial. Sie kann helfen, Ihr Kind optimal zu fördern, den richtigen Bildungsweg zu wählen oder frühzeitig Bereiche zu erkennen, die mehr Aufmerksamkeit benötigen.'
    },
    {
      question: 'Was unterscheidet Sie von anderen Anbietern?',
      answer: 'Unsere Tests basieren zu 100% auf dem Lehrplan 21 - jede Aufgabe wird direkt aus spezifischen Lehrplan-Kompetenzen abgeleitet. Dadurch erhalten Sie keine generischen Ergebnisse, sondern eine präzise Analyse, die direkt mit den schulischen Anforderungen vergleichbar ist. Zudem haben unsere Expertinnen langjährige Unterrichtserfahrung.'
    },
    {
      question: 'Kann ich die Standortbestimmung auch online durchführen lassen?',
      answer: 'Ja, der Test wird standardmäßig online zu Hause durchgeführt, während unsere Expertin per Video live dabei ist. Dies bietet Ihrem Kind die gewohnte Umgebung und uns die Möglichkeit zur direkten Beobachtung. Bei technischen Problemen finden wir gemeinsam eine Lösung.'
    },
    {
      question: 'Was passiert nach der Standortbestimmung?',
      answer: 'Das liegt ganz bei Ihnen! Sie erhalten konkrete Empfehlungen und können diese selbst umsetzen. Viele Familien nutzen auch unsere weiterführenden Angebote: individuelle Nachhilfe über Fokus Nachhilfe oder digitale Lernunterstützung über unseren Partner GoGymi. Es besteht jedoch keinerlei Verpflichtung.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          Häufig gestellte Fragen
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Antworten auf die wichtigsten Fragen zu unserer Standortbestimmung
        </p>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <button
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-[#ff6b35] transform transition-transform flex-shrink-0 ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-orange-100 to-orange-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Haben Sie weitere Fragen?
            </h3>
            <p className="text-gray-700 mb-6">
              Wir beraten Sie gerne persönlich und unverbindlich zu allen Aspekten unserer Standortbestimmung.
            </p>
            <a 
              href="mailto:info@standortbestimmung-schweiz.ch"
              className="inline-flex items-center gap-2 bg-[#ff6b35] text-white px-6 py-3 rounded-lg hover:bg-[#e55a2b] transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Jetzt persönlich beraten lassen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}