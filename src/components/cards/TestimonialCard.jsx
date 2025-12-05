import { useTranslation } from "../../hooks/useTranslation.js";

export default function TestimonialCard({ testimonial, variant = "default" }) {
  const { t } = useTranslation();
  const rating = testimonial.rating || 0;
  const ratingClass =
    rating === 5 ? "rating-5" : rating === 4 ? "rating-4" : "rating-3";

  const testimonialText = t(
    `testimonials.items.${testimonial.id}.text`,
    testimonial.text
  );
  const roleLabel = t(`testimonials.roles.${testimonial.role}`, testimonial.role);
  const ratingLabelTemplate = t(
    "testimonials.ratingLabel",
    `Rating {rating} out of 5`
  );
  const ratingLabel = ratingLabelTemplate.replace("{rating}", rating.toString());
  const verifiedLabel = t(
    "testimonials.verified",
    "Verified client feedback"
  );

  const isFeatured = variant === "featured";
  const isCompact = variant === "compact";

  return (
    <article
      className={`testimonial-card ${isFeatured ? "testimonial-card--featured" : ""
        } ${isCompact ? "testimonial-card--compact" : ""}`}
    >
      <div className="testimonial-card-top">
        <span className="testimonial-chip">{verifiedLabel}</span>

        {rating > 0 && (
          <div
            className={`testimonial-rating ${ratingClass}`}
            aria-label={ratingLabel}
          >
            <span className="testimonial-rating-number">
              {rating.toFixed(1)}
            </span>
            <div className="testimonial-rating-stars">
              {Array.from({ length: 5 }, (_, i) => (
                <svg
                  key={i}
                  width="18"
                  height="18"
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
          </div>
        )}
      </div>

      <div className="testimonial-quote">
        <div className="testimonial-quote-mark" aria-hidden="true">
          "
        </div>
        <p className="testimonial-text">{testimonialText}</p>
      </div>

      <div className="testimonial-header">
        {testimonial.image && (
          <div className="testimonial-avatar-ring">
            <img
              className="testimonial-avatar"
              src={testimonial.image}
              alt={testimonial.name}
              loading="lazy"
            />
          </div>
        )}
        <div className="testimonial-author-info">
          <p className="testimonial-author">{testimonial.name}</p>
          <p className="testimonial-role">{roleLabel}</p>
        </div>

        {isFeatured && (
          <span className="testimonial-featured-badge">
            {t("testimonials.featured", "Key result")}
          </span>
        )}
      </div>
    </article>
  );
}
