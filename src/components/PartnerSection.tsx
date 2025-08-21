'use client'

import Image from 'next/image'

export default function PartnerSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          Unsere Partner
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Viele Eltern nutzen nach der Standortbestimmung die Möglichkeit einer professionellen Förderung. Wir bieten Ihnen zwei bewährte Wege.
        </p>
        
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#ff6b35] mb-6">
                Zwei Wege zur optimalen Förderung
              </h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                Profitieren Sie bei Bedarf von der einzigartigen Kombination aus persönlicher Betreuung durch uns und digitalen Lernmöglichkeiten.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#ff6b35] rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Persönliche 1:1 Nachhilfe</h4>
                    <p className="text-gray-600 text-sm">Individuelle Förderung durch geprüfte Lehrpersonen</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#ff6b35] rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Digitale Lernplattform</h4>
                    <p className="text-gray-600 text-sm">24/7 Zugang zu interaktiven Übungen und Erklärungen</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#ff6b35] rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Messbare Fortschritte</h4>
                    <p className="text-gray-600 text-sm">Kontinuierliche Erfolgskontrolle und Anpassung</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-8">
                Wählen Sie Ihren Förderweg
              </h3>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#ff6b35]">
                  <div className="flex items-center gap-4 mb-4">
                    <Image 
                      src="/images/fokus-nachhilfe-logo_transparent.jpg" 
                      alt="Fokus Nachhilfe" 
                      width={64}
                      height={48}
                      className="h-12 w-16 object-contain"
                    />
                    <div>
                      <h4 className="font-bold text-[#ff6b35] text-lg">Unser Angebot: Fokus Nachhilfe</h4>
                      <p className="text-gray-600 text-sm">
                        Direkt bei uns: Professionelle Nachhilfe mit über 5 Jahren Erfahrung
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 text-sm text-gray-600">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 text-orange-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Über 3&apos;000 Lehrpersonen
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 text-orange-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Schweizweit verfügbar
                    </span>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#ff6b35]">
                  <div className="flex items-center gap-4 mb-4">
                    <Image 
                      src="/images/gogymi_transparent.jpg" 
                      alt="GoGymi" 
                      width={64}
                      height={48}
                      className="h-12 w-16 object-contain"
                    />
                    <div>
                      <h4 className="font-bold text-[#ff6b35] text-lg">Unser Partner: GoGymi</h4>
                      <p className="text-gray-600 text-sm">
                        Die führende Plattform für selbstständige Gymiprüfungsvorbereitung in der Schweiz
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 text-sm text-gray-600">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 text-orange-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Interaktive Übungen
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 text-orange-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      KI-Korrekturfunktionen
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8 pt-6 border-t border-gray-200">
                <p className="text-[#ff6b35] font-semibold text-sm">
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