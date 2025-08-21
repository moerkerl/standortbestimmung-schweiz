'use client'

import { useRouter } from 'next/navigation'

export default function ThreeStepSystem() {
  const router = useRouter()
  
  const steps = [
    {
      number: 1,
      label: 'Analyse',
      icon: 'fa-search',
      title: 'Präzise Standortbestimmung',
      description: 'Wir analysieren den genauen Lernstand Ihres Kindes mit wissenschaftlich fundierten Methoden.',
      feature: 'Lehrplan 21 basiert',
      featureIcon: 'fa-check-circle'
    },
    {
      number: 2,
      label: 'Planung',
      icon: 'fa-map',
      title: 'Individueller Förderplan',
      description: 'Basierend auf der Analyse erstellen wir einen massgeschneiderten Plan zur optimalen Förderung.',
      feature: 'Konkrete Handlungsschritte',
      featureIcon: 'fa-tasks'
    },
    {
      number: 3,
      label: 'Erfolg',
      icon: 'fa-trophy',
      title: 'Nachhaltige Verbesserung',
      description: 'Mit unserer Begleitung erreicht Ihr Kind seine Ziele und entwickelt Freude am Lernen.',
      feature: 'Messbare Fortschritte',
      featureIcon: 'fa-chart-line'
    }
  ]

  return (
    <section className="three-step-section py-24 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Unser 3-Stufen-Erfolgssystem
        </h2>
        <p className="three-step-subtitle text-center text-lg text-gray-600 mb-16">
          Von der Unsicherheit zur Klarheit in nur drei Schritten
        </p>
        
        <div className="three-step-grid grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step) => (
            <div key={step.number} className="three-step-card bg-white rounded-2xl p-8 shadow-xl relative border-3 border-transparent hover:border-[#ff6b35] hover:transform hover:-translate-y-2 transition-all">
              <div className="step-badge absolute -top-6 left-8 w-12 h-12 bg-[#ff6b35] text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                {step.number}
              </div>
              
              <div className="step-label inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-orange-50 px-4 py-2 rounded-full mb-6 text-[#d54a1a] font-semibold">
                <i className={`fas ${step.icon}`}></i>
                <span>{step.label}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
              
              <div className="step-feature inline-flex items-center gap-2 bg-gradient-to-r from-gray-100 to-gray-50 px-4 py-2 rounded-full text-gray-700 font-medium">
                <i className={`fas ${step.featureIcon} text-[#ff6b35]`}></i>
                <span>{step.feature}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="three-step-cta text-center">
          <button 
            onClick={() => router.push('/kontakt')}
            className="main-cta inline-flex items-center gap-3 bg-gradient-to-r from-[#ff6b35] to-[#e55a2b] text-white px-8 py-4 rounded-full hover:shadow-lg hover:transform hover:-translate-y-1 transition-all font-semibold text-lg"
          >
            <i className="fas fa-rocket"></i>
            Jetzt Erfolgssystem starten
          </button>
        </div>
      </div>
    </section>
  )
}