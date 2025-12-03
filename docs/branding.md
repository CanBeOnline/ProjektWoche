# Hype Media Agency – Brand Identity

## 1. Agenturname & Positionierung
- **Agenturname:** Hype Media Agency  
- **Claim:** „Progressive Digital Experiences for Ambitious Brands.“  
- **Fokus:** Conversion-orientierte Websites, Social Media Kampagnen, visuelle Identitäten.

## 2. Farbpalette (Quelle: `tailwind.config.js`)
| Token | Hex | Einsatz |
| --- | --- | --- |
| `primary-500` | `#0ea5e9` | Buttons, Links, aktive Elemente |
| `primary-900` | `#0c4a6e` | Headlines, dunkle Hintergründe |
| `secondary-500` | `#a855f7` | Akzentflächen, Icons |
| `secondary-900` | `#581c87` | Gradienten, Hover-States |
| `neutral-50` | `#fafafa` | Page Background |
| `neutral-900` | `#171717` | Body-Text |

> Weitere Abstufungen aus `primary`, `secondary`, `neutral` stehen für Shades/Hover/Fokus zur Verfügung.

## 3. Typografie (Fonts aus `/public/fonts`)
- **Headline:** Poppins (Bold/ExtraBold für H1/H2, Medium für Buttons/Labels)  
- **Body:** Inter Variable (Regular für Fließtext, Medium für Subheads)  
- **Fallback Stack:** `"Poppins", "Inter", "system-ui", "sans-serif"`

## 4. Tone of Voice
- Professionell, progressiv, lösungsorientiert.
- Kurze aktive Sätze, klare Benefits („Conversion“, „Performance“).
- Englisch für Hooks/Claims, Deutsch für erklärende Texte.
- Nutzt moderne Tech/Marketing-Vokabeln („Launch“, „Growth“, „Playbook“).

## 5. Bildsprache & Assets
- Hochwertige, kontrastreiche Mockups oder Studiofotografie.
- Hero: abstrakte 3D-Render oder Produktshots mit dunklem Hintergrund.
- Portfolio: reale Projektscreens, Social Media Frames, Case-Study Visuals.

## 6. Anwendung & Nächste Schritte
1. Design Tokens (CSS-Variablen) aus obiger Palette/Typo ableiten.
2. Globale Styles (`src/index.css`, `src/App.css`) auf Tokens umstellen.
3. Komponenten (Hero, Cards) an Tonalität & Typo anpassen.

