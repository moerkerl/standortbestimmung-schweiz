export default function ResourceSection() {
  const resources = [
    {
      icon: 'fa-file-pdf',
      title: 'Leitfaden Schweizer Schulsystem',
      description: 'Übersicht über das Bildungssystem für neue Familien',
      link: '#'
    },
    {
      icon: 'fa-book',
      title: 'Lehrplan 21 Kompetenzen',
      description: 'Detaillierte Übersicht der Anforderungen pro Stufe',
      link: '#'
    },
    {
      icon: 'fa-chart-bar',
      title: 'Muster-Auswertung',
      description: 'Beispiel einer Standortbestimmungs-Auswertung',
      link: '#'
    }
  ]

  return (
    <section className="resource-section py-16 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Hilfreiche Ressourcen
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Kostenlose Materialien für Ihren Erfolg
        </p>
        
        <div className="resource-grid grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <a 
              key={index}
              href={resource.link}
              className="resource-card bg-white rounded-xl p-8 text-center hover:shadow-lg transition-all hover:transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-[#ff6b35] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl">
                <i className={`fas ${resource.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <span className="inline-flex items-center gap-2 text-[#ff6b35] font-semibold">
                Download <i className="fas fa-arrow-right"></i>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
