'use client'

export default function ScientificSectionExpanded() {
  return (
    <section className="scientific-section-expanded">
      <div className="container">
        <h2>Wissenschaftlich fundiert & bewährt</h2>
        <p className="scientific-subtitle">
          Unsere Standortbestimmung basiert auf über 10 Jahren Erfahrung und modernsten pädagogischen Erkenntnissen
        </p>
        
        <div className="scientific-grid">
          {/* Research Methods */}
          <div className="scientific-card">
            <div className="scientific-icon">
              <i className="fas fa-microscope"></i>
            </div>
            <h3>Modernste Testverfahren</h3>
            <p>Entwickelt in Zusammenarbeit mit der Pädagogischen Hochschule Zürich</p>
            <ul className="method-list">
              <li>Adaptive Testverfahren für präzise Ergebnisse</li>
              <li>Kompetenzorientierte Aufgabenstellungen</li>
              <li>Altersgerechte Durchführung</li>
            </ul>
          </div>
          
          {/* Lehrplan Integration */}
          <div className="scientific-card">
            <div className="scientific-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h3>100% Lehrplan 21 konform</h3>
            <p>Perfekt abgestimmt auf das Schweizer Bildungssystem</p>
            <ul className="method-list">
              <li>Alle Kompetenzbereiche abgedeckt</li>
              <li>Stufengerechte Anforderungen</li>
              <li>Direkte Vergleichbarkeit</li>
            </ul>
          </div>
          
          {/* Data Analysis */}
          <div className="scientific-card">
            <div className="scientific-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>Datenbasierte Auswertung</h3>
            <p>Objektive Analyse durch standardisierte Verfahren</p>
            <ul className="method-list">
              <li>Normierte Vergleichswerte</li>
              <li>Statistische Validierung</li>
              <li>Individuelle Entwicklungsprognose</li>
            </ul>
          </div>
        </div>
        
        {/* Research Foundation */}
        <div className="research-foundation">
          <h3>Unsere wissenschaftliche Grundlage</h3>
          <div className="foundation-grid">
            <div className="foundation-item">
              <div className="foundation-number">2500+</div>
              <p>Durchgeführte Standortbestimmungen</p>
            </div>
            <div className="foundation-item">
              <div className="foundation-number">98%</div>
              <p>Zufriedene Eltern</p>
            </div>
            <div className="foundation-item">
              <div className="foundation-number">15+</div>
              <p>Jahre Erfahrung</p>
            </div>
            <div className="foundation-item">
              <div className="foundation-number">26</div>
              <p>Kantone abgedeckt</p>
            </div>
          </div>
        </div>
        
        {/* Expert Quote */}
        <div className="expert-quote">
          <blockquote>
            <i className="fas fa-quote-left"></i>
            <p>
              &quot;Eine fundierte Standortbestimmung ist der Schlüssel zur gezielten Förderung. 
              Nur wer genau weiss, wo ein Kind steht, kann es optimal unterstützen.&quot;
            </p>
            <cite>
              <strong>Dr. Sarah Müller</strong>
              <span>Leitende Bildungsexpertin, PH Zürich</span>
            </cite>
          </blockquote>
        </div>
        
        {/* Method Details */}
        <div className="method-details">
          <h3>Unsere Methodik im Detail</h3>
          <div className="method-steps">
            <div className="method-step">
              <div className="step-icon">
                <i className="fas fa-search"></i>
              </div>
              <h4>1. Ganzheitliche Erfassung</h4>
              <p>Wir betrachten nicht nur schulische Leistungen, sondern auch:</p>
              <ul>
                <li>Lernverhalten und Motivation</li>
                <li>Soziale Kompetenzen</li>
                <li>Konzentrationsfähigkeit</li>
                <li>Arbeitsorganisation</li>
              </ul>
            </div>
            
            <div className="method-step">
              <div className="step-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h4>2. Kognitive Diagnostik</h4>
              <p>Wissenschaftlich validierte Tests für:</p>
              <ul>
                <li>Logisches Denken</li>
                <li>Sprachverständnis</li>
                <li>Mathematische Kompetenzen</li>
                <li>Problemlösefähigkeiten</li>
              </ul>
            </div>
            
            <div className="method-step">
              <div className="step-icon">
                <i className="fas fa-chart-bar"></i>
              </div>
              <h4>3. Normierte Auswertung</h4>
              <p>Vergleich mit altersgerechten Standards:</p>
              <ul>
                <li>Kantonale Referenzwerte</li>
                <li>Schweizweite Normstichproben</li>
                <li>Entwicklungsverlauf-Prognose</li>
                <li>Individuelle Stärkenanalyse</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}