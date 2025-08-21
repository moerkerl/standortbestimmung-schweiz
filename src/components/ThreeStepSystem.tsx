'use client'

import { useRouter } from 'next/navigation'

export default function ThreeStepSystem() {
  const router = useRouter()
  
  const steps = [
    {
      number: 1,
      badge: 'Stufe 1',
      label: 'Analyse',
      icon: 'fa-microscope',
      title: 'Standortbestimmung',
      description: 'Der wichtigste erste Schritt: Wir analysieren präzise, wo Ihr Kind steht und was es braucht.',
      included: [
        'Lehrplan-basierter Test',
        '1:1 Expertengespräch',
        'Ausführlicher Ergebnisbericht'
      ],
      result: 'Klarheit über den Lernstand',
      resultIcon: 'fa-file-alt'
    },
    {
      number: 2,
      badge: 'Stufe 2',
      label: 'Analyse + Strategie',
      icon: 'fa-compass',
      title: 'Standortbestimmung PLUS',
      titleHighlight: 'PLUS',
      description: 'Nicht nur wissen wo Ihr Kind steht, sondern auch wie es vorankommt - mit klarem Plan.',
      plusConcept: 'Alles aus Stufe 1, zusätzlich:',
      included: [
        'Individueller Lernplan',
        'Wochenziele & Meilensteine',
        'Methoden-Empfehlungen'
      ],
      result: 'Klarer Weg zum Ziel',
      resultIcon: 'fa-map',
      isHighlight: true
    },
    {
      number: 3,
      badge: 'Stufe 3',
      label: 'Komplettlösung',
      icon: 'fa-hands-helping',
      title: 'Standortbestimmung KOMPLETT',
      titleHighlight: 'KOMPLETT',
      description: 'Die Rundum-Lösung: Wir begleiten Sie von der Analyse bis zum nachhaltigen Erfolg.',
      plusConcept: 'Alles aus Stufe 1 & 2, zusätzlich:',
      included: [
        'Passende Nachhilfe-Lehrkraft',
        'Regelmässige Lernbegleitung',
        'Fortschrittskontrolle'
      ],
      result: 'Nachhaltige Verbesserung',
      resultIcon: 'fa-trophy'
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Ihr Weg zum Schulerfolg
        </h2>
        <p className="text-center text-xl text-gray-600 mb-16">
          Drei aufeinander aufbauende Stufen - Sie bestimmen das Tempo
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step) => (
            <div 
              key={step.number} 
              className={`relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border-3 ${
                step.isHighlight ? 'border-[#ff6b35] scale-105' : 'border-transparent'
              }`}
            >
              {/* Package Type Badge */}
              <div className="absolute -top-4 right-6 bg-gradient-to-r from-gray-700 to-gray-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                {step.badge}
              </div>
              
              {/* Step Number */}
              <div className="absolute -top-5 left-8 w-14 h-14 bg-[#ff6b35] text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                {step.number}
              </div>
              
              <div className="mt-4">
                {/* Label */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-orange-50 px-4 py-2 rounded-full mb-6">
                  <i className={`fas ${step.icon} text-[#d54a1a]`}></i>
                  <span className="text-[#d54a1a] font-bold">{step.label}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.titleHighlight ? (
                    <>
                      {step.title.split(step.titleHighlight)[0]}
                      <span className="text-[#ff6b35]">{step.titleHighlight}</span>
                    </>
                  ) : (
                    step.title
                  )}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                
                {/* Plus Concept */}
                {step.plusConcept && (
                  <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg mb-4">
                    <i className="fas fa-plus-circle text-[#ff6b35]"></i>
                    <span className="text-sm text-gray-700">{step.plusConcept}</span>
                  </div>
                )}
                
                {/* Included Items */}
                <ul className="space-y-3 mb-6">
                  {step.included.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <i className={`fas ${
                        step.number === 1 ? 'fa-check-circle text-green-500' :
                        step.number === 2 ? 'fa-plus text-[#ff6b35]' :
                        'fa-star text-yellow-500'
                      } mt-0.5`}></i>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Result */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-100 to-gray-50 px-4 py-2 rounded-full">
                  <i className={`fas ${step.resultIcon} text-[#ff6b35]`}></i>
                  <span className="text-gray-700 font-medium text-sm">{step.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button 
            onClick={() => router.push('/standortbestimmung-anfragen')}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#ff6b35] to-[#e55a2b] text-white px-10 py-5 rounded-[50px] hover:shadow-xl hover:scale-105 transition-all duration-300 font-bold text-lg shadow-lg cursor-pointer"
          >
            <i className="fas fa-rocket"></i>
            Meinen Erfolgsweg starten
          </button>
        </div>
      </div>
    </section>
  )
}