1) BRANDING FESTLEGEN (Schritt 1 – jetzt als Nächstes)

Bevor wir Komponenten bauen, wird definiert:

1.1 Agenturname

Damit alles konsistent ist (Hero, Logo, Farben etc.)

1.2 Farbpalette

Modern, digital, hochwertig.

1.3 Fonts

Headline-Font + Body-Font, ideal für Web.

1.4 Tone of Voice

Professionell, progressiv, modern.

Ergebnis:

→ Eine fertige Brand Identity.

⸻

2) SEITENSTRUKTUR DEFINIEREN (Schritt 2)

Basierend auf Creative Digital Agency:

Sections:
	1.	Hero
	2.	Services
	3.	Portfolio / Projekte
	4.	Testimonials
	5.	Über uns / Team (optional)
	6.	Kontaktformular
	7.	Footer

Sitemap:
	•	/ (Home)
	•	/projects/:id (Project Detail)
	•	/services optional
	•	/contact optional

Danach erstellen wir die React-Ordnerstruktur exakt passend zur Sitemap.

⸻

3) JSON-DATEN DEFINIEREN (Schritt 3)

Für eure Aufgabe müssen folgende Daten per JSON verwaltet werden:

3.1 services.json
	•	Titel
	•	Beschreibung
	•	Icon
	•	Kategorie

3.2 projects.json
	•	Projektname
	•	Beschreibung
	•	Thumbnail
	•	Tags
	•	Live-Link (optional)
	•	Detail-Bilder

3.3 testimonials.json
	•	Name
	•	Rolle
	•	Text
	•	Rating
	•	Bild optional

→ Diese JSON-Dateien legen wir in src/data/ ab.

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
