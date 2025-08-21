'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function HeroSection() {
  const router = useRouter()

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Wo steht Ihr Kind wirklich?
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Professionelle Standortbestimmung für Kinder vom Kindergarten bis zur 9. Klasse (4-15 Jahre)
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Sie sind Eltern eines schulpflichtigen Kindes? Egal ob Sie Schweizer sind, neu zugezogen oder als Expat hier leben - 
              unsere detaillierte Standortbestimmung zeigt Ihnen genau, wo Ihr Kind im Schweizer Schulsystem steht 
              und wie Sie es optimal fördern können.
            </p>
            
            <button 
              onClick={() => router.push('/standortbestimmung-anfragen')}
              className="inline-flex items-center gap-3 bg-[#ff6b35] text-white px-8 py-4 rounded-lg hover:bg-[#e55a2b] transition-colors font-semibold text-lg shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-4 12v-4m0 0a2 2 0 00-2-2H8a2 2 0 00-2 2v4h8z" />
              </svg>
              Jetzt Standortbestimmung starten
            </button>
            
            {/* Feature Points */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#ff6b35] rounded-full"></div>
                Stressfrei daheim
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#ff6b35] rounded-full"></div>
                1:1 Expertengespräch
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#ff6b35] rounded-full"></div>
                Klare Handlungsempfehlungen
              </span>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/hero-standortbestimmung.jpg" 
                alt="Standortbestimmung Schweiz" 
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#ff6b35] rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-200 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  )
}