'use client'

export default function TeamSectionEnhanced() {
  const teamMembers = [
    {
      name: "Nicole Benjamin",
      role: "Expertin Primarstufe",
      image: "/images/team-nicole.jpg",
      specialization: "Kindergarten bis 6. Klasse",
      experience: "15+ Jahre Erfahrung",
      qualifications: [
        "MSc Entwicklungspsychologie",
        "Zertifizierte Lerntherapeutin",
        "Spezialistin für Lerndiagnostik"
      ],
      description: "Nicole ist unsere Spezialistin für jüngere Kinder. Mit ihrer einfühlsamen Art schafft sie eine vertrauensvolle Atmosphäre, in der Kinder ihr volles Potenzial zeigen können."
    },
    {
      name: "Nadja Ritter",
      role: "Expertin Sekundarstufe",
      image: "/images/team-nadja.jpg",
      specialization: "7. bis 9. Klasse",
      experience: "12+ Jahre Erfahrung",
      qualifications: [
        "MA Bildungswissenschaften",
        "Gymnasiallehrerin",
        "Berufsberaterin SDBB"
      ],
      description: "Nadja begleitet Jugendliche in der wichtigen Phase der Berufswahl und des Schulübertritts. Sie kennt die Anforderungen aller weiterführenden Schulen."
    }
  ]

  return (
    <section className="team-section-enhanced">
      <div className="container">
        <h2>Unsere Expertinnen</h2>
        <p className="team-subtitle">
          Erfahrene Pädagoginnen mit Leidenschaft für individuelle Förderung
        </p>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image-wrapper">
                <div className="team-image-placeholder">
                  <i className={`fas ${index === 0 ? "fa-user-graduate" : "fa-user-tie"}`}></i>
                </div>
                <div className="experience-badge">
                  {member.experience}
                </div>
              </div>
              
              <div className="team-content">
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-specialization">
                  <i className="fas fa-graduation-cap"></i>
                  {member.specialization}
                </p>
                
                <p className="team-description">{member.description}</p>
                
                <div className="qualifications">
                  <h4>Qualifikationen:</h4>
                  <ul>
                    {member.qualifications.map((qual, i) => (
                      <li key={i}>
                        <i className="fas fa-check-circle"></i>
                        {qual}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="team-cta">
                  <button className="team-button">
                    <i className="fas fa-calendar"></i>
                    Beratung mit {member.name.split(" ")[0]} vereinbaren
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="team-philosophy">
          <h3>Unsere Philosophie</h3>
          <p>
            &quot;Jedes Kind hat einzigartige Stärken und Talente. Unsere Aufgabe ist es, diese zu erkennen 
            und den optimalen Weg zur Entfaltung aufzuzeigen.&quot;
          </p>
          <div className="philosophy-features">
            <div className="philosophy-item">
              <i className="fas fa-heart"></i>
              <span>Empathisch</span>
            </div>
            <div className="philosophy-item">
              <i className="fas fa-microscope"></i>
              <span>Wissenschaftlich</span>
            </div>
            <div className="philosophy-item">
              <i className="fas fa-bullseye"></i>
              <span>Zielorientiert</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}