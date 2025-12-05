import { Link } from "react-router-dom";
import { useTranslation } from "../../hooks/useTranslation.js";

const CATEGORY_COLORS = {
  Strategy: "primary",
  Experience: "secondary",
  Growth: "success",
  Identity: "warning",
};

export default function ServiceCard({ service }) {
  const { t } = useTranslation();
  const initials = service.icon?.slice(0, 2).toUpperCase();
  const categoryColor = CATEGORY_COLORS[service.category] || "primary";
  const categoryClass = `service-card--${categoryColor.toLowerCase()}`;

  // Übersetzungen für Service-Daten
  const serviceTitle = t(`services.items.${service.id}.title`, service.title);
  const serviceDescription = t(`services.items.${service.id}.description`, service.description);
  const categoryLabel = t(`services.categories.${service.category}`, service.category);
  const serviceOutcomes = t(`services.items.${service.id}.outcomes`, service.outcomes || []);
  const quickFact = t(`services.items.${service.id}.quickFact`, service.quickFact || "");
  const audience = t(`services.items.${service.id}.audience`, service.audience || "");
  const primaryCta = t("services.primaryCta", "Discovery Call (20 Min)");
  const secondaryCta = service.detailAnchor
    ? t("services.secondaryCta", "Details ansehen")
    : t("services.learnMore", "Mehr erfahren");

  const secondaryLink = service.detailAnchor
    ? `/services#${service.detailAnchor}`
    : "/contact";

  return (
    <article className={`service-card ${categoryClass}`}>
      <div className="service-card-header">
        <div className="service-card-meta">
          <span className={`service-icon service-icon--${categoryColor.toLowerCase()}`} aria-hidden="true">
            {initials}
          </span>
          <div className="service-card-meta-text">
            <span className="service-category">{categoryLabel}</span>
            {quickFact && <span className="service-quickfact">{quickFact}</span>}
          </div>
        </div>
      </div>

      <div className="service-card-body">
        <h3 className="service-title">{serviceTitle}</h3>
        <p className="service-text">{serviceDescription}</p>
        {audience && <p className="service-audience">{audience}</p>}

        {Array.isArray(serviceOutcomes) && serviceOutcomes.length > 0 && (
          <ul className="service-outcomes">
            {serviceOutcomes.slice(0, 3).map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="service-card-actions">
        <Link to="/contact" className="btn btn-primary btn-compact">
          {primaryCta}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <Link to={secondaryLink} className="btn btn-ghost btn-compact">
          {secondaryCta}
        </Link>
      </div>
    </article>
  );
}

