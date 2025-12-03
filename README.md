1) BRANDING FESTLEGEN (Schritt 1 – erledigt)

Branding-Entscheidungen sind dokumentiert (`docs/branding.md`):

1.1 Agenturname  
**Hype Media Agency** inkl. Claim „Progressive Digital Experiences for Ambitious Brands“.

1.2 Farbpalette  
Nutzung der `primary`, `secondary`, `neutral` Skalen aus `tailwind.config.js` (z. B. Primary 500 `#0ea5e9`, Secondary 500 `#a855f7`).

1.3 Fonts  
Headlines: **Poppins** (Bold/ExtraBold), Body: **Inter Variable** (Regular/Medium), Fallback: system sans.

1.4 Tone of Voice  
Professionell, progressiv, modern – kurze aktive Sätze, Fokus auf Ergebnisse.

Ergebnis:

→ Fertige Brand Identity (siehe `docs/branding.md`).

⸻

2) SEITENSTRUKTUR DEFINIEREN (Schritt 2 – erledigt)

Umgesetzt über React Router (siehe `src/App.jsx`):

Sections auf der Startseite:
	1.	Hero
	2.	Services
	3.	Projects (Teaser)
	4.	Testimonials
	5.	Kontaktformular
	6.	Footer

Routen/Sitemap:
	•	/ (Home mit allen Sections)
	•	/services (eigene Services-Seite, nutzt `ServicesSection`)
	•	/projects (Projektübersicht)
	•	/projects/:id (Project Detail)
	•	/contact (Kontakt-Seite mit Formular)
	•	* (Fallback → NotFound)

Layout via `MainLayout` (Header/Footer) + `Outlet`-ähnlicher Wrapper (Kinder vom Router).

⸻

3) JSON-DATEN DEFINIEREN (Schritt 3 – erledigt)

Alle Datensätze liegen jetzt in `src/data/` und werden zentral über `src/data/index.js` exportiert (inkl. Helpern wie `getProjectById`).

3.1 `services.json`
	•	4 Services mit Titel, Beschreibung, Icon-Code (Initialen) & Kategorie  
	•	`ServicesSection` nutzt `ServiceCard`, so dass auch die Seite `/services` automatisch mitzieht.

3.2 `projects.json`
	•	3 Case Studies mit Beschreibung, Tags, Unsplash-Thumbnails, Detailbildern & Live-Link  
	•	Verwendung in Startseiten-Section, `/projects` Übersicht sowie `/projects/:id`.

3.3 `testimonials.json`
	•	Name, Rolle, Text, Rating (1–5) und Bild-URL  
	•	`TestimonialCard` mappt die Daten im Grid + zeigt Rating.

→ Erweiterungen passieren nur über JSON; Komponenten konsumieren alles über das zentrale Data-Layer.

⸻

4) DESIGN & LAYOUT (Schritt 4)

Bevor wir Komponenten bauen, definieren wir:

4.1 Grid-System

z. B. 12-Spalten oder einfach Flex/Grid.

4.2 Spacing Scale

z. B. 8, 16, 24, 32px.

4.3 Komponenten-Styling-System
	•	CSS-Variablen
	•	oder einfach App.css
	•	oder einzelne CSS-Modul-Dateien

4.4 Bilder/Assets

Wir bestimmen, welche Platzhalterbilder wir verwenden.

⸻

5) ENTWICKLUNG (Schritt 5 – Coding beginnt)

Komponenten werden nacheinander gebaut:

5.1 Setup
	•	Layout (Header, Footer)
	•	Hero Section

5.2 JSON-Anbindung
	•	ServicesSection → liest aus services.json
	•	ProjectsSection → liest aus projects.json
	•	TestimonialsSection → liest aus testimonials.json

5.3 Routing
	•	Project Detail Page
	•	optional Services Page

5.4 Kontaktformular
	•	Validierung
	•	Struktur

5.5 Feinschliff
	•	Responsiveness
	•	Animationen
	•	Farben/Abstände

⸻

6) FINISHING – Präsentation & Dokumentation (Schritt 6)

Für die finale Abgabe:
	•	README.md
	•	kurze Dokumentation
	•	Präsentation (2–3 Slides)
	•	Was wurde wie umgesetzt?
