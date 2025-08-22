'use client'

import { useRouter } from 'next/navigation'
import LPHero from '@/components/LPHero'
import LPBenefits from '@/components/LPBenefits'
import LPSection from '@/components/LPSection'
import LPSteps from '@/components/LPSteps'
import ScientificSection from '@/components/ScientificSection'
import TeamSection from '@/components/TeamSection'
import QualitySection from '@/components/QualitySection'
import LPTestimonial from '@/components/LPTestimonial'
import PartnerSection from '@/components/PartnerSection'
import FAQSectionComplete from '@/components/FAQSectionComplete'
import AnimatedText from '@/components/AnimatedText'

export default function LandingPageV3Client() {
  const router = useRouter()

  const benefits = [
    {
      icon: '🎯',
      title: 'Frühzeitige Klarheit',
      description: 'Erkennen Sie Probleme, bevor die Noten abrutschen'
    },
    {
      icon: '💡',
      title: 'Gezielte Förderung',
      description: 'Sie wissen genau, wo Ihr Kind Unterstützung braucht'
    },
    {
      icon: '🛡️',
      title: 'Sicherheit für die Zukunft',
      description: 'Fundierte Grundlage für Bildungsentscheidungen'
    }
  ]

  const steps = [
    {
      number: 1,
      title: 'Erstberatung',
      description: 'Wir prüfen Ihre Situation und klären gemeinsam Erwartungen und Ziele.'
    },
    {
      number: 2,
      title: 'Test zu Hause',
      description: 'Ihr Kind löst altersgerechte Aufgaben, die direkt auf dem Lehrplan 21 basieren.'
    },
    {
      number: 3,
      title: 'Expertengespräch',
      description: 'Eine erfahrene Lehrperson begleitet Teile des Tests per Video und beobachtet Arbeitsstrategien.'
    },
    {
      number: 4,
      title: 'Detaillierte Auswertung',
      description: 'Sie erhalten einen klaren Bericht mit Stärken-Schwächen-Profil und Empfehlungen.'
    },
    {
      number: 5,
      title: 'Ihr nächster Schritt',
      description: 'Sie wissen nun, wie Sie Ihr Kind optimal fördern können.'
    }
  ]

  const testimonials = [
    {
      name: 'Familie Keller, Zürich',
      text: 'Dank der Standortbestimmung wussten wir endlich, wo die Lücken unseres Sohnes sind. Jetzt arbeitet er gezielt daran – und die Noten haben sich verbessert.',
      rating: 5
    },
    {
      name: 'Familie Steiner, Bern',
      text: 'Es war eine enorme Erleichterung, eine klare Einschätzung zu bekommen. Jetzt haben wir einen Plan – und unser Kind wieder mehr Selbstvertrauen.',
      rating: 5
    },
    {
      name: 'Familie Müller, Basel',
      text: 'Die Expertinnen waren sehr einfühlsam und professionell. Der detaillierte Bericht hat uns genau gezeigt, wo wir ansetzen müssen.',
      rating: 5
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <LPHero
        title={
          <>
            <span className="inline-block">Wo steht</span>{' '}
            <span className="inline-block">
              <AnimatedText text="Ihr Kind" />
            </span>{' '}
            <span className="inline-block">wirklich?</span>
          </>
        }
        subtitle="Professionelle Standortbestimmung nach Lehrplan 21 - Von erfahrenen Pädagoginnen durchgeführt. Erhalten Sie Klarheit über Stärken, Schwächen und die nächsten Schritte."
        buttonText="Jetzt Standortbestimmung erhalten"
        imageSrc="/zwei-gymnasiasten-statistik-analyse-esszimmer-tutorin-vertiefung-mathe-helden.jpg"
        imageAlt="Professionelle Standortbestimmung für Ihr Kind"
      />


      {/* Benefits */}
      <LPBenefits benefits={benefits} />

      {/* Problem Section */}
      <LPSection
        title="Kennen Sie diese Unsicherheiten?"
        content="Als Eltern möchten Sie das Beste für Ihr Kind. Doch oft fehlt der klare Überblick:"
        bulletPoints={[
          'Hat mein Kind versteckte Lücken, die später zum Problem werden?',
          'Sind die aktuellen Noten wirklich aussagekräftig?',
          'Braucht es professionelle Nachhilfe oder reicht mehr Übung?',
          'Ist mein Kind auf dem richtigen Weg für den Übertritt?',
          'Welche Stärken sollten wir gezielt fördern?'
        ]}
        buttonText="Jetzt Standortbestimmung erhalten"
        imageSrc="/fuenftklaessler-mathe-niedergeschlagen-frust-schreibtisch-alleine-mathe-helden.jpg"
        imageAlt="Schüler mit Unsicherheit über den Lernstand"
        imagePosition="right"
        backgroundColor="white"
      />

      {/* Solution Section */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#ff6b35] font-semibold uppercase tracking-wide text-sm mb-4">
              Die Lösung
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Professionelle Standortbestimmung Schweiz
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Unsere erfahrenen Pädagoginnen analysieren den Lernstand Ihres Kindes wissenschaftlich fundiert 
              nach dem <strong>Lehrplan 21</strong> und geben Ihnen konkrete Handlungsempfehlungen.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                Stärken identifizieren
              </h3>
              <p className="text-gray-600 text-center">
                Erkennen Sie die Talente Ihres Kindes und nutzen Sie diese als Motivationsquelle.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                Lücken aufdecken
              </h3>
              <p className="text-gray-600 text-center">
                Finden Sie heraus, wo gezielter Förderbedarf besteht, bevor es zu spät ist.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                Klare Empfehlungen
              </h3>
              <p className="text-gray-600 text-center">
                Erhalten Sie einen konkreten Aktionsplan für die optimale Förderung.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <button 
              onClick={() => router.push('/standortbestimmung-anfragen')}
              className="bg-[#ff6b35] text-white px-8 py-4 rounded-lg hover:bg-[#e55a2b] transition-colors font-semibold text-lg shadow-lg cursor-pointer"
            >
              Jetzt Standortbestimmung erhalten
            </button>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Für wen ist die Standortbestimmung ideal?
            </h2>
            <p className="text-lg text-gray-600">
              Vom Kindergarten bis zur 9. Klasse - wir begleiten Ihr Kind durch alle Schulstufen
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#ff6b35] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                K-2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                Kindergarten bis 2. Klasse
              </h3>
              <p className="text-[#ff6b35] font-semibold text-center mb-3">4–8 Jahre</p>
              <p className="text-gray-600 text-center">
                Früherkennung von Stärken und Entwicklungsfeldern für einen optimalen Schulstart.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border-2 border-green-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#ff6b35] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3-6
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                3. bis 6. Klasse
              </h3>
              <p className="text-[#ff6b35] font-semibold text-center mb-3">9–12 Jahre</p>
              <p className="text-gray-600 text-center">
                Vorbereitung auf den wichtigen Übertritt in die Sekundarstufe.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border-2 border-purple-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#ff6b35] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                7-9
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                7. bis 9. Klasse
              </h3>
              <p className="text-[#ff6b35] font-semibold text-center mb-3">13–15 Jahre</p>
              <p className="text-gray-600 text-center">
                Orientierung für Gymnasium, Berufslehre oder weiterführende Schulen.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-3xl p-10 border-2 border-orange-200">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">
              <span className="text-[#ff6b35]">📌</span> Besonders wertvoll in diesen Situationen:
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ff6b35] to-[#e55a2b] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2 text-center text-gray-900">Neu in der Schweiz</h4>
                <p className="text-gray-600 text-sm text-center">
                  Verstehen Sie das Schweizer Schulsystem und finden Sie die richtige Einstufung für Ihr Kind.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ff6b35] to-[#e55a2b] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2 text-center text-gray-900">Schulwechsel geplant</h4>
                <p className="text-gray-600 text-sm text-center">
                  Sichern Sie einen nahtlosen Übergang und die richtige Klasseneinstufung.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ff6b35] to-[#e55a2b] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2 text-center text-gray-900">Noten schwanken</h4>
                <p className="text-gray-600 text-sm text-center">
                  Erkennen Sie die wahren Ursachen und handeln Sie rechtzeitig.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <LPSteps
        title="So funktioniert unsere Standortbestimmung"
        steps={steps}
        ctaText="Jetzt Standortbestimmung erhalten"
      />

      {/* Scientific Foundation - REPLACED LPOffers */}
      <ScientificSection />

      {/* Team Section - NEW */}
      <TeamSection />

      {/* Quality Section - NEW */}
      <QualitySection />

      {/* Testimonials */}
      <LPTestimonial
        title="Das sagen Eltern über uns"
        testimonials={testimonials}
      />

      {/* Partner Section - NEW */}
      <PartnerSection />

      {/* FAQ Section - NEW */}
      <FAQSectionComplete />

      {/* About Us Section - OPTIMIZED */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl shadow-lg">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-[#ff6b35] to-[#e55a2b] rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
              Vertrauen Sie den Experten
            </h2>
            <p className="text-lg text-gray-700 text-center mb-4">
              <strong>Standortbestimmung Schweiz</strong> ist ein Service der <strong>Bildungsinstitut Fokus AG</strong>, 
              einem der führenden Bildungsunternehmen der Schweiz.
            </p>
            <p className="text-lg text-gray-700 text-center">
              Mit über 10 Jahren Erfahrung und hunderten erfolgreich begleiteten Familien wissen wir genau, 
              worauf es bei der schulischen Förderung ankommt.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#ff6b35]">500+</div>
                <div className="text-sm text-gray-600">Familien begleitet</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#ff6b35]">10+</div>
                <div className="text-sm text-gray-600">Jahre Erfahrung</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#ff6b35]">100%</div>
                <div className="text-sm text-gray-600">Lehrplan 21 konform</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-r from-[#ff6b35] to-[#e55a2b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Schaffen Sie jetzt Klarheit für Ihr Kind
            </h2>
            
            <div className="space-y-4 text-lg text-white">
              <p>
                Je früher Sie wissen, wo Ihr Kind steht, desto gezielter können Sie fördern.
              </p>
              <p className="font-semibold text-xl">
                Warten Sie nicht auf das nächste Zeugnis – handeln Sie jetzt!
              </p>
            </div>
            
            <button 
              onClick={() => router.push('/standortbestimmung-anfragen')}
              className="bg-white text-[#ff6b35] px-10 py-5 rounded-lg hover:bg-gray-100 transition-all font-bold text-lg shadow-lg transform hover:scale-105 cursor-pointer"
            >
              Jetzt Standortbestimmung erhalten
            </button>
            
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Kostenlose Erstberatung</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Von Pädagoginnen durchgeführt</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Detaillierter Bericht</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}