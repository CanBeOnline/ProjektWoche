export default function TestimonialCard({ testimonial }) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-header">
        {testimonial.image && (
          <img
            className="testimonial-avatar"
            src={testimonial.image}
            alt={testimonial.name}
            loading="lazy"
          />
        )}
        <div>
          <p className="testimonial-author">{testimonial.name}</p>
          <p className="testimonial-role">{testimonial.role}</p>
        </div>
      </div>
      <p className="testimonial-text">“{testimonial.text}”</p>
      {testimonial.rating && (
        <div className="testimonial-rating" aria-label={`Rating ${testimonial.rating} von 5`}>
          {"★".repeat(testimonial.rating)}
        </div>
      )}
    </article>
  );
}

