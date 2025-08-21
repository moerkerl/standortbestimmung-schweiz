# Lösungsplan: Standortbestimmung Schweiz Website

## Übersicht
Wir bauen die Standortbestimmung-Webseite durch Anpassung der bestehenden Nachhilfe-Vorlage auf. Der Plan nutzt maximal die vorhandenen Komponenten und erstellt nur die notwendigen neuen Elemente.

## Phase 1: Grundlegende Anpassungen

### 1.1 Branding und Design-System anpassen
**Files die verändert werden:**
- `tailwind.config.js` - Farbschema von grün (#047857) zu orange (#ff6b35)
- `src/components/GoogleAnalytics.tsx` - Google Ads ID von AW-17483108923 zu AW-17312546230
- `package.json` - Projektname aktualisieren
- `CLAUDE.md` - Projekt-Informationen aktualisieren

### 1.2 Navigation erweitern  
**Files die verändert werden:**
- `src/components/Navigation.tsx` (falls existiert) oder Layout-File - Menüpunkte erweitern um "Über uns" und "Ablauf"

### 1.3 Hauptseite umbauen
**Files die verändert werden:**
- `src/app/(main)/page.tsx` - Komplett umschreiben für Standortbestimmung statt Nachhilfe
- Content: Hero-Sektion, Vorteile, 3-Stufen-System, Zielgruppen, CTA

## Phase 2: Neue Seiten erstellen

### 2.1 Über-uns-Seite
**Files die neu erstellt werden:**
- `src/app/(main)/ueber-uns/page.tsx` - Hauptseite mit Team, Philosophie, Partner

**Neue Components die erstellt werden:**
- `src/components/TeamSection.tsx` - Expert*innen-Profile (Nicole Benjamin, Nadja Ritter)
- `src/components/PhilosophySection.tsx` - Werte-Karten (Empathie, Respekt, Innovation, Exzellenz)
- `src/components/PartnerSection.tsx` - Fokus Nachhilfe + GoGymi Logos

### 2.2 Ablauf-Seite  
**Files die neu erstellt werden:**
- `src/app/(main)/ablauf/page.tsx` - Detaillierter Prozess der Standortbestimmung

**Neue Components die erstellt werden:**
- `src/components/ThreeStepSystem.tsx` - Stufe 1-3 Karten (Basic, PLUS, KOMPLETT)
- `src/components/ProcessTimeline.tsx` - 5-Schritt Ablauf mit Timeline
- `src/components/QualitySection.tsx` - Lehrplan 21 Qualitäts-Erklärung
- `src/components/TestExamples.tsx` - Beispiel-Aufgaben Galerie

## Phase 3: Formular-Flow anpassen

### 3.1 Multi-Step Formular anpassen
**Files die verändert werden:**
- `src/components/MultiStepForm.tsx` - Schritte anpassen: Wer braucht Test → Alter/Klasse → Fächer → PLZ → Kontakt
- `src/app/api/submit-form/route.ts` - HubSpot Properties für Standortbestimmung anpassen
- `src/app/(form)/lehrer-finden/page.tsx` - Umbenennen zu `standortbestimmung-anfragen`

**Files die neu erstellt werden:**
- `src/app/(form)/standortbestimmung-anfragen/page.tsx` - Formular-Seite umbenennen

### 3.2 Formular-Daten anpassen
**Files die verändert werden:**
- `src/lib/hubspotService.ts` - Properties für Standortbestimmung (statt Nachhilfe)

## Phase 4: Zusätzliche Features

### 4.1 FAQ-Sektion
**Neue Components die erstellt werden:**
- `src/components/FAQSection.tsx` - Accordion-Style FAQ mit Expand/Collapse

### 4.2 Ressourcen/Downloads
**Neue Components die erstellt werden:**  
- `src/components/ResourceSection.tsx` - PDF-Downloads (Schultypen, Lehrplan-Info)

### 4.3 Landing Page für Ads
**Files die neu erstellt werden:**
- `src/app/(main)/landing/page.tsx` - Vereinfachte Version der Hauptseite für Google Ads

## Phase 5: Content-Integration

### 5.1 Texte und Bilder
**Files die verändert werden:**
- Alle bestehenden Components bekommen neue Props mit Standortbestimmung-Inhalten
- `public/` - Neue Bilder aus der alten Website übertragen

### 5.2 SEO und Metadata
**Files die verändert werden:**
- Alle `page.tsx` Files - Metadata für Standortbestimmung optimieren
- `src/app/layout.tsx` - Globale Meta-Tags anpassen

## Files die potentiell beobachtet werden müssen

### Existing Core Files
- `src/app/layout.tsx` - Root Layout mit Navigation
- `src/components/LPHero.tsx` - Falls Anpassungen nötig
- `src/components/LPBenefits.tsx` - Wiederverwendbar mit neuen Props
- `src/components/LPSteps.tsx` - Wiederverwendbar mit neuen Props  
- `src/components/LPTestimonial.tsx` - Neue Testimonials
- `src/lib/tracking.ts` - Tracking-Parameter anpassen
- `src/hooks/useCSRF.ts` - Falls Formular-Changes nötig
- `next.config.ts` - Eventuell für neue Image-Domains
- `src/components/ConversionTracker.tsx` - Conversion-IDs anpassen
- `src/app/(form)/dankesseite/page.tsx` - Text anpassen
- `src/app/(main)/impressum/page.tsx` - Eventuell Inhalte anpassen  
- `src/app/(main)/datenschutz/page.tsx` - Eventuell Inhalte anpassen

### Configuration Files
- `eslint.config.mjs` - Bei größeren Änderungen
- `tsconfig.json` - Falls neue Pfade nötig
- `.gitignore` - Falls neue ignored Dateien
- `README.md` - Projekt-Dokumentation aktualisieren

### Static Assets
- `public/favicon.ico` - Neues Favicon
- `public/robots.txt` - SEO-Anpassungen
- Alle Image-Files in `public/` - Bestehende durch neue ersetzen

## Umsetzungsreihenfolge

1. **Grundgerüst** - Branding, Navigation, Hauptseite
2. **Neue Seiten** - Über-uns, Ablauf mit Components  
3. **Formular** - Multi-Step Flow anpassen
4. **Features** - FAQ, Ressourcen, Landing Page
5. **Content** - Texte, Bilder, SEO finalisieren

Der Plan nutzt maximal die bestehende Infrastruktur und minimiert neue Entwicklungsarbeit durch clevere Wiederverwendung der Komponenten.