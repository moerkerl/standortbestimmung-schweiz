'use client'

import { useRouter } from 'next/navigation'

export default function ProcessSection() {
  const router = useRouter()
  
  const steps = [
    {
      number: 1,
      title: "Erstberatung",
      content: "Sie füllen zuerst unser Kontaktformular aus. Anschliessend prüfen wir Ihre Anfrage und kontaktieren Sie persönlich. Gemeinsam klären wir, ob eine Standortbestimmung in Ihrem Fall sinnvoll ist, was Sie sich davon erhoffen und welcher konkrete Mehrwert für Ihre individuelle Situation entsteht.",
      icon: "fa-phone"
    },
    {
      number: 2,
      title: "Test zu Hause",
      content: "Ihr Kind führt den Test alleine Zuhause durch (andere Optionen nach Absprache). Alle Aufgaben basieren direkt auf dem Lehrplan 21 und sind exakt auf die kantonalen Anforderungen abgestimmt.",
      details: {
        tested: "Spezifische Kompetenzen aus allen relevanten Fachbereichen, z.B. in Mathematik Zyklus 3:",
        example: {
          code: "MA.1.C.2.i",
          description: "Arithmetische Strukturen algebraisch formulieren (z.B. die Produkte 2·3, 4·3, 5·3, 6·3, ... sind durch 6 teilbar → 3(a + 1))"
        },
        additional: "Den bevorzugten Lerntyp Ihres Kindes durch separate Abfragen, um zu verstehen, wie es am besten lernt."
      },
      icon: "fa-home"
    },
    {
      number: 3,
      title: "Expertengespräch",
      content: "Unsere Expertin ist per Video live dabei, während Ihr Kind weitere Testaufgaben löst. Nach dem Test folgt ein persönlicher Austausch mit Ihrem Kind. Dabei geht es nicht nur um richtige Antworten, sondern um eine ganzheitliche Beobachtung.",
      observations: [
        "Wie reagiert Ihr Kind auf verschiedene Aufgabentypen?",
        "Wie ist das Konzentrationsvermögen über die Zeit?",
        "Wie geht es mit Sofort-Feedback um (richtig/falsch)?",
        "Kann es Hinweise nutzen und umsetzen?",
        "Welche Arbeitsstrategien wendet es an?"
      ],
      icon: "fa-video"
    },
    {
      number: 4,
      title: "Detaillierte Auswertung",
      content: "Sie erhalten eine umfassende Standortbestimmung mit detailliertem Nachweis der Wissenslücken, klarer Übersicht über Stärken & Schwächen sowie konkreten Handlungsempfehlungen für die individuelle Zielerreichung.",
      usage: [
        "Als Basis für gezielte Unterstützung zu Hause",
        "Als Grundlage für Gespräche mit der Klassenlehrperson",
        "Für den Aufbau effektiver Privatnachhilfe",
        "Zur objektiven Einschätzung des Niveaus im CH-Bildungssystem"
      ],
      timeline: "Erfahrungsgemäß sind bei gezielter Förderung in 6-12 Monaten starke Verbesserungen möglich.",
      icon: "fa-chart-line"
    },
    {
      number: 5,
      title: "Geschafft! Vollständige Klarheit erreicht",
      content: "Sie haben es geschafft! Nach maximal 14 Tagen besitzen Sie nun vollständige Gewissheit über den Lernstand Ihres Kindes. Die Unsicherheit ist vorbei - Sie wissen genau, wo Ihr Kind steht und wie Sie es optimal fördern können.",
      icon: "fa-trophy"
    }
  ]

  return (
    <section id="prozess" className="process-section py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          So funktioniert unsere Standortbestimmung
        </h2>
        
        <div className="process-timeline relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#ff6b35] hidden lg:block"></div>
          
          {steps.map((step, index) => (
            <div key={step.number} className="process-step relative mb-16 lg:mb-20">
              {/* Step Number Circle */}
              <div className="step-number absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#ff6b35] text-white rounded-full flex items-center justify-center text-2xl font-bold z-10 shadow-lg hidden lg:flex">
                {step.number}
              </div>
              
              {/* Content */}
              <div className={`lg:w-[48%] ${index % 2 === 0 ? 'lg:ml-auto lg:pl-4' : 'lg:mr-auto lg:pr-4'}`}>
                <div className="step-content bg-white rounded-2xl shadow-xl p-8 relative">
                  {/* Mobile step number */}
                  <div className="lg:hidden w-12 h-12 bg-[#ff6b35] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="step-icon absolute -top-5 -right-5 w-12 h-12 bg-[#ff6b35] text-white rounded-full flex items-center justify-center">
                    <i className={`fas ${step.icon}`}></i>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{step.content}</p>
                  
                  {/* Test Details for Step 2 */}
                  {step.details && (
                    <div className="test-details bg-gray-50 rounded-lg p-6 mt-4">
                      <p className="font-semibold text-gray-900 mb-3">Was wird getestet:</p>
                      <p className="text-gray-700 mb-3">{step.details.tested}</p>
                      <div className="example-box bg-white border-2 border-[#ff6b35] rounded-lg p-4 mb-4">
                        <p className="example-code font-mono text-[#ff6b35] font-semibold text-lg mb-2">
                          {step.details.example.code}
                        </p>
                        <p className="text-gray-700 text-sm">{step.details.example.description}</p>
                      </div>
                      <p className="text-gray-700">
                        <strong>Zusätzlich erfassen wir:</strong> {step.details.additional}
                      </p>
                    </div>
                  )}
                  
                  {/* Observations for Step 3 */}
                  {step.observations && (
                    <div className="observation-details bg-gray-50 rounded-lg p-6 mt-4">
                      <p className="font-semibold text-gray-900 mb-3">Was wir beobachten:</p>
                      <ul className="space-y-2">
                        {step.observations.map((obs, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-[#ff6b35] mr-2">→</span>
                            <span className="text-gray-700">{obs}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Usage for Step 4 */}
                  {step.usage && (
                    <div className="usage-details bg-gray-50 rounded-lg p-6 mt-4">
                      <p className="font-semibold text-gray-900 mb-3">So nutzen Sie die Ergebnisse:</p>
                      <ul className="space-y-2 mb-4">
                        {step.usage.map((use, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-[#ff6b35] mr-2">→</span>
                            <span className="text-gray-700">{use}</span>
                          </li>
                        ))}
                      </ul>
                      {step.timeline && (
                        <div className="timeline-info bg-green-50 rounded-lg p-4 flex items-center">
                          <i className="fas fa-clock text-green-600 mr-3"></i>
                          <p className="text-green-900">
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
        
        <div className="process-cta text-center mt-16">
          <button 
            onClick={() => router.push('/kontakt')}
            className="main-cta inline-flex items-center gap-3 bg-gradient-to-r from-[#ff6b35] to-[#e55a2b] text-white px-8 py-4 rounded-full hover:shadow-lg hover:transform hover:-translate-y-1 transition-all font-semibold text-lg"
          >
            <i className="fas fa-play"></i>
            Standortbestimmung starten
          </button>
        </div>
      </div>
    </section>
  )
}