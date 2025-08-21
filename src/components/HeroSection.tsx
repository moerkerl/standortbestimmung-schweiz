'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function HeroSection() {
  const router = useRouter()

  return (
    <section className="hero pt-32 pb-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hero-content grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="hero-text">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Wo steht Ihr Kind wirklich?
            </h1>
            <p className="hero-subtitle text-xl text-[#ff6b35] font-semibold mb-6">
              Professionelle Standortbestimmung für Kinder vom Kindergarten bis zur 9. Klasse (4-15 Jahre)
            </p>
            <p className="hero-description text-lg text-gray-600 mb-8 leading-relaxed">
              Sie sind Eltern eines schulpflichtigen Kindes? Egal ob Sie Schweizer sind, neu zugezogen oder als Expat hier leben - 
              unsere detaillierte Standortbestimmung zeigt Ihnen genau, wo Ihr Kind im Schweizer Schulsystem steht 
              und wie Sie es optimal fördern können.
            </p>
            
            <button 
              onClick={() => router.push('/kontakt.html')}
              className="main-cta inline-flex items-center gap-3 bg-gradient-to-r from-[#ff6b35] to-[#e55a2b] text-white px-8 py-4 rounded-full hover:shadow-lg hover:transform hover:-translate-y-1 transition-all font-semibold text-lg shadow-md"
            >
              <i className="fas fa-calendar-alt"></i>
              Jetzt Standortbestimmung starten
            </button>
            
            {/* Feature Points */}
            <div className="hero-features-minimal flex flex-wrap gap-4 mt-8 text-sm text-gray-600">
              <span className="feature-text">Stressfrei daheim</span>
              <span className="feature-dot text-[#ff6b35]">•</span>
              <span className="feature-text">1:1 Expertengespräch</span>
              <span className="feature-dot text-[#ff6b35]">•</span>
              <span className="feature-text">Klare Handlungsempfehlungen</span>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="hero-visual relative">
            <Image 
              src="/images/hero-standortbestimmung.jpg" 
              alt="Standortbestimmung Schweiz" 
              width={550}
              height={400}
              className="hero-image w-full max-w-[550px] h-auto rounded-2xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}