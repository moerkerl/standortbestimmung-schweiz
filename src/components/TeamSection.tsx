import Image from 'next/image'

export default function TeamSection() {
  return (
    <section className="mini-team-section py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Ihre Expertinnen
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Zwei erfahrene Pädagoginnen - Ein Ziel: Die optimale Förderung Ihres Kindes
        </p>
        
        {/* Intro Text */}
        <div className="max-w-5xl mx-auto mb-16 text-center">
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
        
        {/* Expert Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Nicole Benjamin */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 relative h-48 md:h-auto">
                <Image
                  src="/images/Nicole_Benjamin.jpg"
                  alt="Nicole Benjamin"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:w-2/3">
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
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 relative h-48 md:h-auto">
                <Image
                  src="/images/Nadja_Ritter.jpg"
                  alt="Nadja Ritter"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:w-2/3">
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
      </div>
    </section>
  )
}
