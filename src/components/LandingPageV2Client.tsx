'use client'

import { useRouter } from 'next/navigation'

export default function LandingPageV2Client() {
  const router = useRouter()
  
  const handleCTA = () => {
    router.push('/standortbestimmung-anfragen')
  }

  const benefits = [
    {
      icon: '📌',
      title: 'Frühzeitige Klarheit',
      description: 'Erkennen Sie Probleme, bevor die Noten abrutschen.'
    },
    {
      icon: '📌', 
      title: 'Gezielte Förderung',
      description: 'Keine Zeit- und Geldverschwendung – Sie wissen genau, wo Ihr Kind Unterstützung braucht.'
    },
    {
      icon: '📌',
      title: 'Sicherheit für die Zukunft',
      description: 'Eine fundierte Grundlage für Entscheidungen zu Nachhilfe, Gymi oder weiterführender Schule.'
    }
  ]

  const questions = [
    'Hat mein Kind Lücken, die bald zum Problem werden?',
    'Sind die Noten wirklich stabil genug für den Übertritt?',
    'Braucht es Nachhilfe oder reicht mehr Übung?',
    'Welche Stärken kann mein Kind noch besser nutzen?'
  ]

  const ageGroups = [
    {
      title: 'Kindergarten bis 2. Klasse (4–8 Jahre)',
      description: 'Früherkennung von Stärken und Entwicklungsfeldern.'
    },
    {
      title: '3. bis 6. Klasse (9–12 Jahre)',
      description: 'Vorbereitung auf den Übertritt in die Sekundarstufe.'
    },
    {
      title: '7. bis 9. Klasse (13–15 Jahre)',
      description: 'Orientierung für Gymnasium, Berufslehre oder weiterführende Schulen.'
    }
  ]

  const specialGroups = [
    'Internationale Familien & Expats, die das Schweizer Schulsystem verstehen möchten.',
    'Bei Schulwechsel oder Umzug, um eine passende Einstufung zu sichern.',
    'Bei Leistungsschwankungen, um rechtzeitig Förderbedarf zu erkennen.'
  ]

  const steps = [
    {
      number: '1️⃣',
      title: 'Erstberatung',
      description: 'Wir prüfen Ihre Situation und klären gemeinsam Erwartungen und Ziele.'
    },
    {
      number: '2️⃣',
      title: 'Test zu Hause',
      description: 'Ihr Kind löst altersgerechte Aufgaben, die direkt auf dem Lehrplan 21 basieren.'
    },
    {
      number: '3️⃣',
      title: 'Expertengespräch',
      description: 'Eine erfahrene Lehrperson begleitet Teile des Tests per Video und beobachtet Arbeitsstrategien und Lernverhalten.'
    },
    {
      number: '4️⃣',
      title: 'Detaillierte Auswertung',
      description: 'Sie erhalten einen klaren Bericht mit Stärken-Schwächen-Profil, Lerntyp-Einschätzung und Empfehlungen.'
    },
    {
      number: '5️⃣',
      title: 'Ihr nächster Schritt',
      description: 'Sie wissen nun, wie Sie Ihr Kind optimal fördern können – ob durch gezielte Nachhilfe, Gymi-Vorbereitung oder eigenständiges Üben.'
    }
  ]

  const testimonials = [
    {
      stars: '⭐️⭐️⭐️⭐️⭐️',
      text: 'Dank der Standortbestimmung wussten wir endlich, wo die Lücken unseres Sohnes sind. Jetzt arbeitet er gezielt daran – und die Noten haben sich verbessert.',
      author: 'Familie Keller, Zürich'
    },
    {
      stars: '⭐️⭐️⭐️⭐️⭐️',
      text: 'Es war eine enorme Erleichterung, eine klare Einschätzung zu bekommen. Jetzt haben wir einen Plan – und unser Kind wieder mehr Selbstvertrauen.',
      author: 'Familie Steiner, Bern'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Wo steht Ihr Kind in der Schule?
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Mit unserer professionellen Standortbestimmung erhalten Sie Klarheit über Stärken, Schwächen und die nächsten Schritte.
          </p>
          <button 
            onClick={handleCTA}
            className="bg-gradient-to-r from-[#ff6b35] to-[#e55a2b] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all"
          >
            Jetzt Standortbestimmung starten
          </button>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Warum eine schulische Standortbestimmung?
          </h2>
          <p className="text-lg text-gray-700 mb-6">Viele Eltern fragen sich:</p>
          <ul className="space-y-3 mb-8">
            {questions.map((question, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#ff6b35] mt-1">•</span>
                <span className="text-gray-700">{question}</span>
              </li>
            ))}
          </ul>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-lg">
              👉 Mit unserer Standortbestimmung geben wir Ihnen <strong>klare Antworten</strong> – bevor es zu spät ist.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Unsere Lösung: Standortbestimmung Schweiz
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Wir analysieren den aktuellen Lernstand Ihres Kindes nach dem <strong>Lehrplan 21</strong> und erstellen einen verständlichen Überblick.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-lg mb-2">Stärken erkennen:</h3>
              <p className="text-gray-600">Damit Ihr Kind motiviert bleibt.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-lg mb-2">Schwächen aufzeigen:</h3>
              <p className="text-gray-600">Damit Sie gezielt handeln können.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-lg mb-2">Empfehlungen geben:</h3>
              <p className="text-gray-600">Damit Sie wissen, was der nächste Schritt ist (z. B. Nachhilfe, Gymi-Vorbereitung, Lerncoaching).</p>
            </div>
          </div>
          <div className="text-center">
            <button 
              onClick={handleCTA}
              className="bg-gradient-to-r from-[#ff6b35] to-[#e55a2b] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all"
            >
              Jetzt Standortbestimmung starten
            </button>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Für wen ist die Standortbestimmung gedacht?
          </h2>
          <div className="space-y-4 mb-8">
            {ageGroups.map((group, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-bold text-lg mb-2">{group.title}</h3>
                <p className="text-gray-600">{group.description}</p>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-[#ff6b35] to-[#e55a2b] p-8 rounded-2xl text-white">
            <h3 className="text-xl font-bold mb-4">📌 Besonders wertvoll für:</h3>
            <ul className="space-y-3">
              {specialGroups.map((group, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span>•</span>
                  <span>{group}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            So funktioniert die Standortbestimmung
          </h2>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex gap-4">
                  <span className="text-2xl">{step.number}</span>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Vorteile für Eltern und Schüler
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl mb-3">{benefit.icon}</div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scientific Foundation */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Wissenschaftlich fundiert & lehrplankonform
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Unsere Standortbestimmung basiert auf drei Säulen:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-gray-200">
              <h3 className="font-bold text-lg mb-3">Wissenschaftliche Basis:</h3>
              <p className="text-gray-600">Validierte Verfahren aus Pädagogischer Psychologie und Lernforschung.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-gray-200">
              <h3 className="font-bold text-lg mb-3">Lehrplan 21:</h3>
              <p className="text-gray-600">Alle Aufgaben sind transparent an die offiziellen Kompetenzen angelehnt.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-gray-200">
              <h3 className="font-bold text-lg mb-3">Ganzheitliche Beobachtung:</h3>
              <p className="text-gray-600">Neben Wissen erfassen wir Methodenkompetenz, Sozial- und Selbstkompetenz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Erfahrungsberichte von Eltern
          </h2>
          <div className="space-y-6">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-xl mb-4">{testimonial.stars}</div>
                <p className="text-gray-700 italic mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                <p className="text-gray-600 font-semibold">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Über uns
          </h2>
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border-2 border-gray-200">
            <p className="text-lg text-gray-700">
              <strong>Standortbestimmung Schweiz</strong> ist ein Angebot der <strong>Bildungsinstitut Fokus AG</strong>.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Unsere pädagogischen Fachpersonen und ehemaligen Lehrpersonen begleiten seit über 10 Jahren Schüler und Eltern in der ganzen Schweiz.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#ff6b35] to-[#e55a2b]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Ihr nächster Schritt
          </h2>
          <p className="text-xl mb-8">
            Je früher Sie wissen, wo Ihr Kind steht, desto leichter können Sie handeln.<br />
            Warten Sie nicht, bis die Noten abrutschen – handeln Sie jetzt!
          </p>
          <button 
            onClick={handleCTA}
            className="bg-white text-[#ff6b35] px-10 py-5 rounded-full text-lg font-bold hover:shadow-xl hover:scale-105 transition-all"
          >
            Jetzt Standortbestimmung starten
          </button>
        </div>
      </section>
    </div>
  )
}