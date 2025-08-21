import { Metadata } from 'next'
import ThreeStepSystem from '@/components/ThreeStepSystem'
import ProcessTimeline from '@/components/ProcessTimeline'
import QualitySection from '@/components/QualitySection'
import LPBenefits from '@/components/LPBenefits'
import PartnerSection from '@/components/PartnerSection'

export const metadata: Metadata = {
  title: 'Ablauf - Standortbestimmung Schweiz',
  description: 'Erfahren Sie, wie unsere professionelle Standortbestimmung abläuft. Von der Erstberatung bis zur detaillierten Auswertung - alles transparent erklärt.',
}

export default function AblaufPage() {
  const benefits = [
    {
      icon: '🔬',
      title: 'Detaillierte Analyse',
      description: 'Präzise Lernstandsanalyse, Stärken-Schwächen-Profil und Lerntypen-Bestimmung für genaue Einschätzung in allen relevanten Bereichen.'
    },
    {
      icon: '👥',
      title: 'Persönliche Begleitung',
      description: 'Expertenberatung durch erfahrene Pädagoginnen, Live-Beobachtung während des Tests und flexible Durchführung zu Hause.'
    },
    {
      icon: '🗺️',
      title: 'Konkreter Förderplan',
      description: 'Handlungsempfehlungen direkt umsetzbar im Schulalltag, Lehrplan 21 konform und wissenschaftlich fundiert.'
    }
  ]

  const targetGroups = [
    {
      icon: '🌍',
      title: 'Umzug in die Schweiz',
      description: 'Perfekt für Familien, die neu in die Schweiz ziehen und das Bildungssystem kennenlernen möchten'
    },
    {
      icon: '🔄',
      title: 'Schulwechsel',
      description: 'Ideal vor einem Schulwechsel, um sicherzustellen, dass Ihr Kind optimal vorbereitet ist'
    },
    {
      icon: '🎓',
      title: 'Schulübergänge',
      description: 'Entscheidend bei Übergängen: Primarschule → Sekundarstufe → Gymnasium/Lehre/Studium'
    },
    {
      icon: '🧭',
      title: 'Zukunftsplanung',
      description: 'Hilft bei der Entscheidung, welcher Bildungsweg für Ihr Kind der richtige ist'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20 lg:py-24 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ablauf unserer Standortbestimmung
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Von der ersten Anfrage bis zur detaillierten Auswertung - 
            erfahren Sie hier genau, wie unsere professionelle Standortbestimmung abläuft.
          </p>
        </div>
      </section>

      {/* Three Step System */}
      <ThreeStepSystem />

      {/* Process Timeline */}
      <ProcessTimeline />

      {/* Quality Section */}
      <QualitySection />

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Was Sie von unserer Standortbestimmung erhalten
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16">
            Eine umfassende Lösung für die optimale Förderung Ihres Kindes
          </p>
          <LPBenefits benefits={benefits} />
        </div>
      </section>

      {/* Target Groups */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            Besonders wertvoll in diesen Situationen
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {targetGroups.map((group) => (
              <div key={group.title} className="flex items-start gap-6 p-6 bg-gradient-to-r from-orange-50 to-white rounded-xl shadow-lg">
                <div className="text-4xl flex-shrink-0">{group.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{group.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{group.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-orange-100 to-orange-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Schaffen Sie Klarheit für die Zukunft Ihres Kindes
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Eine professionelle Standortbestimmung ist der erste Schritt zu gezielter Förderung und schulischem Erfolg.
              </p>
              <a 
                href="/standortbestimmung-anfragen"
                className="bg-[#ff6b35] text-white px-8 py-4 rounded-lg hover:bg-[#e55a2b] transition-colors font-semibold text-lg shadow-lg inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                Jetzt Beratung anfordern
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <PartnerSection />

      {/* Final CTA */}
      <section className="py-16 bg-[#ff6b35]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Starten Sie jetzt die Standortbestimmung
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Der erste Schritt zu gezielter Förderung und schulischem Erfolg
          </p>
          
          <a 
            href="/standortbestimmung-anfragen"
            className="bg-white text-[#ff6b35] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg shadow-lg inline-flex items-center gap-2 mb-8"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-4 12v-4m0 0a2 2 0 00-2-2H8a2 2 0 00-2 2v4h8z" />
            </svg>
            Jetzt Termin vereinbaren
          </a>
          
          <div className="flex justify-center gap-8 text-orange-100">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Kostenlose Erstberatung</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Individuelle Terminplanung</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Umfassende Auswertung</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}