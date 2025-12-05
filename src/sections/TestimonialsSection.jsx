import { useState, useEffect, useRef } from "react";
import { testimonials } from "../data/index.js";
import TestimonialCard from "../components/cards/TestimonialCard.jsx";
import { useTranslation } from "../hooks/useTranslation.js";

export default function TestimonialsSection() {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  const { t } = useTranslation();

  const averageRating =
    testimonials.reduce(
      (sum, testimonial) => sum + (testimonial.rating || 0),
      0
    ) / testimonials.length;

  const featuredTestimonial = testimonials[0];
  const otherTestimonials = testimonials.slice(1);

  useEffect(() => {
    // Header Animation Observer
    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsHeaderVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

    // Cards Animation Observer
    const cardsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const wrappers = sectionRef.current?.querySelectorAll(".testimonial-card-wrapper");

    // Check if cards are already visible on mount
    wrappers?.forEach((wrapper, index) => {
      cardsObserver.observe(wrapper);
      // Fallback: Make visible if already in viewport
      const rect = wrapper.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setVisibleCards((prev) => new Set([...prev, index]));
      }
    });

    // Check if header is already visible
    if (headerRef.current) {
      const rect = headerRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsHeaderVisible(true);
      }
    }

    return () => {
      headerObserver.disconnect();
      wrappers?.forEach((wrapper) => cardsObserver.unobserve(wrapper));
    };
  }, []);

  return (
    <section
      id="testimonials"
      className="section testimonials testimonials-section-enhanced"
      ref={sectionRef}
    >
      <div className="testimonials-background-accent" aria-hidden="true" />

      <header
        className={`section-header testimonials-header ${isHeaderVisible ? "testimonials-header-visible" : ""
          }`}
        ref={headerRef}
      >
        <div className="testimonials-header-top">
          <p className="section-label testimonials-label">{t("testimonials.label")}</p>
        </div>
        <h2 className="section-title testimonials-title">{t("testimonials.title")}</h2>
        <p className="section-description testimonials-description">
          {t("testimonials.description")}
        </p>
      </header>

      {featuredTestimonial && (
        <div className="testimonials-feature">
          <div
            className={`testimonial-card-wrapper testimonial-card-featured ${visibleCards.has(0) ? "testimonial-card-visible" : ""
              }`}
            data-index={0}
          >
            <TestimonialCard
              testimonial={featuredTestimonial}
              variant="featured"
            />
          </div>

          <div className="testimonials-meta-panel">
            <div className="testimonials-meta-top">
              <span className="testimonial-chip">{t("testimonials.verified")}</span>
              <div
                className="testimonials-stat-badge testimonials-stat-badge-compact"
                aria-label={t("testimonials.average")}
              >
                <span className="testimonials-stat-rating">
                  {averageRating.toFixed(1)}
                </span>
                <div className="testimonials-stat-stars">
                  {"★".repeat(Math.round(averageRating))}
                </div>
                <span className="testimonials-stat-label">
                  {t("testimonials.average")}
                </span>
              </div>
            </div>

            <p className="testimonials-meta-text">{t("testimonials.punchline")}</p>

            <div className="testimonials-meta-actions">
              <a
                className="btn btn-primary btn-sm"
                href="#contact"
                aria-label={`${t("testimonials.cta")} – ${t("testimonials.ctaNote")}`}
              >
                {t("testimonials.cta")}
              </a>
              <span className="testimonials-meta-note">{t("testimonials.ctaNote")}</span>
            </div>
          </div>
        </div>
      )}

      <div
        className="testimonials-grid testimonials-scroller"
        tabIndex={0}
        aria-label={t("testimonials.title")}
      >
        {otherTestimonials.map((testimonial, index) => {
          const dataIndex = index + 1;
          return (
            <div
              key={testimonial.id}
              className={`testimonial-card-wrapper ${visibleCards.has(dataIndex) ? "testimonial-card-visible" : ""
                }`}
              data-index={dataIndex}
            >
              <TestimonialCard testimonial={testimonial} variant="compact" />
            </div>
          );
        })}
      </div>
    </section>
  );
}