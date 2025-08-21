import HeroSection from '@/components/HeroSection'
import TrustBar from '@/components/TrustBar'
import TrustSection from '@/components/TrustSection'
import ScientificSection from '@/components/ScientificSection'
import TargetAudienceSection from '@/components/TargetAudienceSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Standortbestimmung Schweiz - Wo steht Ihr Kind?",
  description: "Professionelle Standortbestimmung für Schweizer Schüler (4-15 Jahre). Lehrplan 21 konform. Wissenschaftlich fundierte Analyse des Lernstands Ihres Kindes.",
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

      {/* Scientific Section */}
      <ScientificSection />

      {/* Target Audience Section */}
      <TargetAudienceSection />

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Bereit für Klarheit über den Lernstand Ihres Kindes?
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 max-w-3xl mx-auto">
              <p>
                Eine professionelle Standortbestimmung verschafft Ihnen Gewissheit und zeigt konkrete Wege zur optimalen Förderung auf. 
                Besonders wertvoll für Familien, die neu in die Schweiz gezogen sind, einen Schulwechsel planen oder einfach wissen möchten, 
                wo ihr Kind steht.
              </p>
              
              <p className="font-semibold text-gray-900">
                Starten Sie jetzt mit der Standortbestimmung für Ihr Kind und erhalten Sie wissenschaftlich fundierte Erkenntnisse 
                über dessen Lernstand im Schweizer Bildungssystem.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/standortbestimmung-anfragen"
                className="inline-flex items-center gap-3 bg-[#ff6b35] text-white px-8 py-4 rounded-lg hover:bg-[#e55a2b] transition-colors font-semibold text-lg shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-4 12v-4m0 0a2 2 0 00-2-2H8a2 2 0 00-2 2v4h8z" />
                </svg>
                Jetzt Standortbestimmung starten
              </a>
              
              <a 
                href="/landing-page"
                className="inline-flex items-center gap-3 bg-white text-[#ff6b35] px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-lg shadow-lg border-2 border-[#ff6b35]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Mehr Informationen
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
