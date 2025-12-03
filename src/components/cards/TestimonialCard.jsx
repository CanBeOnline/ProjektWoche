export default function TestimonialCard({ testimonial }) {
  const rating = testimonial.rating || 0;
  const ratingClass = rating === 5 ? "rating-5" : rating === 4 ? "rating-4" : "rating-3";

  return (
    <article className="testimonial-card">
      <div className="testimonial-quote-mark" aria-hidden="true">"</div>
      
      <div className="testimonial-content">
        <p className="testimonial-text">{testimonial.text}</p>
        
        {rating > 0 && (
          <div className={`testimonial-rating ${ratingClass}`} aria-label={`Rating ${rating} von 5`}>
            {Array.from({ length: 5 }, (_, i) => (
              <svg
                key={i}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill={i < rating ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="1.5"
                className="testimonial-star"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
        )}

        <div className="testimonial-header">
          {testimonial.image && (
            <img
              className="testimonial-avatar"
              src={testimonial.image}
              alt={testimonial.name}
              loading="lazy"
            />
          )}
          <div className="testimonial-author-info">
            <p className="testimonial-author">{testimonial.name}</p>
            <p className="testimonial-role">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

