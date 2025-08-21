'use client'

import { useState } from 'react'

export default function ResourceSection() {
  const [filter, setFilter] = useState<'all' | 'standortbestimmung' | 'allgemein'>('all')
  const [showMore, setShowMore] = useState(false)

  const resources = [
    // Standortbestimmung Resources
    {
      id: 1,
      category: 'standortbestimmung',
      title: 'Lerntypen erkennen & fördern',
      description: 'Erkennen Sie den Lerntyp Ihres Kindes und fördern Sie es optimal',
      type: 'Wissenschaftlicher Ratgeber',
      size: '980 KB',
      file: '/downloads/lerntypen-wissenschaft.pdf',
      alwaysVisible: true
    },
    {
      id: 2,
      category: 'standortbestimmung',
      title: 'Lehrplan 21 - Mathematik Zyklus 2',
      description: 'Offizielle Kompetenzbeschreibungen für die 3.-6. Klasse direkt vom Kanton Zürich',
      type: 'Offizielles Dokument',
      size: '2.4 MB',
      file: '/downloads/lehrplan21-mathematik-zyklus2.pdf',
      alwaysVisible: true
    },
    {
      id: 3,
      category: 'standortbestimmung',
      title: 'Beispiel-Standortbestimmung',
      description: 'Sehen Sie, wie eine professionelle Auswertung aussieht (anonymisiertes Muster)',
      type: 'Beispieldokument',
      size: '1.8 MB',
      file: '/downloads/beispiel-standortbestimmung.pdf',
      alwaysVisible: true
    },
    {
      id: 4,
      category: 'standortbestimmung',
      title: 'Lernplanbeispiel Nachhilfe Mathematik',
      description: 'Beispiel-Lernplan für die Aufarbeitung von Lücken nach der Standortbestimmung',
      type: 'Nachhilfe-Lernplan',
      size: '850 KB',
      file: '/downloads/lernplanbeispiel-mathematik.pdf',
      alwaysVisible: true
    },
    {
      id: 5,
      category: 'standortbestimmung',
      title: 'Schulübertritte und Schulsystem Schweiz',
      description: 'Umfassender Überblick über das Schweizer Bildungssystem und wichtige Übergänge',
      type: 'Informationsbroschüre',
      size: '2.1 MB',
      file: '/downloads/uebertritt-allgemein.pdf',
      alwaysVisible: false
    },
    {
      id: 6,
      category: 'standortbestimmung',
      title: 'Übertritt Primar in Sekundar',
      description: 'Detaillierte Informationen zum wichtigen Übergang von der Primar- zur Sekundarstufe',
      type: 'Offizielles Dokument',
      size: '1.8 MB',
      file: '/downloads/uebertritt-primar-sekundar.pdf',
      alwaysVisible: false
    },
    {
      id: 7,
      category: 'standortbestimmung',
      title: 'Schreibtest Bewertungsgrundregeln',
      description: 'Verstehen Sie die Bewertungskriterien für schriftliche Arbeiten im Detail',
      type: 'Bewertungsrichtlinien',
      size: '950 KB',
      file: '/downloads/schreibtest-bewertungsgrundregeln.pdf',
      alwaysVisible: false
    },
    // Allgemeine Resources
    {
      id: 8,
      category: 'allgemein',
      title: 'Fördern ohne Überfordern',
      description: 'Wissenschaftlich fundierter Leitfaden für die optimale Lernunterstützung zu Hause',
      type: 'Elternratgeber',
      size: '1.2 MB',
      file: '/downloads/foerdern-ohne-ueberfordern.pdf',
      alwaysVisible: true
    },
    {
      id: 9,
      category: 'allgemein',
      title: 'Umgang mit Lernkrisen',
      description: 'Strategien zur Bewältigung von Lernkrisen und Motivationstiefs bei Kindern',
      type: 'Elternratgeber',
      size: '1.1 MB',
      file: '/downloads/lernkrisen.pdf',
      alwaysVisible: true
    },
    {
      id: 10,
      category: 'allgemein',
      title: 'Ignorieren von Anzeichen für Lern- und Verhaltensprobleme',
      description: 'Warnsignale erkennen und rechtzeitig handeln - ein Leitfaden für Eltern',
      type: 'Elternratgeber',
      size: '950 KB',
      file: '/downloads/ignorieren.pdf',
      alwaysVisible: false
    },
    {
      id: 11,
      category: 'allgemein',
      title: 'Richtiges Lernumfeld schaffen',
      description: 'Wie Sie zu Hause optimale Lernbedingungen für Ihr Kind gestalten',
      type: 'Elternratgeber',
      size: '1.3 MB',
      file: '/downloads/lernumfeld.pdf',
      alwaysVisible: false
    },
    {
      id: 12,
      category: 'allgemein',
      title: 'Fehler notieren und daraus lernen',
      description: 'Die Fehlerdokumentation als wertvolles Lerninstrument nutzen',
      type: 'Lernmethode',
      size: '800 KB',
      file: '/downloads/fehler-notieren.pdf',
      alwaysVisible: false
    },
    {
      id: 13,
      category: 'allgemein',
      title: 'Laut denken und besser verstehen',
      description: 'Wie lautes Denken das Lernen und Verstehen Ihres Kindes fördert',
      type: 'Lernmethode',
      size: '900 KB',
      file: '/downloads/laut-denken.pdf',
      alwaysVisible: false
    },
    {
      id: 14,
      category: 'allgemein',
      title: 'Hilfreiche Lernrituale',
      description: 'Etablieren Sie erfolgreiche Lernroutinen für nachhaltige Erfolge',
      type: 'Elternratgeber',
      size: '1.0 MB',
      file: '/downloads/lernrituale.pdf',
      alwaysVisible: false
    },
    {
      id: 15,
      category: 'allgemein',
      title: 'Pomodoro-Technik',
      description: 'Effektives Zeitmanagement für konzentriertes Lernen mit der Pomodoro-Methode',
      type: 'Lernmethode',
      size: '750 KB',
      file: '/downloads/pomodoro-technik.pdf',
      alwaysVisible: false
    }
  ]

  // Filter resources based on category and visibility
  const filteredResources = resources.filter(resource => {
    if (filter === 'all') return true
    return resource.category === filter
  })

  const visibleResources = showMore 
    ? filteredResources 
    : filteredResources.filter(r => r.alwaysVisible)

  return (
    <section id="ressourcen" className="resources-section py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Kostenlose Ressourcen für Eltern
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Transparenz ist uns wichtig - laden Sie offizielle Dokumente und hilfreiche Ratgeber herunter
        </p>
        
        <div className="resources-container">
          {/* Filter Buttons */}
          <div className="resources-filter flex justify-center gap-4 mb-12">
            <button 
              onClick={() => setFilter('all')}
              className={`filter-btn inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                filter === 'all' 
                  ? 'bg-[#ff6b35] text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <i className="fas fa-th"></i>
              Alle
            </button>
            <button 
              onClick={() => setFilter('standortbestimmung')}
              className={`filter-btn inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                filter === 'standortbestimmung' 
                  ? 'bg-[#ff6b35] text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <i className="fas fa-clipboard-check"></i>
              Standortbestimmung
            </button>
            <button 
              onClick={() => setFilter('allgemein')}
              className={`filter-btn inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                filter === 'allgemein' 
                  ? 'bg-[#ff6b35] text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <i className="fas fa-book"></i>
              Allgemein
            </button>
          </div>
          
          {/* Resources Grid */}
          <div className="resources-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleResources.map((resource) => (
              <div 
                key={resource.id} 
                className="resource-card bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-[#ff6b35] transition-all"
              >
                <div className="resource-icon w-16 h-16 bg-gradient-to-br from-[#ff6b35] to-[#e55a2b] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl">
                  <i className="fas fa-file-pdf"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <div className="resource-meta flex justify-between text-sm text-gray-500 mb-4">
                  <span className="resource-type">{resource.type}</span>
                  <span className="resource-size">{resource.size}</span>
                </div>
                <a 
                  href={resource.file} 
                  className="resource-download inline-flex items-center gap-2 bg-[#ff6b35] text-white px-6 py-3 rounded-full hover:bg-[#e55a2b] transition-colors font-semibold w-full justify-center"
                  download
                >
                  <i className="fas fa-download"></i>
                  PDF herunterladen
                </a>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {filteredResources.length > filteredResources.filter(r => r.alwaysVisible).length && (
            <div className="text-center mt-12">
              <button 
                onClick={() => setShowMore(!showMore)}
                className="resources-toggle-btn inline-flex items-center gap-3 px-8 py-4 bg-gray-100 hover:bg-gray-200 rounded-full font-semibold text-gray-700 transition-all"
              >
                {showMore ? (
                  <>
                    <span>Weniger Ressourcen anzeigen</span>
                    <i className="fas fa-chevron-up"></i>
                  </>
                ) : (
                  <>
                    <span>Weitere Ressourcen anzeigen</span>
                    <i className="fas fa-chevron-down"></i>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}