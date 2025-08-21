'use client'

import { useRouter } from 'next/navigation'

export default function ThreeStepSystem() {
  const router = useRouter()

  const steps = [
    {
      number: 1,
      label: 'Analyse',
      title: 'Standortbestimmung',
      subtitle: 'Der wichtigste erste Schritt',
      description: 'Wir analysieren präzise, wo Ihr Kind steht und was es braucht.',
      icon: '🔬',
      features: [
        'Lehrplan-basierter Test',
        '1:1 Expertengespräch', 
        'Ausführlicher Ergebnisbericht'
      ],
      result: 'Ihr Ergebnis: Klarheit über den Lernstand',
      resultIcon: '📄'
    },
    {
      number: 2,
      label: 'Analyse + Strategie',
      title: 'Standortbestimmung PLUS',
      subtitle: 'Nicht nur wissen wo Ihr Kind steht, sondern auch wie es vorankommt',
      description: 'Mit klarem Plan zur optimalen Förderung.',
      icon: '🧭',
      plusConcept: true,
      features: [
        'Individueller Lernplan',
        'Wochenziele & Meilensteine',
        'Methoden-Empfehlungen'
      ],
      result: 'Ihr Vorteil: Klarer Weg zum Ziel',
      resultIcon: '🗺️'
    },
    {
      number: 3,
      label: 'Komplettlösung',
      title: 'Standortbestimmung KOMPLETT',
      subtitle: 'Die Rundum-Betreuung',
      description: 'Wir analysieren, planen und setzen gemeinsam mit Ihrem Kind um.',
      icon: '🤝',
      plusConcept: true,
      features: [
        'Passende Nachhilfe-Lehrkraft',
        'Regelmässige Lernbegleitung',
        'Fortschrittskontrolle'
      ],
      result: 'Ihr Erfolg: Aktive Begleitung zum Ziel',
      resultIcon: '🚀'
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          Ihr Weg zum Schulerfolg
        </h2>
        <p className="text-lg text-gray-600 text-center mb-16">
          Drei aufeinander aufbauende Stufen - Sie bestimmen das Tempo
        </p>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className={`bg-white rounded-2xl shadow-xl p-8 relative transform hover:scale-105 transition-transform ${
                index === 0 ? 'cursor-pointer' : ''
              }`}
              onClick={index === 0 ? () => router.push('/standortbestimmung-anfragen') : undefined}
            >
              {/* Package Type Badge */}
              <div className="bg-[#ff6b35] text-white text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                Stufe {step.number}
              </div>
              
              {/* Step Number Badge */}
              <div className="absolute -top-4 left-8 w-12 h-12 bg-[#ff6b35] text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                {step.number}
              </div>
              
              {/* Icon and Label */}
              <div className="flex items-center gap-3 mb-4 mt-4">
                <span className="text-2xl">{step.icon}</span>
                <span className="text-[#ff6b35] font-medium text-sm">{step.label}</span>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 mb-6">
                {step.description}
              </p>
              
              {/* Plus Concept */}
              {step.plusConcept && (
                <div className="flex items-center gap-2 mb-4 text-[#ff6b35] text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span className="font-medium">Alles aus Stufe {step.number - 1}, zusätzlich:</span>
                </div>
              )}
              
              {/* Features */}
              <ul className="space-y-3 mb-6">
                {step.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* Result */}
              <div className="bg-gray-50 rounded-lg p-4 flex items-center gap-3">
                <span className="text-lg">{step.resultIcon}</span>
                <span className="text-gray-700 text-sm font-medium">{step.result}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <button 
            onClick={() => router.push('/standortbestimmung-anfragen')}
            className="bg-[#ff6b35] text-white px-8 py-4 rounded-lg hover:bg-[#e55a2b] transition-colors font-semibold text-lg shadow-lg cursor-pointer inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            Meinen Erfolgsweg starten
          </button>
        </div>
      </div>
    </section>
  )
}