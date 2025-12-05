import { useState } from "react";
import ServiceModal from "./servicemodals.jsx";

export default function Branding() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      id: 1,
      title: "Branding Design",
      description: "Unsere Medienagentur entwickelt für Sie eine einzigartige Markenidentität, die Ihre Werte und Vision widerspiegelt. Wir erstellen Ihr komplettes Branding – von Logo-Design über Corporate Design bis hin zur visuellen Markensprache – für eine konsistente und unverwechselbare Markenpräsenz.",
      details: [
        "Entwicklung einer individuellen Markenidentität",
        "Logo-Design in verschiedenen Varianten und Formaten",
        "Corporate Design Manual für konsistente Markenführung",
        "Farbpalette und Typografie-System",
        "Visuelle Markensprache und Gestaltungsrichtlinien",
        "Brand Guidelines für alle Touchpoints"
      ],
      features: [
        "Markenanalyse und Strategieentwicklung",
        "Kreatives Logo-Design mit mehreren Konzepten",
        "Umfassendes Corporate Design",
        "Brand Guidelines Dokumentation",
        "Anwendung auf Print- und Digital-Medien",
        "Langfristige Markenberatung"
      ]
    },
    {
      id: 2,
      title: "Rebranding",
      description: "Ihre Marke braucht ein Update? Als Medienagentur unterstützen wir Sie beim kompletten Rebranding. Wir analysieren Ihre aktuelle Markenidentität, entwickeln eine moderne Strategie und setzen das Rebranding professionell um, damit Ihre Marke zukunftsfähig bleibt.",
      details: [
        "Umfassende Analyse der bestehenden Markenidentität",
        "Identifikation von Verbesserungspotenzialen",
        "Entwicklung einer modernen Markenstrategie",
        "Komplettes Rebranding von Logo bis Corporate Design",
        "Schrittweise Umsetzung für minimale Störungen",
        "Konsistente Anwendung auf allen Marken-Touchpoints"
      ],
      features: [
        "Marken-Audit und Marktforschung",
        "Strategische Neuausrichtung der Marke",
        "Modernes, zeitgemäßes Design",
        "Nahtlose Übergangsstrategie",
        "Kommunikationskonzept für das Rebranding",
        "Nachhaltige Markenführung"
      ]
    },
  ];

  const handleMoreInfo = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section id="branding" className="branding-container">
      <div className="branding-grid">
        {services.map((service) => (
          <article key={service.id} className="branding-card">
            <div className="branding-card-header">
              <span className="branding-icon" aria-hidden="true">
                {service.title.slice(0, 2).toUpperCase()}
              </span>
            </div>
            <h3 className="branding-title">{service.title}</h3>
            <p className="branding-text">{service.description}</p>
            <div className="branding-card-footer">
              <button
                onClick={() => handleMoreInfo(service)}
                className="branding-button"
              >
                Mehr Info
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </article>
        ))}
      </div>
      <ServiceModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        service={selectedService}
      />
    </section>
  );
}

