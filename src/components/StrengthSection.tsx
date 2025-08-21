export default function StrengthSection() {
  return (
    <section className="strength-section-compact py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="strength-header text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Stärken erkennen, Potenziale fördern
          </h2>
          <p className="strength-intro text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Als Teil der Bildungsinstitut Fokus AG mit ihrem Hauptbrand &quot;Fokus Nachhilfe&quot; haben wir aus hunderten Nachhilfefällen gelernt: 
            <strong className="text-gray-900"> Kinder blühen auf, wenn man ihre Stärken erkennt und fördert.</strong>
          </p>
        </div>
        
        <div className="strength-points-grid grid md:grid-cols-3 gap-8">
          <div className="strength-point text-center">
            <div className="strength-point-icon w-20 h-20 bg-gradient-to-br from-[#ff6b35] to-[#e55a2b] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl shadow-lg">
              <i className="fas fa-search"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Stärken identifizieren</h3>
            <p className="text-gray-600 leading-relaxed">
              Jedes Kind hat einzigartige Talente - wir finden sie systematisch.
            </p>
          </div>
          
          <div className="strength-point text-center">
            <div className="strength-point-icon w-20 h-20 bg-gradient-to-br from-[#ff6b35] to-[#e55a2b] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl shadow-lg">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Potenziale aufzeigen</h3>
            <p className="text-gray-600 leading-relaxed">
              Konkrete Entwicklungsmöglichkeiten basierend auf vorhandenen Stärken.
            </p>
          </div>
          
          <div className="strength-point text-center">
            <div className="strength-point-icon w-20 h-20 bg-gradient-to-br from-[#ff6b35] to-[#e55a2b] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl shadow-lg">
              <i className="fas fa-rocket"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Erfolge ermöglichen</h3>
            <p className="text-gray-600 leading-relaxed">
              Mit dem richtigen Ansatz wird Lernen zur positiven Erfahrung.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}