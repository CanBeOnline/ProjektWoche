import ServicesSection from "../sections/ServicesSection.jsx";

export default function Services() {
  return (
    <>
      <section className="section">
        <header className="section-header">
          <p className="section-label">Services</p>
          <h1 className="section-title">Unser Leistungsportfolio</h1>
          <p className="section-description">
            Strategie, Design und Growth Playbooks – zugeschnitten auf ambitionierte Marken.
          </p>
        </header>
      </section>
      <ServicesSection />
    </>
  );
}

