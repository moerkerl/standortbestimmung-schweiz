import LandingPageV2Client from '@/components/LandingPageV2Client'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Wo steht Ihr Kind in der Schule? - Standortbestimmung Schweiz",
  description: "Professionelle schulische Standortbestimmung nach Lehrplan 21. Klarheit über Stärken, Schwächen und die nächsten Schritte für Ihr Kind.",
  robots: "index, follow"
}

export default function LandingPageV2() {
  return <LandingPageV2Client />
}