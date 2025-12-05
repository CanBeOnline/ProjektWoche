import { useState } from "react";
import ServiceModal from "./servicemodals.jsx";

export default function Webentwicklung() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      id: 1,
      title: "Webdesign & Webentwicklung",
      description: "Als Medienagentur entwickeln wir maßgeschneiderte Websites und Webanwendungen für Ihr Unternehmen. Von der ersten Konzeption bis zur finalen Umsetzung begleiten wir Sie durch den gesamten Prozess und erstellen moderne, responsive und benutzerfreundliche Lösungen.",
      details: [
        "Individuelles Webdesign, das perfekt zu Ihrer Marke passt",
        "Responsive Entwicklung für alle Geräte (Desktop, Tablet, Mobile)",
        "Moderne Web-Technologien und Frameworks für optimale Performance",
        "Benutzerfreundliche Navigation und intuitive Bedienung",
        "Integration von Content-Management-Systemen (CMS)",
        "Optimierung für schnelle Ladezeiten und bessere User Experience"
      ],
      features: [
        "Maßgeschneiderte Konzeption und Planung",
        "Professionelles Design und Layout",
        "Technische Umsetzung mit modernen Standards",
        "Qualitätssicherung und Testing",
        "Schulung und Dokumentation",
        "Langfristige Betreuung und Support"
      ]
    },
    {
      id: 2,
      title: "Website-Redesign",
      description: "Ihre bestehende Website veraltet? Wir als Medienagentur analysieren Ihre aktuelle Online-Präsenz und erstellen ein komplett neues Design, das höhere Conversion-Raten und eine bessere Nutzererfahrung ermöglicht. Ihr Website-Redesign in professionellen Händen.",
      details: [
        "Umfassende Analyse Ihrer bestehenden Website",
        "Identifizierung von Schwachstellen und Verbesserungspotenzialen",
        "Entwicklung eines modernen, zeitgemäßen Designs",
        "Mobile-First Ansatz für optimale Mobile-Nutzung",
        "Content-Optimierung und strukturierte Informationsarchitektur",
        "Verbesserung der Conversion-Rate durch optimierte User Journey"
      ],
      features: [
        "Detaillierte Bestandsanalyse",
        "Konzeption des neuen Designs",
        "Nahtlose Überführung bestehender Inhalte",
        "SEO-Optimierung während des Redesigns",
        "A/B-Testing für optimale Ergebnisse",
        "Smooth Launch ohne Downtime"
      ]
    },
    {
      id: 3,
      title: "Landing Page Entwicklung",
      description: "Erfolgreiche Landing Pages sind unser Metier. Wir erstellen hochkonvertierende Landing Pages mit fokussiertem Design, klaren Call-to-Actions und optimierten Conversion-Funktionen. Lassen Sie uns Ihre Landing Page entwickeln und Besucher zu Kunden machen.",
      details: [
        "Zielgerichtete Landing Pages für spezifische Kampagnen",
        "Conversion-optimiertes Design mit klarem Call-to-Action",
        "A/B-Testing für maximale Conversion-Rate",
        "Integration von Lead-Generierung und Formularen",
        "Schnelle Ladezeiten für bessere Performance",
        "Mobile-optimiert für alle Endgeräte"
      ],
      features: [
        "Conversion-Focused Design",
        "Professionelle Copywriting-Unterstützung",
        "Integration von Analytics und Tracking",
        "Lead-Magnete und Formular-Optimierung",
        "Social Proof und Testimonials",
        "Kontinuierliche Optimierung basierend auf Daten"
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
    <section id="webentwicklung" className="webentwicklung-container">
      <div className="webentwicklung-grid">
        {services.map((service) => (
          <article key={service.id} className="webentwicklung-card">
            <div className="webentwicklung-card-header">
              <span className="webentwicklung-icon" aria-hidden="true">
                {service.title.slice(0, 2).toUpperCase()}
              </span>
            </div>
            <h3 className="webentwicklung-title">{service.title}</h3>
            <p className="webentwicklung-text">{service.description}</p>
            <div className="webentwicklung-card-footer">
              <button
                onClick={() => handleMoreInfo(service)}
                className="webentwicklung-button"
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

