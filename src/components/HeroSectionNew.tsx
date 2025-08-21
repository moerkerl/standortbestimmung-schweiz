'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function HeroSectionNew() {
  const router = useRouter()

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Wo steht Ihr Kind wirklich?</h1>
            <p className="hero-subtitle">
              Professionelle Standortbestimmung für Kinder vom Kindergarten bis zur 9. Klasse (4-15 Jahre)
            </p>
            <p className="hero-description">
              Sie sind Eltern eines schulpflichtigen Kindes? Egal ob Sie Schweizer sind, neu zugezogen oder als Expat hier leben - 
              unsere detaillierte Standortbestimmung zeigt Ihnen genau, wo Ihr Kind im Schweizer Schulsystem steht 
              und wie Sie es optimal fördern können.
            </p>
            
            <button 
              onClick={() => router.push('/kontakt')}
              className="main-cta"
            >
              <i className="fas fa-calendar-alt"></i>
              Jetzt Standortbestimmung starten
            </button>
            
            <div className="hero-features-minimal">
              <span className="feature-text">Stressfrei daheim</span>
              <span className="feature-dot">•</span>
              <span className="feature-text">1:1 Expertengespräch</span>
              <span className="feature-dot">•</span>
              <span className="feature-text">Klare Handlungsempfehlungen</span>
            </div>
          </div>
          
          <div className="hero-visual">
            <Image 
              src="/images/hero-standortbestimmung.jpg" 
              alt="Standortbestimmung Schweiz" 
              width={550}
              height={400}
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}