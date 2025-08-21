import { Metadata } from 'next'
import Image from 'next/image'
import PhilosophySection from '@/components/PhilosophySection'
import PartnerSection from '@/components/PartnerSection'

export const metadata: Metadata = {
  title: 'Über uns - Standortbestimmung Schweiz',
  description: 'Lernen Sie unser Team, unsere Partner und unsere Philosophie kennen. Standortbestimmung Schweiz - Ein Service der Bildungsinstitut Fokus AG.',
}

export default function UeberUnsPage() {
  return (
    <div className="min-h-screen">
      {/* Expert Section - Ihre Fachpersonen */}
      <section className="py-20 bg-white mt-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Ihre Fachpersonen für professionelle Standortbestimmungen
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Zwei erfahrene Pädagoginnen - Ein Ziel: Die optimale Förderung Ihres Kindes
          </p>
          
          {/* Expert Cards Horizontal */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {/* Nicole Benjamin */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="relative w-32 h-32 flex-shrink-0">
                  <Image
                    src="/images/Nicole_Benjamin.jpg"
                    alt="Nicole Benjamin"
                    fill
                    className="object-cover rounded-full border-4 border-[#ff6b35]"
                  />
                </div>
                <div className="text-center md:text-left">
                  <div className="inline-block bg-gradient-to-r from-[#ff6b35] to-[#e55a2b] text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                    Primarstufe
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Nicole Benjamin</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Erfahrene Klassenlehrerin mit Expertise in Lernstandsanalysen und 
                    besonderem Fokus auf Kinder mit Lernschwierigkeiten im Primarschulalter.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Nadja Ritter */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="relative w-32 h-32 flex-shrink-0">
                  <Image
                    src="/images/Nadja_Ritter.jpg"
                    alt="Nadja Ritter"
                    fill
                    className="object-cover rounded-full border-4 border-[#ff6b35]"
                  />
                </div>
                <div className="text-center md:text-left">
                  <div className="inline-block bg-gradient-to-r from-[#ff6b35] to-[#e55a2b] text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                    Sekundarstufe
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Nadja Ritter</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Erfahrene Klassenlehrerin mit Expertise in Lernstandsanalysen und 
                    besonderem Fokus auf Jugendliche mit Lernschwierigkeiten.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Intro Text */}
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              Für die Durchführung Ihrer Standortbestimmung stehen Ihnen unsere erfahrenen Fachpersonen <strong>Nicole Benjamin</strong> und <strong>Nadja Ritter</strong> zur Verfügung. 
              Beide sind erfahrene Klassenlehrerinnen mit Spezialisierung auf Lernstandsanalysen und der Förderung von Kindern mit Lernschwierigkeiten.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Nicole begleitet Ihr Kind durch die wichtigen Grundschuljahre (Kindergarten bis 6. Klasse), während Nadja Jugendliche in der herausfordernden Sekundarschulzeit 
              (7. bis 9. Klasse) unterstützt. Beide Expertinnen verbindet ihre Leidenschaft für individuelle Förderung und ihr fundiertes Wissen in der Durchführung 
              professioneller Lernstandsanalysen.
            </p>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
            Warum es uns gibt
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Geboren aus der Erfahrung von hunderten erfolgreichen Nachhilfefällen
          </p>
          
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#ff6b35] to-[#e55a2b] rounded-full flex items-center justify-center">
                <i className="fas fa-graduation-cap text-3xl text-white"></i>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed text-center text-lg">
              <strong>Standortbestimmung-Schweiz.ch</strong> ist eine spezialisierte Dienstleistung der <strong>Bildungsinstitut Fokus AG</strong>, einem der führenden Nachhilfeunternehmen in der Schweiz. 
              Durch unsere langjährige Erfahrung mit hunderten von Schülerinnen und Schülern haben wir ein wiederkehrendes Bedürfnis erkannt: Viele Familien wissen nicht genau, wo ihr Kind schulisch steht.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-[#ff6b35] to-[#e55a2b] rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-search text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Wissenslücken aufdecken</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Wir identifizieren präzise, wo Nachholbedarf besteht und erstellen einen klaren Plan, 
                um diese Lücken systematisch zu schliessen. So wird aus Unsicherheit ein konkreter Weg nach vorne.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-[#ff6b35] to-[#e55a2b] rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-chart-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Realistische Perspektiven</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Eltern und Kinder erhalten eine objektive Einschätzung, wo sie im Vergleich zu anderen stehen und 
                welche schulischen Laufbahnen realistisch möglich sind - fundiert und ehrlich.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Aus dieser Erkenntnis heraus haben wir die professionelle Standortbestimmung entwickelt - ein strukturiertes 
              Verfahren, das Klarheit schafft und Familien die Sicherheit gibt, die richtigen Entscheidungen für die 
              schulische Zukunft zu treffen.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section - Unser Kernteam */}
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Unser Kernteam
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-5xl mx-auto leading-relaxed">
            Unser Kernteam besteht aus erfahrenen Fachpersonen, die Sie kompetent durch den gesamten Prozess der Standortbestimmung begleiten. 
            Nicole Benjamin und Nadja Ritter sind unsere Expertinnen für die Durchführung und Auswertung der Standortbestimmungstests. 
            Sie werden unterstützt von Tabea Glünkin und Ciril Bullinger, die für die Organisation, Koordination und administrative Betreuung zuständig sind. 
            Gemeinsam sorgen wir dafür, dass die Standortbestimmung professionell durchgeführt wird und Sie eine fundierte Analyse des Lernstands Ihres Kindes erhalten.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Tabea Glünkin */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/images/Tabea_Gluenkin.jpg"
                  alt="Tabea Glünkin"
                  fill
                  className="object-cover rounded-full shadow-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tabea Glünkin</h3>
              <p className="text-gray-600">Koordination und Betreuung</p>
            </div>
            
            {/* Ciril Bullinger */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/images/Ciril_Bullinger.jpg"
                  alt="Ciril Bullinger"
                  fill
                  className="object-cover rounded-full shadow-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ciril Bullinger</h3>
              <p className="text-gray-600">Administration und Support</p>
            </div>
            
            {/* Nicole Benjamin */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/images/Nicole_Benjamin.jpg"
                  alt="Nicole Benjamin"
                  fill
                  className="object-cover rounded-full shadow-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Nicole Benjamin</h3>
              <p className="text-gray-600">Standortbestimmungs-Expertin</p>
            </div>
            
            {/* Nadja Ritter */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/images/Nadja_Ritter.jpg"
                  alt="Nadja Ritter"
                  fill
                  className="object-cover rounded-full shadow-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Nadja Ritter</h3>
              <p className="text-gray-600">Standortbestimmungs-Expertin</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <PhilosophySection />

      {/* Partner Section */}
      <PartnerSection />

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Kontaktieren Sie uns</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-[#ff6b35] to-[#e55a2b] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-envelope text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Per E-Mail kontaktieren</h3>
              <p className="text-gray-600 mb-6 text-center">
                Melden Sie sich bei jeglichen Fragen gerne bei uns. Wir helfen Ihnen schnell und unkompliziert weiter.
              </p>
              <div className="text-center">
                <a 
                  href="mailto:info@standortbestimmung-schweiz.ch" 
                  className="text-[#ff6b35] font-semibold hover:text-[#e55a2b] transition-colors text-lg"
                >
                  info@standortbestimmung-schweiz.ch
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-[#ff6b35] to-[#e55a2b] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-file-alt text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Kontaktanfrage stellen</h3>
              <p className="text-gray-600 mb-6 text-center">
                Wenn Sie sich über Details zur Nachhilfe austauschen möchten, nutzen Sie gerne unser Formular. Wir melden uns zeitnah bei Ihnen und beraten Sie persönlich zu Ihren Fragen und Wünschen.
              </p>
              <div className="text-center">
                <a 
                  href="/standortbestimmung-anfragen" 
                  className="inline-block bg-[#ff6b35] text-white px-6 py-3 rounded-lg hover:bg-[#e55a2b] transition-colors font-semibold shadow-lg"
                >
                  Jetzt Kontaktanfrage stellen
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-[#ff6b35] to-[#e55a2b] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-map-marker-alt text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Unser Standort in Zürich</h3>
              <p className="text-gray-600 mb-6 text-center">Besuchen Sie uns an unserem Hauptsitz in Zürich:</p>
              <div className="text-gray-700 text-center">
                <strong className="text-lg">Bildungsinstitut Fokus AG</strong><br />
                <span className="text-gray-600">Staffelstrasse 8<br />
                8045 Zürich</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}