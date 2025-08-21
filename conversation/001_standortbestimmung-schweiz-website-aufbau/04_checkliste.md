# Entwickler-Checkliste: Standortbestimmung Schweiz

## Funktionale Tests

### ✅ Navigation und Routing
- [ ] Hauptseite (`/`) lädt korrekt
- [ ] Über-uns-Seite (`/ueber-uns`) ist erreichbar
- [ ] Ablauf-Seite (`/ablauf`) funktioniert
- [ ] Formular-Seite (`/standortbestimmung-anfragen`) öffnet sich
- [ ] Alle internen Links funktionieren
- [ ] Footer-Links zu Impressum/Datenschutz arbeiten

### ✅ Formular-Funktionalität
- [ ] Multi-Step-Formular durchklickbar
- [ ] Auto-Advance bei Auswahlen funktioniert
- [ ] Zurück-Navigation zwischen Schritten
- [ ] Validierung zeigt Fehlermeldungen
- [ ] CSRF-Token wird korrekt übertragen
- [ ] Formular-Submission zu HubSpot erfolgreich
- [ ] Weiterleitung zur Danke-Seite nach Submission

### ✅ Interaktive Komponenten
- [ ] FAQ Accordion öffnet/schließt korrekt
- [ ] Drei-Stufen-Karten sind klickbar (Stufe 1)
- [ ] Hover-Effekte auf Buttons funktionieren
- [ ] Responsive Verhalten auf mobilen Geräten

## Design und Branding

### ✅ Farb-Konsistenz
- [ ] Primärfarbe Orange (#ff6b35) durchgängig verwendet
- [ ] Hover-Farbe (#e55a2b) auf allen Buttons
- [ ] Gradient-Hintergründe von orange-50 zu white
- [ ] Keine grünen Farbreste von der Nachhilfe-Vorlage

### ✅ Content-Anpassungen
- [ ] Alle Texte sprechen von "Standortbestimmung" statt "Nachhilfe"
- [ ] CTAs verwenden "Standortbestimmung anfragen"
- [ ] Testimonials passen zum neuen Thema
- [ ] Team-Bilder von Nicole und Nadja laden
- [ ] Partner-Logos (Fokus Nachhilfe, GoGymi) sichtbar

## Technische Integration

### ✅ Google Analytics
- [ ] Tracking-ID AW-17312546230 ist aktiv
- [ ] Conversion-Tracking funktioniert
- [ ] Kein grüner Tracking-Code von alter Website

### ✅ Assets und Dateien
- [ ] Hero-Bild für Standortbestimmung lädt
- [ ] Team-Fotos in `/images/` vorhanden
- [ ] PDF-Downloads im `/downloads/` Ordner verfügbar
- [ ] Beispiel-Testaufgaben-Bilder laden korrekt

## Performance und SEO

### ✅ Ladezeiten
- [ ] Hauptseite lädt unter 3 Sekunden
- [ ] Bilder sind optimiert und komprimiert
- [ ] Keine 404-Fehler bei Asset-Requests
- [ ] Build-Prozess (`npm run build`) läuft fehlerfrei

### ✅ Meta-Daten
- [ ] Page-Titel enthalten "Standortbestimmung Schweiz"
- [ ] Meta-Descriptions sind angepasst
- [ ] Favicon zeigt korrekte Branding-Farben

## Responsive Design

### ✅ Mobile Ansicht
- [ ] Navigation funktioniert auf Smartphones
- [ ] Formular ist touch-freundlich
- [ ] Timeline-Darstellung scrollt horizontal
- [ ] Alle Texte sind lesbar auf kleinen Bildschirmen

### ✅ Tablet Ansicht
- [ ] Grid-Layouts brechen korrekt um
- [ ] Team-Karten sind gut proportioniert
- [ ] FAQ-Accordion funktioniert per Touch

## Cross-Browser Tests

### ✅ Browser-Kompatibilität
- [ ] Chrome: Alle Funktionen arbeiten
- [ ] Firefox: Keine Layout-Probleme
- [ ] Safari: Formular-Submission funktioniert
- [ ] Edge: Keine JavaScript-Fehler

## HubSpot Integration

### ✅ CRM-Verbindung
- [ ] Formular-Daten kommen in HubSpot an
- [ ] Kontakt-Properties sind korrekt gemappt
- [ ] Duplicate-Detection funktioniert
- [ ] API-Rate-Limits werden respektiert

## Fehlerbehandlung

### ✅ Error-States
- [ ] Formular zeigt Fehlermeldungen bei Validierungsproblemen
- [ ] API-Fehler werden benutzerfreundlich angezeigt
- [ ] 404-Seite ist erreichbar und branded
- [ ] Keine JavaScript-Konsolen-Errors

## Deployment

### ✅ Produktions-Bereitschaft
- [ ] Environment-Variablen sind gesetzt
- [ ] CORS-Headers konfiguriert
- [ ] SSL-Zertifikat aktiv
- [ ] Domain standortbestimmung-schweiz.ch zeigt auf richtige App

## Content-Vollständigkeit

### ✅ Alle Seiten haben Inhalte
- [ ] Keine Lorem-Ipsum-Texte mehr vorhanden
- [ ] Alle Bilder haben Alt-Texte
- [ ] Kontakt-Informationen sind korrekt
- [ ] PDF-Downloads funktionieren alle

**Kritische Punkte:**
- Formular-Integration testen (HubSpot-Verbindung)
- Mobile Navigation auf verschiedenen Geräten
- Performance unter Last (Google PageSpeed)
- Conversion-Tracking in Google Ads verifizieren