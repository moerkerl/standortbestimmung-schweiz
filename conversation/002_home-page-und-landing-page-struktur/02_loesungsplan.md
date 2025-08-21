# Lösungsplan: Home-Page und Landing-Page Struktur

## Grobes Vorgehen

**Ziel:** Die aktuelle Landing-Page zu einer separaten Route verschieben und eine neue, normale Home-Page basierend auf der alten HTML-Website erstellen.

## Files die neu erstellt werden müssen:

### **1. Landing-Page Route:**
- `/src/app/(main)/landing-page/page.tsx` - Neue Landing-Page Route (aktueller Home-Content)
- Alternativ: `/src/app/(main)/lp/page.tsx`

### **2. Neue Home-Page Komponenten:**
- `/src/components/HeroSection.tsx` - Hero-Bereich basierend auf alter HTML
- `/src/components/TrustBar.tsx` - Trust-Indikatoren ("15'000+ Nachhilfelektionen")
- `/src/components/TrustSection.tsx` - Vertrauen/Expertise Sektion
- `/src/components/TargetAudienceSection.tsx` - Zielgruppen (Kindergarten-9.Klasse)
- `/src/components/ScientificSection.tsx` - Wissenschaftliche Fundierung
- `/src/components/FAQSection.tsx` - Umfangreiche FAQ (bereits existiert, evtl. erweitern)
- `/src/components/ResourceSection.tsx` - Download-Ressourcen (bereits existiert)

## Files die verändert werden müssen:

### **1. Hauptrouten:**
- `/src/app/(main)/page.tsx` - Kompletter Umbau zur normalen Home-Page
- `/src/app/(main)/layout.tsx` - Navigation Link zu Landing-Page hinzufügen (optional)

### **2. Metadaten Updates:**
- `/src/app/(main)/page.tsx` - Neue Metadaten für Home-Page
- Landing-Page - Metadaten anpassen

## Files die gelöscht werden sollen:

- Keine Löschungen erforderlich, nur Verschiebungen

## Implementierungsschritte:

### **Phase 1: Landing-Page auslagern**
1. Aktuellen Content von `/src/app/(main)/page.tsx` kopieren
2. Neue Landing-Page Route erstellen
3. Content in neue Route verschieben

### **Phase 2: Komponenten für neue Home-Page erstellen**
1. HTML-Content der alten Website analysieren
2. Komponenten für verschiedene Sektionen erstellen
3. Styling von alter CSS zu Tailwind konvertieren

### **Phase 3: Neue Home-Page implementieren**
1. `/src/app/(main)/page.tsx` komplett neu schreiben
2. Neue Komponenten einbauen
3. Responsive Design sicherstellen

### **Phase 4: Navigation und Links anpassen**
1. Interne Links zur Landing-Page aktualisieren
2. CTAs entsprechend anpassen
3. Testing der neuen Struktur

## Files die potentiell beobachtet werden müssen:

### **Komponenten die verwendet werden könnten:**
- `/src/components/ThreeStepSystem.tsx` - Für 3-Stufen System
- `/src/components/ProcessTimeline.tsx` - Für Prozess-Erklärung
- `/src/components/QualitySection.tsx` - Qualitätsunterschied
- `/src/components/TeamSection.tsx` - Mini-Team Sektion
- `/src/components/PartnerSection.tsx` - Partner-Logos

### **Layout und Styling:**
- `/src/app/globals.css` - Eventuell neue CSS-Klassen
- `/src/app/(main)/layout.tsx` - Navigation Updates
- `/tailwind.config.ts` - Eventuell neue Utility-Klassen

### **Form und Tracking:**
- `/src/components/MultiStepForm.tsx` - Form-Integration
- `/src/components/GoogleAnalytics.tsx` - Tracking auf neuen Seiten
- `/src/lib/tracking.ts` - Event-Tracking Updates

### **Bilder und Assets:**
- `/public/images/` - Eventuell neue Bilder von alter Website
- `/public/downloads/` - Ressourcen-Downloads

### **Metadaten und SEO:**
- `/src/app/layout.tsx` - Root Layout Metadaten
- Sitemap und Robot.txt Updates (falls vorhanden)

### **API Routes (falls betroffen):**
- `/src/app/api/submit-form/route.ts` - Form-Submissions
- `/src/app/api/csrf-token/route.ts` - CSRF-Token