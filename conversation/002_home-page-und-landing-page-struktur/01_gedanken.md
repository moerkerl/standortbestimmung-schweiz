# Gedanken zum Vorhaben: Home-Page und Landing-Page Trennung

## Analyse der aktuellen Situation

### **Aktueller Zustand:**
- **Home-Seite** (`/src/app/(main)/page.tsx`): Ist eine Landing-Page mit LP-Komponenten
- **Route-Struktur**: Next.js App Router mit Route Groups `(main)` und `(form)`
- **Komponenten**: Viele LP-Komponenten (LPHero, LPBenefits, LPSection, etc.)

### **Gewünschter Zustand:**
- **Normale Home-Seite**: Basierend auf alter HTML-Website, weniger verkaufsintensiv
- **Landing-Page**: Aktuelle Home-Seite als separate Marketing-Landing-Page

## Existierende Files und Struktur

### **Aktuelle App-Struktur:**
```
/src/app/
├── (main)/
│   ├── layout.tsx          # Navigation mit Home, Über-uns, Ablauf
│   ├── page.tsx           # AKTUELL: Landing-Page Content
│   ├── ueber-uns/page.tsx
│   └── ablauf/page.tsx
├── (form)/
│   ├── layout.tsx
│   ├── standortbestimmung-anfragen/page.tsx
│   └── dankesseite/page.tsx
└── layout.tsx             # Root Layout
```

### **Komponenten-Landschaft:**
- **LP-Komponenten**: LPHero.tsx, LPBenefits.tsx, LPSection.tsx, LPSteps.tsx, etc.
- **Standard-Komponenten**: TeamSection.tsx, ProcessTimeline.tsx, QualitySection.tsx
- **Form-Komponenten**: MultiStepForm.tsx

### **Alte HTML-Website Analyse:**
- **Struktur**: Klassische Website mit Hero, Trust-Bar, Target-Audience, Process, FAQ
- **Stil**: Orange Design (#ff6b35), weniger verkaufsintensiv als LP
- **Content**: Detaillierte wissenschaftliche Erklärungen, umfangreiche FAQ, Ressourcen-Sektion

## Integration ins existierende Projekt

### **Route-Konzept:**
1. **Neue normale Home** bleibt bei `/` 
2. **Landing-Page** verschiebt sich zu `/lp-standortbestimmung` oder `/landing-page`
3. **Navigation** zeigt weiterhin normale Seiten (Home, Über-uns, Ablauf)

### **Komponenten-Wiederverwendung:**
- LP-Komponenten bleiben für Landing-Page erhalten
- Standard-Komponenten können in neuer Home-Page wiederverwendet werden
- Neue Komponenten für Home-Page-spezifische Sektionen

### **Content-Migration Strategie:**
- Alte HTML → React/JSX Konversion
- Beibehaltung der wissenschaftlichen Tiefe
- Integration bestehender Bilder und Ressourcen
- FAQ-Sektion und Ressourcen-Center übernehmen