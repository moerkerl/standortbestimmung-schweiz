export default function TeamSection() {
  return (
    <section className="mini-team-section py-16 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Ihre Expertinnen für die Standortbestimmung
        </h2>
        
        <div className="team-grid grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="team-member text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-[#ff6b35] to-[#e55a2b] rounded-full mx-auto mb-6 flex items-center justify-center text-white text-5xl shadow-lg">
              <i className="fas fa-user-graduate"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Nicole Benjamin</h3>
            <p className="text-[#ff6b35] font-semibold mb-3">Expertin Primarstufe</p>
            <p className="text-gray-600 leading-relaxed">
              Spezialistin für Kinder vom Kindergarten bis zur 6. Klasse. 
              Langjährige Erfahrung in der individuellen Förderung und Diagnostik.
            </p>
          </div>
          
          <div className="team-member text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-[#ff6b35] to-[#e55a2b] rounded-full mx-auto mb-6 flex items-center justify-center text-white text-5xl shadow-lg">
              <i className="fas fa-user-tie"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Nadja Ritter</h3>
            <p className="text-[#ff6b35] font-semibold mb-3">Expertin Sekundarstufe</p>
            <p className="text-gray-600 leading-relaxed">
              Ihre Ansprechpartnerin für Jugendliche der 7.-9. Klasse. 
              Expertise in Übertrittsberatung und Berufsorientierung.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
