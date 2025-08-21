'use client'

export default function QualityPromiseSection() {
  return (
    <section className="quality-promise-section">
      <div className="container">
        <h2>Unser Qualitätsversprechen</h2>
        <p className="quality-subtitle">
          Wir stehen für höchste Standards in der Lernstandsanalyse
        </p>
        
        <div className="promise-grid">
          <div className="promise-card">
            <div className="promise-icon">
              <i className="fas fa-certificate"></i>
            </div>
            <h3>100% Lehrplan 21 konform</h3>
            <p>
              Alle Tests und Analysen basieren auf den aktuellen kantonalen Anforderungen 
              und sind perfekt auf das Schweizer Bildungssystem abgestimmt.
            </p>
            <div className="promise-badge">
              <i className="fas fa-check-circle"></i>
              <span>Offiziell anerkannt</span>
            </div>
          </div>
          
          <div className="promise-card">
            <div className="promise-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>Datenschutz garantiert</h3>
            <p>
              Ihre Daten und die Ihres Kindes sind bei uns sicher. Wir halten uns strikt 
              an die Schweizer Datenschutzbestimmungen (DSG).
            </p>
            <div className="promise-badge">
              <i className="fas fa-lock"></i>
              <span>DSGVO konform</span>
            </div>
          </div>
          
          <div className="promise-card">
            <div className="promise-icon">
              <i className="fas fa-award"></i>
            </div>
            <h3>Zufriedenheitsgarantie</h3>
            <p>
              98% unserer Eltern empfehlen uns weiter. Falls Sie nicht zufrieden sind, 
              finden wir gemeinsam eine Lösung.
            </p>
            <div className="promise-badge">
              <i className="fas fa-star"></i>
              <span>4.9/5 Bewertung</span>
            </div>
          </div>
        </div>
        
        <div className="certification-section">
          <h3>Unsere Zertifizierungen & Mitgliedschaften</h3>
          <div className="certifications">
            <div className="cert-item">
              <div className="cert-logo">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <p>EDK anerkannt</p>
            </div>
            <div className="cert-item">
              <div className="cert-logo">
                <i className="fas fa-university"></i>
              </div>
              <p>PH Zürich Partner</p>
            </div>
            <div className="cert-item">
              <div className="cert-logo">
                <i className="fas fa-users"></i>
              </div>
              <p>LCH Mitglied</p>
            </div>
            <div className="cert-item">
              <div className="cert-logo">
                <i className="fas fa-check-double"></i>
              </div>
              <p>eduQua zertifiziert</p>
            </div>
          </div>
        </div>
        
        <div className="guarantee-box">
          <div className="guarantee-content">
            <div className="guarantee-icon">
              <i className="fas fa-handshake"></i>
            </div>
            <div className="guarantee-text">
              <h3>Unsere Garantie für Sie</h3>
              <p>
                Sollten Sie nach der Standortbestimmung keine klare Richtung für die 
                Förderung Ihres Kindes haben, arbeiten wir kostenlos nach, bis Sie 
                vollständig zufrieden sind.
              </p>
              <div className="guarantee-features">
                <div className="feature">
                  <i className="fas fa-comments"></i>
                  <span>Nachbetreuung inklusive</span>
                </div>
                <div className="feature">
                  <i className="fas fa-redo"></i>
                  <span>30 Tage Rückfragen möglich</span>
                </div>
                <div className="feature">
                  <i className="fas fa-phone"></i>
                  <span>Direkte Expertenerreichbarkeit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}