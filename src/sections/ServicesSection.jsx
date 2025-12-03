import { services } from "../data/index.js";
import ServiceCard from "../components/cards/ServiceCard.jsx";

export default function ServicesSection() {
  return (
    <section id="services" className="section services">
      <header className="section-header">
        <p className="section-label">What we do</p>
        <h2 className="section-title">Services</h2>
        <p className="section-description">
          Wir kombinieren Strategie, Design und Technologie, um digitale Erlebnisse zu bauen, die Ergebnisse liefern.
        </p>
      </header>

      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}