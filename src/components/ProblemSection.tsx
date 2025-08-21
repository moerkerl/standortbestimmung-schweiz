'use client'

export default function ProblemSection() {
  return (
    <section className="problem-section">
      <div className="container">
        <h2>Kennen Sie das?</h2>
        <p className="problem-subtitle">Diese Fragen und Unsicherheiten begleiten viele Eltern täglich</p>
        
        <div className="problem-grid">
          <div className="problem-card">
            <div className="problem-icon">
              <i className="fas fa-question-circle"></i>
            </div>
            <h3>Unsicherheit beim Lernstand</h3>
            <p>&quot;Ich weiss nicht genau, wo mein Kind im Vergleich zu den Anforderungen des Lehrplans steht&quot;</p>
            <div className="problem-impact">
              <i className="fas fa-exclamation-triangle"></i>
              <span>Führt zu: Verpassen wichtiger Förderzeitfenster</span>
            </div>
          </div>
          
          <div className="problem-card">
            <div className="problem-icon">
              <i className="fas fa-book-open"></i>
            </div>
            <h3>Hausaufgaben-Stress</h3>
            <p>&quot;Die Hausaufgaben werden täglich zum Kampf - ich weiss nicht mehr, wie ich helfen soll&quot;</p>
            <div className="problem-impact">
              <i className="fas fa-exclamation-triangle"></i>
              <span>Führt zu: Familienkonflikt und Lernfrust</span>
            </div>
          </div>
          
          <div className="problem-card">
            <div className="problem-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>Plötzlicher Leistungsabfall</h3>
            <p>&quot;Die Noten sind plötzlich schlechter geworden, aber ich verstehe nicht warum&quot;</p>
            <div className="problem-impact">
              <i className="fas fa-exclamation-triangle"></i>
              <span>Führt zu: Motivationsverlust und Schulangst</span>
            </div>
          </div>
          
          <div className="problem-card">
            <div className="problem-icon">
              <i className="fas fa-school"></i>
            </div>
            <h3>Schweizer Schulsystem</h3>
            <p>&quot;Als Expat oder Neuzuzüger verstehe ich das Schweizer Bildungssystem nicht richtig&quot;</p>
            <div className="problem-impact">
              <i className="fas fa-exclamation-triangle"></i>
              <span>Führt zu: Fehlentscheidungen bei der Schulwahl</span>
            </div>
          </div>
          
          <div className="problem-card">
            <div className="problem-icon">
              <i className="fas fa-user-graduate"></i>
            </div>
            <h3>Zukunftssorgen</h3>
            <p>&quot;Ich mache mir Sorgen, ob mein Kind für den Übertritt ins Gymnasium bereit ist&quot;</p>
            <div className="problem-impact">
              <i className="fas fa-exclamation-triangle"></i>
              <span>Führt zu: Druck und unrealistische Erwartungen</span>
            </div>
          </div>
          
          <div className="problem-card">
            <div className="problem-icon">
              <i className="fas fa-brain"></i>
            </div>
            <h3>Versteckte Talente</h3>
            <p>&quot;Ich spüre, dass mein Kind mehr kann, aber weiss nicht, wie ich es fördern soll&quot;</p>
            <div className="problem-impact">
              <i className="fas fa-exclamation-triangle"></i>
              <span>Führt zu: Ungenutztes Potenzial</span>
            </div>
          </div>
        </div>
        
        <div className="problem-solution">
          <div className="solution-box">
            <h3>Die Lösung: Eine professionelle Standortbestimmung</h3>
            <p>Beenden Sie die Unsicherheit und schaffen Sie Klarheit über den Lernstand Ihres Kindes</p>
            <div className="solution-benefits">
              <div className="benefit">
                <i className="fas fa-check-circle"></i>
                <span>Objektive Einschätzung durch Experten</span>
              </div>
              <div className="benefit">
                <i className="fas fa-check-circle"></i>
                <span>Klare Handlungsempfehlungen</span>
              </div>
              <div className="benefit">
                <i className="fas fa-check-circle"></i>
                <span>Individueller Förderplan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}