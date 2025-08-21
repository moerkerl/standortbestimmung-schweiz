export default function TargetAudienceSection() {
  const ageGroups = [
    {
      icon: 'fa-baby',
      title: "Kindergarten - 2. Klasse",
      age: "4-8 Jahre",
      description: "Früherkennung von Stärken und Entwicklungsbereichen für einen optimalen Schulstart"
    },
    {
      icon: 'fa-child',
      title: "3. - 6. Klasse",
      age: "9-12 Jahre",
      description: "Vorbereitung auf den wichtigen Übertritt in die Sekundarstufe"
    },
    {
      icon: 'fa-user-graduate',
      title: "7. - 9. Klasse",
      age: "13-15 Jahre", 
      description: "Orientierung für Gymnasium, Berufslehre oder weiterführende Schulen"
    }
  ]

  const specialGroups = [
    {
      icon: 'fa-globe',
      title: "Internationale Familien & Expats",
      description: "Verstehen Sie das Schweizer Schulsystem und finden Sie die richtige Einstufung für Ihr Kind"
    },
    {
      icon: 'fa-exchange-alt',
      title: "Bei Schulwechsel oder Umzug",
      description: "Sichern Sie einen nahtlosen Übergang und die richtige Klasseneinstufung"
    },
    {
      icon: 'fa-chart-line',
      title: "Bei Leistungsschwankungen",
      description: "Erkennen Sie frühzeitig Förderbedarf und nutzen Sie das volle Potenzial Ihres Kindes"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Für wen ist unsere Standortbestimmung?
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Wir unterstützen alle Eltern mit Kindern die bereits im Schweizer Schulsystem sind oder erst noch ins Schweizer Schulsystem eintreten werden
          </p>
        </div>

        {/* Age Groups */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {ageGroups.map((group, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              {/* Icon at top */}
              <div className="w-20 h-20 bg-gradient-to-br from-[#ff6b35] to-[#e55a2b] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <i className={`fas ${group.icon} text-white text-3xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{group.title}</h3>
              <p className="text-[#ff6b35] font-bold text-lg mb-4">{group.age}</p>
              <p className="text-gray-600 leading-relaxed">{group.description}</p>
            </div>
          ))}
        </div>

        {/* Special Groups */}
        <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-10 shadow-xl border-2 border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Besonders wertvoll für:
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {specialGroups.map((group, index) => (
              <div key={index} className="bg-white/95 backdrop-blur rounded-xl p-6 text-center hover:bg-white transition-colors">
                {/* Icon at top */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#ff6b35] to-[#e55a2b] rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <i className={`fas ${group.icon} text-white text-2xl`}></i>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{group.title}</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{group.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}