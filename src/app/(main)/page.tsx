import HeroSection from '@/components/HeroSection'
import TrustBar from '@/components/TrustBar'
import TrustSection from '@/components/TrustSection'
import TargetAudienceSection from '@/components/TargetAudienceSection'
import ThreeStepSystem from '@/components/ThreeStepSystem'
import ScientificSection from '@/components/ScientificSection'
import StrengthSection from '@/components/StrengthSection'
import TeamSection from '@/components/TeamSection'
import ProcessSection from '@/components/ProcessSection'
import QualitySection from '@/components/QualitySection'
import FAQSectionComplete from '@/components/FAQSectionComplete'
import PartnerSection from '@/components/PartnerSection'
import ResourceSection from '@/components/ResourceSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Standortbestimmung Schweiz - Professionelle Lernstandsanalyse für Schüler",
  description: "Professionelle Standortbestimmung für Kinder vom Kindergarten bis 9. Klasse (4-15 Jahre) in der Schweiz. Für Schweizer, Expats und neu Zugezogene. Identifizieren Sie Stärken und Schwächen Ihres Kindes.",
  robots: "index, follow"
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Trust Bar */}
      <TrustBar />

      {/* Trust Section */}
      <TrustSection />

      {/* Target Audience Section */}
      <TargetAudienceSection />

      {/* 3-Step Success System */}
      <ThreeStepSystem />

      {/* Scientific Foundation Section */}
      <ScientificSection />

      {/* Strength-Based Approach */}
      <StrengthSection />

      {/* Team Section */}
      <TeamSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Lehrplan Quality Section */}
      <QualitySection />
      

      {/* Benefits Section */}
      <section id="vorteile" className="benefits-section py-24 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Was Sie von unserer Standortbestimmung erhalten
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12">
            Eine umfassende Lösung für die optimale Förderung Ihres Kindes
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Säule 1: Analyse */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="bg-[#ff6b35] text-white p-6 text-center">
                <i className="fas fa-microscope text-3xl mb-2"></i>
                <h3 className="text-xl font-bold">Detaillierte Analyse</h3>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check text-[#ff6b35] mt-1"></i>
                    <div>
                      <strong>Präzise Lernstandsanalyse</strong>
                      <p className="text-sm text-gray-600 mt-1">Genaue Einschätzung in allen relevanten Bereichen</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check text-[#ff6b35] mt-1"></i>
                    <div>
                      <strong>Stärken-Schwächen-Profil</strong>
                      <p className="text-sm text-gray-600 mt-1">Klare Übersicht über Talente und Förderbereiche</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check text-[#ff6b35] mt-1"></i>
                    <div>
                      <strong>Lerntypen-Bestimmung</strong>
                      <p className="text-sm text-gray-600 mt-1">Individuelle Lernpräferenzen verstehen</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Säule 2: Beratung */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="bg-[#ff6b35] text-white p-6 text-center">
                <i className="fas fa-users text-3xl mb-2"></i>
                <h3 className="text-xl font-bold">Persönliche Begleitung</h3>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check text-[#ff6b35] mt-1"></i>
                    <div>
                      <strong>Expertenberatung</strong>
                      <p className="text-sm text-gray-600 mt-1">Persönliche Beratung durch erfahrene Pädagoginnen</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check text-[#ff6b35] mt-1"></i>
                    <div>
                      <strong>Live-Beobachtung</strong>
                      <p className="text-sm text-gray-600 mt-1">Direkte Einschätzung während des Tests</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check text-[#ff6b35] mt-1"></i>
                    <div>
                      <strong>Flexibel & bequem</strong>
                      <p className="text-sm text-gray-600 mt-1">Durchführung zu Hause nach Ihrem Zeitplan</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Säule 3: Ergebnis */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="bg-[#ff6b35] text-white p-6 text-center">
                <i className="fas fa-map-marked-alt text-3xl mb-2"></i>
                <h3 className="text-xl font-bold">Konkreter Förderplan</h3>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check text-[#ff6b35] mt-1"></i>
                    <div>
                      <strong>Handlungsempfehlungen</strong>
                      <p className="text-sm text-gray-600 mt-1">Konkrete Schritte für die optimale Entwicklung</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check text-[#ff6b35] mt-1"></i>
                    <div>
                      <strong>Lehrplan 21 konform</strong>
                      <p className="text-sm text-gray-600 mt-1">Direkt umsetzbar im Schulalltag</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check text-[#ff6b35] mt-1"></i>
                    <div>
                      <strong>Wissenschaftlich fundiert</strong>
                      <p className="text-sm text-gray-600 mt-1">Basierend auf aktuellen Erkenntnissen</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Section */}
      <section className="target-section py-24 bg-gray-900 text-white">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Besonders wertvoll in diesen Situationen
          </h2>
          <div className="target-content grid lg:grid-cols-2 gap-16 items-center">
            <div className="target-list space-y-8">
              <div className="target-item flex items-start gap-6">
                <i className="fas fa-globe text-3xl text-[#ff6b35] mt-2"></i>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Umzug in die Schweiz</h3>
                  <p className="text-gray-300">Perfekt für Familien, die neu in die Schweiz ziehen und das Bildungssystem kennenlernen möchten</p>
                </div>
              </div>
              <div className="target-item flex items-start gap-6">
                <i className="fas fa-exchange-alt text-3xl text-[#ff6b35] mt-2"></i>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Schulwechsel</h3>
                  <p className="text-gray-300">Ideal vor einem Schulwechsel, um sicherzustellen, dass Ihr Kind optimal vorbereitet ist</p>
                </div>
              </div>
              <div className="target-item flex items-start gap-6">
                <i className="fas fa-graduation-cap text-3xl text-[#ff6b35] mt-2"></i>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Schulübergänge</h3>
                  <p className="text-gray-300">Entscheidend bei Übergängen: Primarschule → Sekundarstufe → Gymnasium/Lehre/Studium</p>
                </div>
              </div>
              <div className="target-item flex items-start gap-6">
                <i className="fas fa-compass text-3xl text-[#ff6b35] mt-2"></i>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Zukunftsplanung</h3>
                  <p className="text-gray-300">Hilft bei der Entscheidung, welcher Bildungsweg für Ihr Kind der richtige ist</p>
                </div>
              </div>
            </div>
            <div className="target-cta">
              <div className="cta-box bg-gradient-to-br from-[#ff6b35] to-[#e55a2b] p-12 rounded-3xl text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Schaffen Sie Klarheit für die Zukunft Ihres Kindes
                </h3>
                <p className="text-white/90 mb-8">
                  Eine professionelle Standortbestimmung ist der erste Schritt zu gezielter Förderung und schulischem Erfolg.
                </p>
                <a href="/standortbestimmung-anfragen" className="inline-flex items-center gap-3 bg-white text-[#ff6b35] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  <i className="fas fa-arrow-right"></i>
                  Jetzt Beratung anfordern
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSectionComplete />

      {/* Partner Logos Section */}
      <PartnerSection />

      {/* Final CTA Section */}
      <section className="final-cta py-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="cta-content">
            <h2 className="text-4xl font-bold text-white mb-6">Starten Sie jetzt die Standortbestimmung</h2>
            <p className="text-xl text-gray-300 mb-10">Der erste Schritt zu gezielter Förderung und schulischem Erfolg</p>
            <a href="/standortbestimmung-anfragen" className="main-cta large inline-flex items-center gap-3 bg-gradient-to-r from-[#ff6b35] to-[#e55a2b] text-white px-10 py-5 rounded-full font-semibold text-lg hover:shadow-2xl hover:transform hover:-translate-y-1 transition-all">
              <i className="fas fa-calendar-check"></i>
              Jetzt Termin vereinbaren
            </a>
            <div className="cta-features flex flex-wrap justify-center gap-8 mt-12">
              <div className="feature flex items-center gap-2 text-gray-300">
                <i className="fas fa-check text-green-400"></i>
                <span>Kostenlose Erstberatung</span>
              </div>
              <div className="feature flex items-center gap-2 text-gray-300">
                <i className="fas fa-check text-green-400"></i>
                <span>Individuelle Terminplanung</span>
              </div>
              <div className="feature flex items-center gap-2 text-gray-300">
                <i className="fas fa-check text-green-400"></i>
                <span>Umfassende Auswertung</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Center Section */}
      <ResourceSection />
    </>
  )
}
