'use client'

import { useRouter } from 'next/navigation'

export default function ThreeStepPackages() {
  const router = useRouter()
  
  return (
    <section className="three-step-section">
      <div className="container">
        <h2>Ihr Weg zum Schulerfolg</h2>
        <p className="three-step-subtitle">Drei aufeinander aufbauende Stufen - Sie bestimmen das Tempo</p>
        
        <div className="three-step-grid">
          {/* Step 1 */}
          <div 
            className="three-step-card"
            style={{ cursor: 'pointer' }}
            onClick={() => router.push('#prozess')}
          >
            <div className="package-type">Stufe 1</div>
            <div className="step-badge">1</div>
            <div className="step-label">
              <i className="fas fa-microscope"></i>
              <span>Analyse</span>
            </div>
            <h3>Standortbestimmung</h3>
            <p>Der wichtigste erste Schritt: Wir analysieren präzise, wo Ihr Kind steht und was es braucht.</p>
            
            <ul className="included-items">
              <li><i className="fas fa-check-circle"></i> Lehrplan-basierter Test</li>
              <li><i className="fas fa-check-circle"></i> 1:1 Expertengespräch</li>
              <li><i className="fas fa-check-circle"></i> Ausführlicher Ergebnisbericht</li>
            </ul>
            
            <div className="step-feature">
              <i className="fas fa-file-alt"></i>
              <span>Ihr Ergebnis: Klarheit über den Lernstand</span>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="three-step-card">
            <div className="package-type">Stufe 2</div>
            <div className="step-badge">2</div>
            <div className="step-label">
              <i className="fas fa-compass"></i>
              <span>Analyse + Strategie</span>
            </div>
            <h3>Standortbestimmung <span style={{ color: '#ff6b35' }}>PLUS</span></h3>
            <p>Nicht nur wissen wo Ihr Kind steht, sondern auch wie es vorankommt - mit klarem Plan.</p>
            
            <div className="plus-concept">
              <i className="fas fa-plus-circle"></i>
              <span>Alles aus Stufe 1, zusätzlich:</span>
            </div>
            
            <ul className="included-items">
              <li><i className="fas fa-plus" style={{ color: '#ff6b35' }}></i> Individueller Lernplan</li>
              <li><i className="fas fa-plus" style={{ color: '#ff6b35' }}></i> Wochenziele & Meilensteine</li>
              <li><i className="fas fa-plus" style={{ color: '#ff6b35' }}></i> Methoden-Empfehlungen</li>
            </ul>
            
            <div className="step-feature">
              <i className="fas fa-map"></i>
              <span>Ihr Vorteil: Klarer Weg zum Ziel</span>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="three-step-card">
            <div className="package-type">Stufe 3</div>
            <div className="step-badge">3</div>
            <div className="step-label">
              <i className="fas fa-hands-helping"></i>
              <span>Komplettlösung</span>
            </div>
            <h3>Standortbestimmung <span style={{ color: '#ff6b35' }}>KOMPLETT</span></h3>
            <p>Die Rundum-Lösung: Wir begleiten Sie von der Analyse bis zum nachhaltigen Erfolg.</p>
            
            <div className="plus-concept">
              <i className="fas fa-plus-circle"></i>
              <span>Alles aus Stufe 1 & 2, zusätzlich:</span>
            </div>
            
            <ul className="included-items">
              <li><i className="fas fa-star" style={{ color: '#ffd700' }}></i> Passende Nachhilfe-Lehrkraft</li>
              <li><i className="fas fa-star" style={{ color: '#ffd700' }}></i> Regelmässige Lernbegleitung</li>
              <li><i className="fas fa-star" style={{ color: '#ffd700' }}></i> Fortschrittskontrolle</li>
            </ul>
            
            <div className="step-feature">
              <i className="fas fa-trophy"></i>
              <span>Ihr Erfolg: Nachhaltige Verbesserung</span>
            </div>
          </div>
        </div>
        
        <div className="three-step-cta">
          <button 
            onClick={() => router.push('/kontakt')}
            className="main-cta large"
          >
            <i className="fas fa-rocket"></i>
            Mit Stufe 1 starten
          </button>
        </div>
      </div>
    </section>
  )
}