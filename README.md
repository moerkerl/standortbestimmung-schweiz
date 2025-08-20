# Nachhilfeportal Zürich

Eine moderne Landing Page für die Nachhilfevermittlung im Kanton Zürich, entwickelt als Brand der Bildungsinstitut Fokus AG.

## 🚀 Übersicht

Das Nachhilfeportal Zürich ist eine Next.js 15 Webseite, die sich auf die Vermittlung von qualifizierten Nachhilfelehrern im Kanton Zürich und Umgebung spezialisiert. Die Seite bietet eine nutzerfreundliche Landing Page mit einem mehrstufigen Kontaktformular.

## ✨ Features

- **🎯 Landing Page**: Moderne, responsive Landing Page mit Zürich-Fokus
- **📝 Multi-Step Formular**: 5-stufiges Kontaktformular mit Auto-Advance-Funktionen
- **🎨 Animierte Elemente**: Text-Animationen und Button-Highlighting
- **📱 Responsive Design**: Optimiert für Desktop, Tablet und Mobile
- **⚡ Performance**: Statische Site-Generation für optimale Ladezeiten
- **🔒 Rechtliche Seiten**: Impressum und Datenschutzerklärung

## 🛠 Tech Stack

- **Framework**: Next.js 15.4.6 mit App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Font**: Inter
- **Icons**: SVG-Icons und Emojis
- **Dependencies**: React 19, Cookie, HubSpot Integration

## 📁 Projektstruktur

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root Layout mit Header/Footer
│   ├── page.tsx           # Landing Page
│   ├── lehrer-finden/     # Multi-Step Formular
│   ├── dankesseite/       # Danke-Seite
│   ├── impressum/         # Impressum
│   └── datenschutz/       # Datenschutzerklärung
├── components/            # Wiederverwendbare Komponenten
│   ├── AnimatedText.tsx   # Text-Animation mit Unterstreichung
│   ├── LPHero.tsx         # Hero-Sektion
│   ├── LPBenefits.tsx     # Benefits-Sektion
│   ├── LPSection.tsx      # Allgemeine Content-Sektion
│   ├── LPSteps.tsx        # 3-Schritte Prozess
│   ├── LPTestimonial.tsx  # Testimonials
│   ├── LPOffers.tsx       # Angebots-Übersicht
│   └── MultiStepForm.tsx  # 5-stufiges Kontaktformular
├── lib/                   # Utilities
│   ├── hubspotService.ts  # HubSpot CRM Integration
│   ├── tracking.ts        # Google Ads Tracking
│   └── csrf.ts            # CSRF Protection
└── hooks/                 # Custom React Hooks
    └── useCSRF.ts         # CSRF Token Management
```

## 🚀 Entwicklung

### Voraussetzungen
- Node.js 18+ 
- npm oder yarn

### Installation
```bash
# Repository klonen
git clone <repository-url>

# Dependencies installieren
npm install

# Development Server starten
npm run dev
```

Die Anwendung ist dann unter [http://localhost:3000](http://localhost:3000) verfügbar.

### Build
```bash
# Produktions-Build erstellen
npm run build

# Produktions-Build starten
npm run start

# Linting
npm run lint
```

## 🎨 Design-System

### Farben
- **Primary**: #047857 (Blau)
- **Primary Hover**: #065f46
- **Text**: Gray-900, Gray-600
- **Backgrounds**: White, Gray-50, Blue-50

### Komponenten
- **Hero-Sektion**: Animierter Titel mit CTA-Button
- **Benefits**: 3-spaltige Vorteils-Übersicht
- **Problem/Solution**: Zweispaltige Inhaltssektionen
- **3-Schritte**: Prozess-Darstellung
- **Testimonials**: Kundenbewertungen
- **Angebote**: Service-Übersicht

## 📋 Multi-Step Formular

Das Kontaktformular besteht aus 5 Schritten:

1. **Wer braucht Nachhilfe?** (Auto-Advance)
2. **Klassen-Auswahl** (Auto-Advance) 
3. **Fach-Eingabe** (Freitext + Vorschläge)
4. **PLZ-Eingabe** (Auto-Advance bei 4 Zeichen)
5. **Kontaktdaten** (Name, Telefon, E-Mail)

### Features
- Progress-Indikator
- Zurück-Navigation
- Feld-Validierung
- Auto-Advance bei eindeutigen Eingaben
- Responsive Design

## 🌍 Branding

**Nachhilfeportal Zürich** ist ein Brand der **Bildungsinstitut Fokus AG** und fokussiert sich auf:

- Nachhilfevermittlung im Kanton Zürich
- Privatunterricht zuhause oder online
- Alle Altersgruppen (Primar bis Universität)
- Qualifizierte, geprüfte Lehrkräfte

## 📞 Kontakt

- **Telefon**: 078 314 62 65
- **E-Mail**: dantico@fokus-nachhilfe.ch
- **Adresse**: Staffelstr 8, 8045 Zürich

## ✅ Implementierte Features

- ✅ **HubSpot CRM Integration** - Lead-Daten werden automatisch übertragen
- ✅ **Google Analytics Setup** - Google Ads Tracking (AW-17483108923)
- ✅ **Google Ads Conversion Tracking** - Vollständig implementiert
- ✅ **CSRF-Token System** - Sicherheit für Formulareingaben
- ✅ **Contact Form API-Endpoints** - `/api/submit-form` und `/api/csrf-token`
- ✅ **Multi-Step Formular** - 5-stufiger Anmeldeprozess
- ✅ **Responsive Design** - Optimiert für alle Geräte

## 📝 Mögliche Erweiterungen

- [ ] Enhanced Conversions für Google Ads
- [ ] Professional Logo Design
- [ ] Advanced SEO-Optimierungen  
- [ ] A/B Testing für Conversion-Optimierung

## 📄 Lizenz

© 2024 Bildungsinstitut Fokus AG. Alle Rechte vorbehalten.
