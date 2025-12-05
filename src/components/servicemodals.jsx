import { useEffect } from "react";

export default function ServiceModal({ isOpen, onClose, service }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  return (
    <div className="service-modal-overlay" onClick={onClose}>
      <div className="service-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="service-modal-close" onClick={onClose} aria-label="Modal schließen">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className="service-modal-header">
          <span className="service-modal-icon" aria-hidden="true">
            {service.title.slice(0, 2).toUpperCase()}
          </span>
          <h2 className="service-modal-title">{service.title}</h2>
        </div>

        <div className="service-modal-body">
          <p className="service-modal-description">{service.description}</p>
          
          {service.details && (
            <div className="service-modal-details">
              <h3 className="service-modal-subtitle">Was wir für Sie tun:</h3>
              <ul className="service-modal-list">
                {service.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          )}

          {service.features && (
            <div className="service-modal-features">
              <h3 className="service-modal-subtitle">Leistungsmerkmale:</h3>
              <ul className="service-modal-list">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="service-modal-footer">
          <button className="service-modal-cta" onClick={onClose}>
            Verstanden
          </button>
        </div>
      </div>
    </div>
  );
}

