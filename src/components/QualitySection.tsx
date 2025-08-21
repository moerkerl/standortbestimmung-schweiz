'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function QualitySection() {
  const [selectedTest, setSelectedTest] = useState<'deutsch12' | 'mathe12' | 'mathe5'>('deutsch12')
  
  const testExamples = {
    deutsch12: {
      title: 'Deutsch 1./2. Klasse',
      image: '/images/schreibauftrag 1.+2. klasse Deutsch.jpg',
      alt: 'Schreibauftrag Deutsch 1./2. Klasse'
    },
    mathe12: {
      title: 'Mathe 1./2. Klasse',
      image: '/images/mathe 1+2. klasse übung.jpg',
      alt: 'Mathematik Übung 1./2. Klasse'
    },
    mathe5: {
      title: 'Mathe 5. Klasse',
      image: '/images/mathe 5. klasse übung.jpg',
      alt: 'Mathematik Übung 5. Klasse'
    }
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          Der entscheidende Qualitätsunterschied
        </h2>
        <p className="text-lg text-gray-600 text-center mb-16">
          Warum unsere Lehrplan-Treue den Unterschied macht
        </p>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <div className="bg-[#ff6b35] text-white px-4 py-2 rounded-full inline-flex items-center gap-2 mb-6">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span className="font-medium">Schweizer Präzision in der Bildungsanalyse</span>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Von der Kompetenz zur konkreten Aufgabe
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Unsere Tests basieren auf einem einzigartigen Prinzip:{' '}
              <strong>Jede einzelne Aufgabe wird direkt aus spezifischen Lehrplan-Kompetenzen abgeleitet.</strong>
            </p>
            
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gray-900">So entsteht eine einzige Testaufgabe bei uns:</h4>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#ff6b35] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Kompetenz-Analyse</h5>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Aus allen Lehrplan-Kompetenzen wählen wir die wichtigsten und aussagekräftigsten aus. 
                      Zum Beispiel nehmen wir eine spezifische Kompetenz wie{' '}
                      <code className="bg-gray-100 px-2 py-1 rounded text-[#ff6b35] font-mono">MA.1.C.2.i</code>{' '}
                      aus dem Zürcher Lehrplan
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#ff6b35] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Aufgaben-Design</h5>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Entwicklung mehrerer Aufgabenvarianten, die exakt diese Kompetenz prüfen - nicht mehr, nicht weniger
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#ff6b35] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Kalibrierung</h5>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Unsere erfahrenen Pädagoginnen prüfen jede Aufgabe von Hand auf Schwierigkeitsgrad und Eignung. 
                      Mit jahrelanger Unterrichtserfahrung stellen wir sicher, dass jede Aufgabe sinnvoll die gewünschte Kompetenz testet
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Test Examples */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Beispiele unserer Tests</h4>
              <div className="flex justify-center gap-2 mb-6">
                <button 
                  onClick={() => setSelectedTest('deutsch12')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    selectedTest === 'deutsch12' 
                      ? 'bg-[#ff6b35] text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Deutsch 1./2. Klasse
                </button>
                <button 
                  onClick={() => setSelectedTest('mathe12')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    selectedTest === 'mathe12' 
                      ? 'bg-[#ff6b35] text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Mathe 1./2. Klasse
                </button>
                <button 
                  onClick={() => setSelectedTest('mathe5')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    selectedTest === 'mathe5' 
                      ? 'bg-[#ff6b35] text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Mathe 5. Klasse
                </button>
              </div>
            </div>
            
            {/* iPad Frame */}
            <div className="relative mx-auto max-w-md">
              <div className="bg-gray-900 rounded-3xl p-4 shadow-2xl">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <Image 
                    src={testExamples[selectedTest].image} 
                    alt={testExamples[selectedTest].alt} 
                    width={400}
                    height={256}
                    className={`w-full h-64 ${
                      selectedTest === 'mathe5' ? 'object-contain bg-white' : 'object-cover'
                    }`}
                  />
                </div>
              </div>
            </div>
            
            <p className="text-center text-gray-600 text-sm mt-4">
              Beispiele unserer lehrplanbasierten Testaufgaben - direkt aus der Praxis
            </p>
          </div>
        </div>
        
        {/* Unique Value Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-100 to-orange-50 rounded-3xl p-12 relative overflow-hidden">
          {/* Background Icon */}
          <div className="absolute top-0 right-0 text-9xl text-[#ff6b35] opacity-10 transform rotate-12 -mr-8 -mt-4">
            🏆
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-[#ff6b35] mb-4">Das macht uns einzigartig</h3>
              <p className="text-xl text-orange-900 leading-relaxed max-w-4xl mx-auto">
                Sie erhalten keine generische Auswertung, sondern eine{' '}
                <strong>präzise Landkarte der Fähigkeiten Ihres Kindes</strong> - 
                direkt gespiegelt an dem, was in der Schule wirklich zählt.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-[#ff6b35] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Punktgenaue Diagnose</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Sie erfahren nicht nur &quot;Mathe ist schwach&quot;, sondern exakt: &quot;Algebraisches Denken bei Variablen noch nicht gefestigt&quot;
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-[#ff6b35] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Direkt umsetzbare Förderung</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Die Lehrperson kann mit unseren Lehrplan-Codes sofort die richtigen Übungen finden
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-[#ff6b35] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Vergleichbarkeit</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Die Resultate sind 1:1 mit schulischen Anforderungen vergleichbar - keine abstrakten Punktzahlen
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}