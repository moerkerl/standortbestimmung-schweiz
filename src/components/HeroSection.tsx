'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function HeroSection() {
  const router = useRouter()

  return (
    <section className="relative pt-32 pb-24 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-orange-50/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6 leading-tight">
              Wo steht Ihr Kind wirklich?
            </h1>
            <p className="text-xl text-[#ff6b35] font-bold mb-6">
              Professionelle Standortbestimmung für Kinder vom Kindergarten bis zur 9. Klasse (4-15 Jahre)
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Sie sind Eltern eines schulpflichtigen Kindes? Egal ob Sie Schweizer sind, neu zugezogen oder als Expat hier leben - 
              unsere detaillierte Standortbestimmung zeigt Ihnen genau, wo Ihr Kind im Schweizer Schulsystem steht 
              und wie Sie es optimal fördern können.
            </p>
            
            <button 
              onClick={() => router.push('/standortbestimmung-anfragen')}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#ff6b35] to-[#e55a2b] text-white px-8 py-4 rounded-[50px] hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold text-lg shadow-lg"
            >
              <i className="fas fa-calendar-alt"></i>
              Jetzt Standortbestimmung starten
            </button>
            
            {/* Feature Points */}
            <div className="flex flex-wrap gap-4 mt-8 text-sm text-gray-600">
              <span>✓ Stressfrei daheim</span>
              <span className="text-[#ff6b35]">•</span>
              <span>✓ 1:1 Expertengespräch</span>
              <span className="text-[#ff6b35]">•</span>
              <span>✓ Klare Handlungsempfehlungen</span>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#ff6b35]/20 to-[#e55a2b]/20 rounded-3xl blur-3xl"></div>
            <Image 
              src="/images/hero-standortbestimmung.jpg" 
              alt="Standortbestimmung Schweiz" 
              width={600}
              height={450}
              className="relative w-full h-auto rounded-2xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}