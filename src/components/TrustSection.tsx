export default function TrustSection() {
  const trustPoints = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Seit 2020 aktiv",
      description: "Moderne Expertise in der individuellen Bildungsförderung"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      title: "Über 1000 Erfolgsgeschichten", 
      description: "Familien vertrauen auf unsere Expertise in Nachhilfe und Standortbestimmung"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Deutschschweiz-Fokus",
      description: "Spezialisiert auf die Deutschschweizer Kantone und deren spezifische Anforderungen"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Vertrauen Sie auf unsere Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            <strong>Standortbestimmung-Schweiz.ch</strong> ist eine spezialisierte Dienstleistung der <strong>Bildungsinstitut Fokus AG</strong>, 
            einem der führenden Nachhilfeunternehmen in der Schweiz. Durch unsere langjährige Erfahrung mit hunderten von Schülerinnen 
            und Schülern haben wir ein wiederkehrendes Bedürfnis erkannt: Viele Familien wissen nicht genau, wo ihr Kind schulisch steht.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {trustPoints.map((point, index) => (
            <div key={index} className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6 text-[#ff6b35]">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{point.title}</h3>
              <p className="text-gray-700 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}