'use client'

import { useRouter } from 'next/navigation'
import LPHero from '@/components/LPHero'
import LPBenefits from '@/components/LPBenefits'
import LPSection from '@/components/LPSection'
import LPSteps from '@/components/LPSteps'
import LPTestimonial from '@/components/LPTestimonial'
import LPOffers from '@/components/LPOffers'
import AnimatedText from '@/components/AnimatedText'

interface LandingPageClientProps {
  benefits: Array<{
    icon: string
    title: string
    description: string
  }>
  steps: Array<{
    number: number
    title: string
    description: string
  }>
  testimonials: Array<{
    name: string
    text: string
    rating: number
  }>
  offers: Array<{
    icon: string
    title: string
    description: string
  }>
}

export default function LandingPageClient({ benefits, steps, testimonials, offers }: LandingPageClientProps) {
  const router = useRouter()

  return (
    <>
      {/* Hero Section */}
      <LPHero
        title={
          <>
            <span className="inline-block">Professionelle</span>{' '}
            <span className="inline-block">
              <AnimatedText text="Standortbestimmung" />
            </span>{' '}
            <span className="inline-block">für Schweizer Schüler</span>
          </>
        }
        subtitle="Wissenschaftlich fundierte Lernstandsanalyse nach Lehrplan 21 - Klarheit für die Zukunft Ihres Kindes"
        buttonText="Jetzt Standortbestimmung anfragen"
        imageSrc="/images/hero-standortbestimmung.jpg"
        imageAlt="Professionelle Standortbestimmung für Schweizer Schüler"
      />

      {/* Benefits */}
      <LPBenefits benefits={benefits} />

      {/* Problem Section */}
      <LPSection
        title="Unsicherheit über den Lernstand?"
        content=""
        bulletPoints={[
          'Wo steht mein Kind wirklich?',
          'Welche Wissenslücken bestehen?',
          'Ist mein Kind auf dem richtigen Weg?',
          'Was muss gefördert werden?'
        ]}
        buttonText="Jetzt Standortbestimmung anfragen"
        imageSrc="/fuenftklaessler-mathe-niedergeschlagen-frust-schreibtisch-alleine-mathe-helden.jpg"
        imageAlt="Schüler mit Unsicherheit über den Lernstand"
        imagePosition="left"
        backgroundColor="gray"
      />

      {/* Solution Section - Custom Layout */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Title, Subtitle, Button */}
            <div className="space-y-6">
              <p className="text-[#ff6b35] font-semibold uppercase tracking-wide text-sm">
                Klarheit schaffen
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Wissenschaftlich fundierte Analyse für optimale Förderung
              </h2>
              <p className="text-lg text-gray-600">
                Unsere Standortbestimmung basiert auf dem Lehrplan 21 und gibt Ihnen präzise Einblicke in den Lernstand Ihres Kindes.
              </p>
              <button 
                onClick={() => router.push('/standortbestimmung-anfragen')}
                className="bg-[#ff6b35] text-white px-8 py-4 rounded-lg hover:bg-[#e55a2b] transition-colors font-semibold shadow-lg cursor-pointer"
              >
                Jetzt Standortbestimmung anfragen
              </button>
            </div>

            {/* Right Column - Bullet Points with Graphic */}
            <div className="relative">
              {/* Background Graphic */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <svg className="w-full h-full max-w-md" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="200" cy="200" r="180" stroke="#ff6b35" strokeWidth="2" strokeDasharray="10 10" />
                  <circle cx="200" cy="200" r="140" stroke="#ff6b35" strokeWidth="2" strokeDasharray="8 8" />
                  <circle cx="200" cy="200" r="100" stroke="#ff6b35" strokeWidth="2" strokeDasharray="6 6" />
                  <path d="M200 80 L250 150 L230 230 L170 230 L150 150 Z" stroke="#ff6b35" strokeWidth="2" fill="none" />
                  <circle cx="200" cy="80" r="10" fill="#ff6b35" />
                  <circle cx="250" cy="150" r="10" fill="#ff6b35" />
                  <circle cx="230" cy="230" r="10" fill="#ff6b35" />
                  <circle cx="170" cy="230" r="10" fill="#ff6b35" />
                  <circle cx="150" cy="150" r="10" fill="#ff6b35" />
                </svg>
              </div>

              {/* Bullet Points Card */}
              <div className="relative bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl border border-blue-100">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#ff6b35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Präzise</p>
                      <h3 className="font-semibold text-gray-900">Lernstand analysieren</h3>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#ff6b35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Konkrete</p>
                      <h3 className="font-semibold text-gray-900">Förderempfehlungen erhalten</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Steps */}
      <LPSteps
        title="In 3 Schritten zur professionellen Standortbestimmung"
        steps={steps}
        ctaText="Jetzt Standortbestimmung anfragen"
      />

      {/* Testimonials */}
      <LPTestimonial
        title="Was andere Eltern über unsere Standortbestimmung sagen"
        testimonials={testimonials}
      />

      {/* Offers */}
      <LPOffers
        title="Unsere drei Stufen der Standortbestimmung"
        offers={offers}
      />

      {/* Final CTA Section - Custom Layout */}
      <section className="py-20 lg:py-24 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Schaffen Sie Klarheit für die Zukunft Ihres Kindes
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 text-left">
              <p>
                Eine professionelle Standortbestimmung ist der erste Schritt zu gezielter Förderung und schulischem Erfolg. Ohne zu wissen, wo Ihr Kind steht, können auch die besten Absichten ins Leere laufen.
              </p>
              
              <p>
                Unsere wissenschaftlich fundierte Analyse nach Lehrplan 21 gibt Ihnen die Gewissheit, die richtige Förderung für Ihr Kind zu wählen. Viele Familien berichten, dass erst durch unsere Standortbestimmung klar wurde, wo sie ansetzen müssen.
              </p>
              
              <p>
                Besonders wertvoll ist unsere Analyse bei Umzügen in die Schweiz, Schulwechseln oder wenn Sie unsicher sind, welcher Bildungsweg für Ihr Kind der richtige ist.
              </p>
            </div>
            
            <button 
              onClick={() => router.push('/standortbestimmung-anfragen')}
              className="bg-[#ff6b35] text-white px-8 py-4 rounded-lg hover:bg-[#e55a2b] transition-colors font-semibold text-lg shadow-lg cursor-pointer"
            >
              Jetzt Standortbestimmung anfragen
            </button>
          </div>
        </div>
      </section>
    </>
  )
}