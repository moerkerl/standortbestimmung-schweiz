'use client'

import Image from 'next/image'

export default function TeamSection() {
  const experts = [
    {
      name: 'Nicole Benjamin',
      stage: 'Primarstufe',
      image: '/images/Nicole_Benjamin.jpg',
      description: 'Erfahrene Klassenlehrerin mit Expertise in Lernstandsanalysen und besonderem Fokus auf Kinder mit Lernschwierigkeiten im Primarschulalter.'
    },
    {
      name: 'Nadja Ritter',
      stage: 'Sekundarstufe',
      image: '/images/Nadja_Ritter.jpg',
      description: 'Erfahrene Klassenlehrerin mit Expertise in Lernstandsanalysen und besonderem Fokus auf Jugendliche mit Lernschwierigkeiten.'
    }
  ]

  const teamMembers = [
    {
      name: 'Tabea Glünkin',
      role: 'Koordination und Betreuung',
      image: '/images/Tabea_Gluenkin.jpg'
    },
    {
      name: 'Ciril Bullinger',
      role: 'Administration und Support',
      image: '/images/Ciril_Bullinger.jpg'
    }
  ]

  return (
    <>
      {/* Main Experts Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Ihre Fachpersonen für professionelle Standortbestimmungen
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Zwei erfahrene Pädagoginnen - Ein Ziel: Die optimale Förderung Ihres Kindes
          </p>
          
          <div className="space-y-8">
            {experts.map((expert) => (
              <div key={expert.name} className="bg-gradient-to-r from-orange-50 to-white rounded-2xl p-8 shadow-lg">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <Image 
                      src={expert.image} 
                      alt={expert.name}
                      width={128}
                      height={128}
                      className="w-32 h-32 rounded-full object-cover shadow-lg"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="inline-block bg-[#ff6b35] text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {expert.stage}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{expert.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{expert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-gray-50 rounded-2xl p-8">
            <p className="text-gray-700 leading-relaxed">
              Für die Durchführung Ihrer Standortbestimmung stehen Ihnen unsere erfahrenen Fachpersonen{' '}
              <strong>Nicole Benjamin</strong> und <strong>Nadja Ritter</strong> zur Verfügung. 
              Beide sind erfahrene Klassenlehrerinnen mit Spezialisierung auf Lernstandsanalysen und der Förderung von Kindern mit Lernschwierigkeiten.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Nicole begleitet Ihr Kind durch die wichtigen Grundschuljahre (Kindergarten bis 6. Klasse), während Nadja Jugendliche in der herausfordernden Sekundarschulzeit 
              (7. bis 9. Klasse) unterstützt. Beide Expertinnen verbindet ihre Leidenschaft für individuelle Förderung und ihr fundiertes Wissen in der Durchführung 
              professioneller Lernstandsanalysen.
            </p>
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Unser Kernteam</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            Unser Kernteam besteht aus erfahrenen Fachpersonen, die Sie kompetent durch den gesamten Prozess der Standortbestimmung begleiten. 
            Nicole Benjamin und Nadja Ritter sind unsere Expertinnen für die Durchführung und Auswertung der Standortbestimmungstests. 
            Sie werden unterstützt von Tabea Glünkin und Ciril Bullinger, die für die Organisation, Koordination und administrative Betreuung zuständig sind.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <Image 
                  src={member.image} 
                  alt={member.name}
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-sm text-[#ff6b35] font-medium">{member.role}</p>
              </div>
            ))}
            {experts.map((expert) => (
              <div key={`team-${expert.name}`} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <Image 
                  src={expert.image} 
                  alt={expert.name}
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{expert.name}</h3>
                <p className="text-sm text-[#ff6b35] font-medium">Standortbestimmungs-Expertin</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}