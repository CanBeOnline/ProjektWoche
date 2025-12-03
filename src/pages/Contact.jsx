import ContactSection from "../sections/ContactSection.jsx";
import ContactCard from "../components/cards/contactcard.jsx";

export default function Contact() {
  return (
    <>
      <section className="section">
        <header className="section-header">
          <p className="section-label">Kontakt</p>
          <h1 className="section-title">Lass uns über dein Projekt sprechen</h1>
          <p className="section-description">
            Buche uns für Launches, Rebrands oder Always-on Content. Wir antworten innerhalb von 24 Stunden.
          </p>
        </header>

        <div className="services-grid contact-cards-grid">
          <ContactCard
            label="Leistungen"
            title="Was wir für dich umsetzen"
            description="Websites, Social Media, Kampagnen und Branding – wir schnüren dir ein Paket, das zu deinem Budget und deiner Zielgruppe passt."
          />
          <ContactCard
            label="Beratung"
            title="Kompetente Einschätzung vorab"
            description="Wir hören zu, stellen die richtigen Fragen und geben dir eine ehrliche Empfehlung, welche Maßnahmen wirklich sinnvoll sind."
          />
          <ContactCard
            label="Support"
            title="Begleitung bestehender Projekte"
            description="Du hast bereits mit uns gearbeitet? Wir unterstützen dich bei Optimierungen, Erweiterungen und laufender Betreuung."
          />
        </div>
      </section>
      <ContactSection />
    </>
  );
}

