# Gedanken und Analyse zum Vorhaben

## Verständnis der alten Website (standortbestimmung-schweiz-alt)

Nach ausführlicher Analyse der alten HTML-Website habe ich folgende Kernelemente identifiziert:

### Inhaltliche Struktur
Die alte Website ist eine professionelle Landing Page für **Standortbestimmungen von Schülern (4-15 Jahre)** der Bildungsinstitut Fokus AG mit:

- **Wissenschaftlich fundierte Standortbestimmung** basierend auf Lehrplan 21
- **Drei-Stufen-System**: Standortbestimmung → PLUS (mit Lernplan) → KOMPLETT (mit Nachhilfe)
- **Zielgruppen**: Expats, neu Zugezogene, Schulwechsel, Leistungsschwankungen
- **Expert*innen**: Nicole Benjamin (Primarstufe) und Nadja Ritter (Sekundarstufe)
- **Ressourcen-Bereich** mit Downloads (PDFs)
- **FAQ-Sektion** mit expandierbaren Fragen
- **Typeform-Integration** für das Kontaktformular

### Bestehende Dateien in der Vorlage

Das aktuelle Next.js-Projekt (nachhilfeportal-zuerich Vorlage) hat bereits eine solide Grundstruktur:

#### Existierende Components (`/src/components/`)
- `LPHero.tsx` - Hero-Sektion mit animiertem Text ✅
- `LPBenefits.tsx` - Vorteile in 3-Spalten Layout ✅
- `LPSection.tsx` - Wiederverwendbare Content-Sektionen ✅  
- `LPSteps.tsx` - Schritt-für-Schritt Prozess ✅
- `LPTestimonial.tsx` - Kundenbewertungen ✅
- `LPOffers.tsx` - Service-Angebote ✅
- `MultiStepForm.tsx` - 5-Schritt Formular ✅
- `AnimatedText.tsx` - Text-Animation ✅
- `GoogleAnalytics.tsx` - Tracking ✅
- `ConversionTracker.tsx` - Conversion Tracking ✅

#### Existierende Pages (`/src/app/`)
- `(main)/page.tsx` - Landing Page (derzeit für Nachhilfe) 🔄
- `(main)/impressum/page.tsx` - Impressum ✅
- `(main)/datenschutz/page.tsx` - Datenschutz ✅
- `(form)/lehrer-finden/page.tsx` - Multi-Step Formular 🔄
- `(form)/dankesseite/page.tsx` - Danke-Seite ✅

#### Existierende Integrationen
- HubSpot CRM Integration ✅
- Google Ads Tracking (AW-17483108923) 🔄
- CSRF-Protection ✅
- API Routes für Formular-Submission ✅

## Integration-Strategie

### Was wiederverwendbar ist
- **Gesamte Komponentenarchitektur**: Alle LP*-Components sind flexibel gestaltet
- **Multi-Step Formular System**: Kann für Standortbestimmung angepasst werden
- **HubSpot Integration**: Direkt wiederverwendbar
- **Layout-Struktur**: App Router mit Route Groups passt perfekt

### Was angepasst werden muss
- **Inhalte der Landing Page**: Von Nachhilfe zu Standortbestimmung
- **Formular-Flow**: Von "Lehrer finden" zu "Standortbestimmung anfragen"
- **Branding**: Von grün (#047857) zu neuen Farben (orange #ff6b35 basierend auf alter Website)
- **Navigation**: Zusätzliche Seiten für "Über uns" und "Ablauf"

### Neue Komponenten benötigt
- **FAQ-Komponente**: Mit Expand/Collapse Funktionalität
- **Team-Sektion**: Für Expert*innen-Profile  
- **Ressourcen-Downloads**: PDF-Download Sektion
- **Drei-Stufen-System**: Cards für Standortbestimmung, PLUS, KOMPLETT
- **Scientific Foundation**: Lehrplan 21 Erklärungen
- **Partner-Logos**: Fokus Nachhilfe + GoGymi

### Neue Seiten benötigt
- `(main)/ueber-uns/page.tsx` - Team, Philosophie, Partner
- `(main)/ablauf/page.tsx` - Detaillierter Prozess
- Eventuell: `(form)/standortbestimmung/page.tsx` - Vereinfachte Landing Page für Ads

## Projektstrategie

Das Vorhaben ist sehr gut umsetzbar, da:
1. **Architektur passt perfekt**: Next.js App Router mit Components
2. **Bestehende Infrastruktur**: HubSpot, Tracking, Formulare bereits da
3. **Wiederverwendbare Komponenten**: Können mit neuen Props angepasst werden
4. **Saubere Trennung**: Alte HTML-Chaos wird zu strukturierter Component-Architektur

Die alte Website liefert alle Inhalte und das Design-System, das neue Projekt bietet die moderne technische Basis.