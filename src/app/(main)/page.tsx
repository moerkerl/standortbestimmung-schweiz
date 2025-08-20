'use client'

import { useRouter } from 'next/navigation'
import LPHero from '@/components/LPHero'
import LPBenefits from '@/components/LPBenefits'
import LPSection from '@/components/LPSection'
import LPSteps from '@/components/LPSteps'
import LPTestimonial from '@/components/LPTestimonial'
import LPOffers from '@/components/LPOffers'
import AnimatedText from '@/components/AnimatedText'

export default function Home() {
  const router = useRouter()
  
  const benefits = [
    {
      icon: '🏠',
      title: 'Privatunterricht zuhause oder online',
      description: 'Flexible Nachhilfe im Kanton Zürich und Umgebung'
    },
    {
      icon: '👥',
      title: 'Für alle Altersgruppen',
      description: 'Von der Primarschule bis zur Universität'
    },
    {
      icon: '🎯',
      title: 'Nachhaltige Erfolge feiern',
      description: 'Langfristige Verbesserung und echte Lernerfolge'
    }
  ]

  const steps = [
    {
      number: 1,
      title: 'Auf "Jetzt Tutor finden" klicken',
      description: 'Beantworten Sie online einige kurze Fragen um potentielle Nachhilfe-Tutoren in Zürich zu identifizieren.'
    },
    {
      number: 2,
      title: 'Strategiegespräch führen',
      description: 'Zusammen mit einem Lernstrategen erstellen Sie einen Plan, um im Rahmen ihres Budgets die gewünschten Ergebnisse zu erzielen.'
    },
    {
      number: 3,
      title: 'Lektionen starten. Erfolge feiern',
      description: 'Nach einer unverbindlichen Probelektion setzt unser Team den Plan um und verbessert die akademischen Fähigkeiten und das Selbstvertrauen des Schülers.'
    }
  ]

  const testimonials = [
    {
      name: 'Familie Müller aus Zürich',
      text: 'Wir haben einen fantastischen Nachhilfelehrer in Zürich gefunden. Unsere Tochter ist wieder motiviert und hat Freude am Lernen. Und auch ihre Noten haben sich verbessert. Wir würden das Nachhilfeportal Zürich auf jeden Fall weiterempfehlen.',
      rating: 5
    }
  ]

  const offers = [
    {
      icon: '📚',
      title: 'Lerncoaching',
      description: 'Unsere Lerncoaches gehen auf die individuellen Baustellen ihrer Schüler ein. Hier steht ganzheitliches Lerncoaching im Vordergrund. Ziel ist es, dem Schüler das Lernen beizubringen. Damit er in Zukunft nicht mehr auf den Nachhilfe-Lehrer angewiesen ist und langfristig bessere Ergebnisse erzielen kann.'
    },
    {
      icon: '🎓',
      title: 'Gymi-Vorbereitung',
      description: 'Unsere Gymi-Spezialisten bereiten ihre Schüler im Einzelunterricht optimal auf die Gymi-Prüfung vor. Dabei gehen wir auf Ihre Wünsche ein und unterstützen entweder ganzheitlich oder in einem ganz bestimmten Fach.'
    },
    {
      icon: '📐',
      title: 'Fachspezifische Nachhilfe',
      description: 'Unsere Fachspezialisten helfen ihren Schülern dort, wo diese am meisten Mühe haben. Das können auch mehrere Fächer sein. Der Fokus liegt hier auf spezifischen fachlichen Baustellen, die der Schüler zusammen mit unserem Lehrer aufholen kann.'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <LPHero
        title={
          <>
            <span className="inline-block">Entdecken Sie</span>{' '}
            <span className="inline-block">
              <AnimatedText text="erstklassige Tutoren" />
            </span>{' '}
            <span className="inline-block">in Zürich</span>
          </>
        }
        subtitle="Für nachhaltigen Lernerfolg im ganzen Kanton Zürich"
        buttonText="Jetzt Tutor in Zürich finden"
        imageSrc="/Vater-Tochter_Lerneinheit_mit_Freude_20250318_192428.jpg"
        imageAlt="Professionelle Nachhilfe mit qualifizierten Tutoren in Zürich"
      />

      {/* Benefits */}
      <LPBenefits benefits={benefits} />

      {/* Problem Section */}
      <LPSection
        title="Angst den Anschluss zu verlieren?"
        content=""
        bulletPoints={[
          'Schlechtes Lernverhalten',
          'Geringes akademisches Selbstbewusstsein',
          'Kein Ausschöpfen des vollen Potentials',
          'Abschluss nicht geschafft'
        ]}
        buttonText="Jetzt Tutor in Zürich finden"
        imageSrc="/fuenftklaessler-mathe-niedergeschlagen-frust-schreibtisch-alleine-mathe-helden.jpg"
        imageAlt="Schüler mit Lernfrust und Schwierigkeiten"
        imagePosition="left"
        backgroundColor="gray"
      />

      {/* Solution Section - Custom Layout */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Title, Subtitle, Button */}
            <div className="space-y-6">
              <p className="text-[#047857] font-semibold uppercase tracking-wide text-sm">
                Die Perspektiven verbessern
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Mit uns den Neustart in Zürich schaffen
              </h2>
              <p className="text-lg text-gray-600">
                Wir lehren, wie man lernt. Nicht nur, wie man Klausuren schreibt. Speziell im Kanton Zürich und der nahen Umgebung.
              </p>
              <button 
                onClick={() => router.push('/lehrer-finden')}
                className="bg-[#047857] text-white px-8 py-4 rounded-lg hover:bg-[#065f46] transition-colors font-semibold shadow-lg cursor-pointer"
              >
                Jetzt Tutor in Zürich finden
              </button>
            </div>

            {/* Right Column - Bullet Points with Graphic */}
            <div className="relative">
              {/* Background Graphic */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <svg className="w-full h-full max-w-md" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="200" cy="200" r="180" stroke="#047857" strokeWidth="2" strokeDasharray="10 10" />
                  <circle cx="200" cy="200" r="140" stroke="#047857" strokeWidth="2" strokeDasharray="8 8" />
                  <circle cx="200" cy="200" r="100" stroke="#047857" strokeWidth="2" strokeDasharray="6 6" />
                  <path d="M200 80 L250 150 L230 230 L170 230 L150 150 Z" stroke="#047857" strokeWidth="2" fill="none" />
                  <circle cx="200" cy="80" r="10" fill="#047857" />
                  <circle cx="250" cy="150" r="10" fill="#047857" />
                  <circle cx="230" cy="230" r="10" fill="#047857" />
                  <circle cx="170" cy="230" r="10" fill="#047857" />
                  <circle cx="150" cy="150" r="10" fill="#047857" />
                </svg>
              </div>

              {/* Bullet Points Card */}
              <div className="relative bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl border border-blue-100">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#047857]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Schritt für Schritt</p>
                      <h3 className="font-semibold text-gray-900">Selbstbewusstsein aufbauen</h3>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#047857]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Lebensverändernde</p>
                      <h3 className="font-semibold text-gray-900">Erfolge feiern</h3>
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
        title="In 3 Schritten zu akademischem Erfolg in Zürich"
        steps={steps}
        ctaText="Jetzt Tutor in Zürich finden"
      />

      {/* Testimonials */}
      <LPTestimonial
        title="Was andere Eltern aus Zürich meinen"
        testimonials={testimonials}
      />

      {/* Offers */}
      <LPOffers
        title="Unsere Angebote in Zürich"
        offers={offers}
      />

      {/* Final CTA Section - Custom Layout */}
      <section className="py-20 lg:py-24 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Nicht bereuen
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 text-left">
              <p>
                Wir wissen, wie frustrierend es ist, zusätzliches Geld für die Ausbildung eines Kindes ausgeben zu müssen. Die Schulkosten sind hoch genug! Doch so wie viele Spitzensportler und Führungskräfte Einzelunterricht erhalten, ist die Investition in einen Nachhilfelehrer in Zürich der schnellste (bewährte) Weg, um bessere Ergebnisse zu erzielen.
              </p>
              
              <p>
                Kinder, die ihren Abschluss mit besseren Ergebnissen machen, haben größere Karrierechancen, erhalten mehr Möglichkeiten und berichten über ein höheres Selbstvertrauen. Nachhilfe ist wirklich eine Investition in Ihr Kind! Leider lassen so viele Eltern das Problem liegen, bis es zu spät ist, und auch ein Nachhilfelehrer nichts mehr bewirken kann. Vertrauen Sie uns; vermeiden Sie Reue und beginnen Sie früh.
              </p>
              
              <p>
                Gerne erklären wir Ihnen auch persönlich, wie wir genau in Zürich helfen.
              </p>
            </div>
            
            <button 
              onClick={() => router.push('/lehrer-finden')}
              className="bg-[#047857] text-white px-8 py-4 rounded-lg hover:bg-[#065f46] transition-colors font-semibold text-lg shadow-lg cursor-pointer"
            >
              Jetzt Tutor in Zürich finden
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
