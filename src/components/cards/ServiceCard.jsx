export default function ServiceCard({ service }) {
  const initials = service.icon?.slice(0, 2).toUpperCase();

  return (
    <article className="service-card">
      <div className="service-card-header">
        <span className="service-icon" aria-hidden="true">
          {initials}
        </span>
        <span className="service-category">{service.category}</span>
      </div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-text">{service.description}</p>
    </article>
  );
}

