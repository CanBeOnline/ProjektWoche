// src/sections/ServicesSection.jsx

const SERVICES = [
  {
    id: "webdesign",
    title: "Web Design & Development",
    description:
      "Conversion-optimierte Websites mit klarem Fokus auf Performance und Nutzererlebnis.",
  },
  {
    id: "social",
    title: "Social Media & Content",
    description:
      "Strategie, Content-Plan und kreative Assets für TikTok, Instagram & Co.",
  },
  {
    id: "branding",
    title: "Branding & Visual Identity",
    description:
      "Markenauftritte, die im Kopf bleiben – Logo, Farben, Typografie und Guidelines.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section services">
      <header className="section-header">
        <p className="section-label">What we do</p>
        <h2 className="section-title">Services</h2>
        <p className="section-description">
          Wir kombinieren Strategie, Design und Technologie, um digitale
          Erlebnisse zu bauen, die Ergebnisse liefern.
        </p>
      </header>

      <div className="services-grid">
        {SERVICES.map((service) => (
          <article key={service.id} className="service-card">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-text">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}