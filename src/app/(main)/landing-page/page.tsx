import LandingPageClient from '@/components/LandingPageClient'
import { Metadata } from 'next'

// Metadata for the landing page
export const metadata: Metadata = {
  title: "Professionelle Standortbestimmung Schweiz - Jetzt starten",
  description: "Wissenschaftlich fundierte Standortbestimmung für Schweizer Schüler (4-15 Jahre). Lehrplan 21 konform. Klarheit über den Lernstand Ihres Kindes - jetzt starten!",
  robots: "index, follow"
}

export default function LandingPage() {
  const benefits = [
    {
      icon: '🔍',
      title: 'Wissenschaftlich fundierte Analyse',
      description: 'Lehrplan 21 konforme Standortbestimmung für präzise Einschätzungen'
    },
    {
      icon: '👨‍🏫',
      title: 'Erfahrene Pädagoginnen',
      description: 'Nicole Benjamin und Nadja Ritter begleiten Ihr Kind persönlich'
    },
    {
      icon: '📊',
      title: 'Konkrete Handlungsempfehlungen',
      description: 'Detaillierte Auswertung mit klarem Förderplan für Ihr Kind'
    }
  ]

  const steps = [
    {
      number: 1,
      title: 'Erstberatung vereinbaren',
      description: 'Sie füllen unser Kontaktformular aus und wir besprechen gemeinsam, ob eine Standortbestimmung für Ihr Kind sinnvoll ist.'
    },
    {
      number: 2,
      title: 'Standortbestimmung durchführen',
      description: 'Ihr Kind führt den Test zu Hause durch, während unsere Expertin per Video live dabei ist und beobachtet.'
    },
    {
      number: 3,
      title: 'Ergebnisse erhalten und handeln',
      description: 'Sie erhalten eine detaillierte Auswertung mit konkreten Empfehlungen für die optimale Förderung Ihres Kindes.'
    }
  ]

  const testimonials = [
    {
      name: 'Familie Weber aus Winterthur',
      text: 'Die Standortbestimmung hat uns endlich Klarheit verschafft. Wir wussten vorher nicht, wo unser Sohn wirklich steht. Jetzt haben wir einen konkreten Plan und sehen bereits erste Fortschritte. Sehr empfehlenswert!',
      rating: 5
    }
  ]

  const offers = [
    {
      icon: '📋',
      title: 'Standortbestimmung Basic',
      description: 'Lehrplan-basierter Test, 1:1 Expertengespräch und ausführlicher Ergebnisbericht. Sie erhalten vollständige Klarheit über den aktuellen Lernstand Ihres Kindes.'
    },
    {
      icon: '📈',
      title: 'Standortbestimmung PLUS',
      description: 'Alles aus Basic plus individueller Lernplan, Wochenziele und Methoden-Empfehlungen. Sie wissen nicht nur wo Ihr Kind steht, sondern auch wie es vorankommt.'
    },
    {
      icon: '🎯',
      title: 'Standortbestimmung KOMPLETT',
      description: 'Die Rundum-Lösung: Analyse, Lernplan plus passende Nachhilfe-Lehrkraft und regelmässige Lernbegleitung für nachhaltigen Erfolg.'
    }
  ]

  return (
    <LandingPageClient 
      benefits={benefits}
      steps={steps}
      testimonials={testimonials}
      offers={offers}
    />
  )
}