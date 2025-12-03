import ContactSection from "../sections/ContactSection.jsx";

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
      </section>
      <ContactSection />
    </>
  );
}

