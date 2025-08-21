import { Metadata } from 'next'
import TeamSection from '@/components/TeamSection'
import PhilosophySection from '@/components/PhilosophySection'
import PartnerSection from '@/components/PartnerSection'

export const metadata: Metadata = {
  title: 'Über uns - Standortbestimmung Schweiz',
  description: 'Lernen Sie unser Team, unsere Partner und unsere Philosophie kennen. Standortbestimmung Schweiz - Ein Service der Bildungsinstitut Fokus AG.',
}

export default function UeberUnsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20 lg:py-24 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Über uns
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Erfahren Sie mehr über unser Team, unsere Werte und unsere Partner. 
            Wir sind Ihr kompetenter Ansprechpartner für professionelle Standortbestimmungen in der Schweiz.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Purpose Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Warum es uns gibt
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Geboren aus der Erfahrung von hunderten erfolgreichen Nachhilfefällen
          </p>
          
          <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-[#ff6b35] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed text-center mb-6">
              <strong>Standortbestimmung-Schweiz.ch</strong> ist eine spezialisierte Dienstleistung der{' '}
              <strong>Bildungsinstitut Fokus AG</strong>, einem der führenden Nachhilfeunternehmen in der Schweiz. 
              Durch unsere langjährige Erfahrung mit hunderten von Schülerinnen und Schülern haben wir ein 
              wiederkehrendes Bedürfnis erkannt: Viele Familien wissen nicht genau, wo ihr Kind schulisch steht.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#ff6b35] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wissenslücken aufdecken</h3>
              <p className="text-gray-600 leading-relaxed">
                Wir identifizieren präzise, wo Nachholbedarf besteht und erstellen einen klaren Plan, 
                um diese Lücken systematisch zu schließen. So wird aus Unsicherheit ein konkreter Weg nach vorne.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#ff6b35] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Realistische Perspektiven</h3>
              <p className="text-gray-600 leading-relaxed">
                Eltern und Kinder erhalten eine objektive Einschätzung, wo sie im Vergleich zu anderen stehen und 
                welche schulischen Laufbahnen realistisch möglich sind - fundiert und ehrlich.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Aus dieser Erkenntnis heraus haben wir die professionelle Standortbestimmung entwickelt - ein strukturiertes 
              Verfahren, das Klarheit schafft und Familien die Sicherheit gibt, die richtigen Entscheidungen für die 
              schulische Zukunft zu treffen.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <PhilosophySection />

      {/* Partner Section */}
      <PartnerSection />

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Kontaktieren Sie uns</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-[#ff6b35] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Per E-Mail kontaktieren</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Melden Sie sich bei jeglichen Fragen gerne bei uns. Wir helfen Ihnen schnell und unkompliziert weiter.
              </p>
              <a 
                href="mailto:info@standortbestimmung-schweiz.ch" 
                className="text-[#ff6b35] font-medium hover:underline"
              >
                info@standortbestimmung-schweiz.ch
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-[#ff6b35] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Kontaktanfrage stellen</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Wenn Sie sich über Details zur Standortbestimmung austauschen möchten, nutzen Sie gerne unser Formular.
              </p>
              <a 
                href="/standortbestimmung-anfragen" 
                className="inline-block bg-[#ff6b35] text-white px-4 py-2 rounded-lg hover:bg-[#e55a2b] transition-colors text-sm font-medium"
              >
                Jetzt Kontaktanfrage stellen
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-[#ff6b35] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Unser Standort in Zürich</h3>
              <p className="text-gray-600 mb-4 text-sm">Besuchen Sie uns an unserem Hauptsitz in Zürich:</p>
              <div className="text-gray-700 text-sm">
                <strong>Bildungsinstitut Fokus AG</strong><br />
                Staffelstrasse 8<br />
                8045 Zürich
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}