export default function TrustBar() {
  const trustItems = [
    {
      icon: 'fa-graduation-cap',
      text: "15'000+ Nachhilfelektionen - Bewährte Expertise seit 2020"
    },
    {
      icon: 'fa-book',
      text: "1'000+ Schüler erfolgreich begleitet - Mit nachweislichem Erfolg"
    },
    {
      icon: 'fa-map-marked-alt',
      text: "Deutschschweiz-weit tätig - In 20 Kantonen vertreten"
    },
    {
      icon: 'fa-chalkboard-teacher',
      text: "3'000 geprüfte Lehrpersonen - Mit Hochschulabschluss"
    }
  ]

  return (
    <section className="trust-bar py-8 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="trust-items grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <div key={index} className="trust-item flex items-center gap-4">
              <i className={`fas ${item.icon} text-[#ff6b35] text-xl`}></i>
              <span className="text-sm text-gray-700">
                <strong>{item.text.split(' - ')[0]}</strong>
                {item.text.includes(' - ') && (
                  <span className="text-gray-600"> - {item.text.split(' - ')[1]}</span>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}