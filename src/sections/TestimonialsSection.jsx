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
  
  // Calculate average rating
  const averageRating = testimonials.reduce((sum, testimonial) => sum + (testimonial.rating || 0), 0) / testimonials.length;

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
    <section id="testimonials" className="section testimonials testimonials-section-enhanced" ref={sectionRef}>
      <div className="testimonials-background-accent" aria-hidden="true" />
      
      <header 
        className={`section-header testimonials-header ${
          isHeaderVisible ? "testimonials-header-visible" : ""
        }`}
        ref={headerRef}
      >
        <div className="testimonials-header-top">
          <p className="section-label testimonials-label">{t("testimonials.label")}</p>
          <div className="testimonials-stat-badge">
            <span className="testimonials-stat-rating">{averageRating.toFixed(1)}</span>
            <div className="testimonials-stat-stars">
              {"★".repeat(Math.round(averageRating))}
            </div>
            <span className="testimonials-stat-label">{t("testimonials.average")}</span>
          </div>
        </div>
        <h2 className="section-title testimonials-title">{t("testimonials.title")}</h2>
        <p className="section-description testimonials-description">
          {t("testimonials.description")}
        </p>
      </header>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`testimonial-card-wrapper ${
              index === 2 ? "testimonial-card-featured" : ""
            } ${
              visibleCards.has(index) ? "testimonial-card-visible" : ""
            }`}
            data-index={index}
          >
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>
    </section>
  );
}