export default function TargetAudienceSection() {
  const ageGroups = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a2.5 2.5 0 010 5H9m0-5V5a2 2 0 012-2h6a2 2 0 012 2v7c0 1.1-.9 2-2 2h-6.5M9 10V4a2 2 0 012-2h6a2 2 0 012 2v6c0 1.1-.9 2-2 2h-1M9 10V2a2 2 0 012-2h6a2 2 0 012 2v6c0 1.1-.9 2-2 2h-1" />
        </svg>
      ),
      title: "Kindergarten - 2. Klasse",
      age: "4-8 Jahre",
      description: "Früherkennung von Stärken und Entwicklungsbereichen für einen optimalen Schulstart"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "3. - 6. Klasse",
      age: "9-12 Jahre",
      description: "Vorbereitung auf den wichtigen Übertritt in die Sekundarstufe"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      title: "7. - 9. Klasse",
      age: "13-15 Jahre", 
      description: "Orientierung für Gymnasium, Berufslehre oder weiterführende Schulen"
    }
  ]

  const specialGroups = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Internationale Familien & Expats",
      description: "Verstehen Sie das Schweizer Schulsystem und finden Sie die richtige Einstufung für Ihr Kind"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      title: "Bei Schulwechsel oder Umzug",
      description: "Sichern Sie einen nahtlosen Übergang und die richtige Klasseneinstufung"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Bei Leistungsschwankungen",
      description: "Erkennen Sie frühzeitig Förderbedarf und nutzen Sie das volle Potenzial Ihres Kindes"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Für wen ist unsere Standortbestimmung?
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Wir unterstützen alle Eltern mit Kindern die bereits im Schweizer Schulsystem sind oder erst noch ins Schweizer Schulsystem eintreten werden
          </p>
        </div>

        {/* Age Groups */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {ageGroups.map((group, index) => (
            <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#ff6b35] rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                {group.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{group.title}</h3>
              <p className="text-[#ff6b35] font-semibold mb-4">{group.age}</p>
              <p className="text-gray-700 leading-relaxed">{group.description}</p>
            </div>
          ))}
        </div>

        {/* Special Groups */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Besonders wertvoll für:
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {specialGroups.map((group, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#ff6b35] rounded-full flex items-center justify-center text-white">
                  {group.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{group.title}</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{group.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}