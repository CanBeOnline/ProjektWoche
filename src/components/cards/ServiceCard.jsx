import { Link } from "react-router-dom";

const CATEGORY_COLORS = {
  Strategy: "primary",
  Experience: "secondary",
  Growth: "success",
  Identity: "warning",
};

export default function ServiceCard({ service }) {
  const initials = service.icon?.slice(0, 2).toUpperCase();
  const categoryColor = CATEGORY_COLORS[service.category] || "primary";
  const categoryClass = `service-card--${categoryColor.toLowerCase()}`;

  return (
    <article className={`service-card ${categoryClass}`}>
      <div className="service-card-header">
        <span className={`service-icon service-icon--${categoryColor.toLowerCase()}`} aria-hidden="true">
          {initials}
        </span>
        <span className="service-category">{service.category}</span>
      </div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-text">{service.description}</p>
      <div className="service-card-footer">
        <Link to="/contact" className="service-card-link">
          Learn more
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </article>
  );
}

