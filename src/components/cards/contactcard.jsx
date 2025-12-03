export default function ContactCard({ label, title, description }) {
  return (
    <article className="service-card contact-card">
      <div className="service-card-header">
        <span className="service-category">{label}</span>
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-text">{description}</p>
    </article>
  );
}


