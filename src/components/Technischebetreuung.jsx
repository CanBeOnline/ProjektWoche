import { useState } from "react";
import ServiceModal from "./servicemodals.jsx";

export default function Marketing() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      id: 1,
      title: "Marketing & Sichtbarkeit",
      description: "Als Medienagentur sorgen wir dafür, dass Ihre Website gefunden wird. Wir entwickeln maßgeschneiderte Marketing-Strategien, optimieren Ihre Präsenz in Suchmaschinen und Social Media und steigern so Ihre Online-Sichtbarkeit, Reichweite und Markenbekanntheit.",
      details: [
        "SEO-Optimierung für bessere Rankings in Suchmaschinen",
        "Social Media Marketing und Content-Strategien",
        "Google Ads und bezahlte Werbung",
        "Content-Marketing für mehr Reichweite",
        "E-Mail-Marketing Kampagnen",
        "Online-Reputationsmanagement"
      ],
      features: [
        "Individuelle Marketing-Strategie-Entwicklung",
        "Suchmaschinenoptimierung (SEO)",
        "Social Media Management",
        "Kampagnenplanung und -umsetzung",
        "Performance-Monitoring und Reporting",
        "Kontinuierliche Optimierung basierend auf Daten"
      ]
    },
    {
      id: 2,
      title: "Analytic & Tracking",
      description: "Daten sind der Schlüssel zum Erfolg. Wir als Medienagentur implementieren umfassende Analytics-Lösungen für Ihre Website, erstellen aussagekräftige Reports und helfen Ihnen dabei, die Performance Ihrer digitalen Maßnahmen zu verstehen, zu analysieren und kontinuierlich zu optimieren.",
      details: [
        "Google Analytics Installation und Konfiguration",
        "Event-Tracking und Conversion-Messung",
        "E-Commerce Tracking für Online-Shops",
        "Custom Dashboards und Reports",
        "Heatmaps und User-Behavior-Analysen",
        "A/B-Testing und Conversion-Optimierung"
      ],
      features: [
        "Vollständige Analytics-Implementierung",
        "Detaillierte Performance-Reports",
        "Datenanalyse und Insights",
        "Conversion-Tracking und Optimierung",
        "Regelmäßige Reporting-Meetings",
        "Handlungsempfehlungen basierend auf Daten"
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
    <div className="technischebetreuung-container">
      <div className="technischebetreuung-grid">
        {services.map((service) => (
          <article key={service.id} className="technischebetreuung-card">
            <div className="technischebetreuung-card-header">
              <span className="technischebetreuung-icon" aria-hidden="true">
                {service.title.slice(0, 2).toUpperCase()}
              </span>
            </div>
            <h3 className="technischebetreuung-title">{service.title}</h3>
            <p className="technischebetreuung-text">{service.description}</p>
            <div className="technischebetreuung-card-footer">
              <button
                onClick={() => handleMoreInfo(service)}
                className="technischebetreuung-button"
              >
                Mehr Info
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
    </div>
  );
}

