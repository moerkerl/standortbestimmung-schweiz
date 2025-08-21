export default function PartnerSection() {
  return (
    <section className="partner-section py-16 bg-white">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Starke Partner für Ihren Erfolg
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Gemeinsam mit unseren Partnern bieten wir umfassende Bildungslösungen
        </p>
        
        <div className="partner-grid grid md:grid-cols-3 gap-8">
          <div className="partner-card bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-24 h-24 bg-white rounded-xl shadow-md mx-auto mb-6 flex items-center justify-center">
              <span className="text-3xl font-bold text-[#ff6b35]">FOKUS</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Fokus Nachhilfe</h3>
            <p className="text-gray-600">
              Individuelle Nachhilfe mit über 3&apos;000 geprüften Lehrpersonen in der ganzen Deutschschweiz
            </p>
          </div>
          
          <div className="partner-card bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-24 h-24 bg-white rounded-xl shadow-md mx-auto mb-6 flex items-center justify-center">
              <span className="text-3xl font-bold text-blue-600">GoGymi</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">GoGymi</h3>
            <p className="text-gray-600">
              Digitale Lernplattform für effektives Üben und Vertiefen des Schulstoffs
            </p>
          </div>
          
          <div className="partner-card bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-24 h-24 bg-white rounded-xl shadow-md mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-700">Bildungsinstitut Fokus AG</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Bildungsinstitut Fokus AG</h3>
            <p className="text-gray-600">
              Unser Mutterhaus mit langjähriger Erfahrung in der Bildungsförderung
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
