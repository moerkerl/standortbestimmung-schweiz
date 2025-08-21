import Image from 'next/image'

export default function PartnerSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Ihre Möglichkeiten nach der Standortbestimmung
        </h2>
        <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Viele Eltern nutzen nach der Standortbestimmung die Möglichkeit einer professionellen Förderung. Wir bieten Ihnen zwei bewährte Wege.
        </p>
        
        <div className="bg-gradient-to-r from-orange-50 via-orange-100 to-orange-200 p-8 rounded-2xl">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Left side - Overview */}
            <div>
              <h3 className="text-2xl font-bold text-[#ff6b35] mb-4">
                Zwei Wege zur optimalen Förderung
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Profitieren Sie bei Bedarf von der einzigartigen Kombination aus persönlicher Betreuung durch uns und digitalen Lernmöglichkeiten.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <i className="fas fa-user-tie text-[#ff6b35] text-xl mt-1"></i>
                  <div>
                    <strong className="text-gray-900">Persönliche 1:1 Nachhilfe</strong>
                    <p className="text-sm text-gray-600">Individuelle Förderung durch geprüfte Lehrpersonen</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <i className="fas fa-laptop-code text-[#ff6b35] text-xl mt-1"></i>
                  <div>
                    <strong className="text-gray-900">Digitale Lernplattform</strong>
                    <p className="text-sm text-gray-600">24/7 Zugang zu interaktiven Übungen und Erklärungen</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <i className="fas fa-chart-line text-[#ff6b35] text-xl mt-1"></i>
                  <div>
                    <strong className="text-gray-900">Messbare Fortschritte</strong>
                    <p className="text-sm text-gray-600">Kontinuierliche Erfolgskontrolle und Anpassung</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Partner Cards */}
            <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Wählen Sie Ihren Förderweg
              </h3>
              
              {/* Fokus Nachhilfe */}
              <div className="mb-6 flex gap-6 items-center">
                <Image
                  src="/images/fokus-nachhilfe-logo_transparent.jpg"
                  alt="Fokus Nachhilfe"
                  width={80}
                  height={60}
                  className="object-contain"
                />
                <div className="flex-1 bg-gray-50 p-4 rounded-lg border-l-4 border-[#ff6b35]">
                  <h4 className="text-[#ff6b35] font-bold mb-1">Unser Angebot: Fokus Nachhilfe</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Direkt bei uns: Professionelle Nachhilfe mit über 5 Jahren Erfahrung
                  </p>
                  <div className="flex gap-6 text-xs text-gray-500">
                    <span><i className="fas fa-check text-green-500 mr-1"></i> Über 3&apos;000 Lehrpersonen</span>
                    <span><i className="fas fa-check text-green-500 mr-1"></i> Schweizweit verfügbar</span>
                  </div>
                </div>
              </div>
              
              {/* GoGymi */}
              <div className="mb-6 flex gap-6 items-center">
                <Image
                  src="/images/gogymi_transparent.jpg"
                  alt="GoGymi"
                  width={80}
                  height={60}
                  className="object-contain"
                />
                <div className="flex-1 bg-gray-50 p-4 rounded-lg border-l-4 border-[#ff6b35]">
                  <h4 className="text-[#ff6b35] font-bold mb-1">Unser Partner: GoGymi</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Die führende Plattform für selbstständige Gymiprüfungsvorbereitung in der Schweiz
                  </p>
                  <div className="flex gap-6 text-xs text-gray-500">
                    <span><i className="fas fa-check text-green-500 mr-1"></i> Interaktive Übungen</span>
                    <span><i className="fas fa-check text-green-500 mr-1"></i> Aut. Korrekturfunktionen mit KI</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center pt-6 border-t border-gray-200">
                <p className="text-[#ff6b35] font-semibold">
                  Die perfekte Kombination aus persönlicher Betreuung durch uns und digitaler Innovation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
