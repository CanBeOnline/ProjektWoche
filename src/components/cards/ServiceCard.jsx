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

  return (
    <article className={`service-card ${categoryClass}`}>
      <div className="service-card-header">
        <span className={`service-icon service-icon--${categoryColor.toLowerCase()}`} aria-hidden="true">
          {initials}
        </span>
        <span className="service-category">{categoryLabel}</span>
      </div>
      <h3 className="service-title">{serviceTitle}</h3>
      <p className="service-text">{serviceDescription}</p>
      <div className="service-card-footer">
        <Link to="/contact" className="service-card-link">
          {t("services.learnMore")}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </article>
  );
}

