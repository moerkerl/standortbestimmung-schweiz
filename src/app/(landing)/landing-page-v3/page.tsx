import LandingPageV3Client from '@/components/LandingPageV3Client'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Wo steht Ihr Kind wirklich? - Professionelle Standortbestimmung Schweiz",
  description: "Wissenschaftlich fundierte Lernstandsanalyse nach Lehrplan 21. Von erfahrenen Pädagoginnen durchgeführt. Klarheit über Stärken, Schwächen und nächste Schritte für Ihr Kind.",
  robots: "index, follow"
}

export default function LandingPageV3() {
  return <LandingPageV3Client />
}