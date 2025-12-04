import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { services } from "../data/index.js";
import ServiceCard from "../components/cards/ServiceCard.jsx";
import { useTranslation } from "../hooks/useTranslation.js";

export default function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const { t } = useTranslation();

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

    const wrappers = sectionRef.current?.querySelectorAll(".service-card-wrapper");
    
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
    <section id="services" className="section services services-section-enhanced" ref={sectionRef}>
      <div className="services-background-accent" aria-hidden="true" />
      
      <header 
        className={`section-header services-header ${
          isHeaderVisible ? "services-header-visible" : ""
        }`}
        ref={headerRef}
      >
        <div className="services-header-top">
          <p className="section-label services-label">{t("services.label")}</p>
          <div className="services-stat-badge">
            <span className="services-stat-number">{services.length}</span>
            <span className="services-stat-label">{t("services.servicesCount")}</span>
          </div>
        </div>
        <h2 className="section-title services-title">{t("services.title")}</h2>
        <p className="section-description services-description">
          {t("services.description")}
        </p>
      </header>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`service-card-wrapper ${
              visibleCards.has(index) ? "service-card-visible" : ""
            }`}
            data-index={index}
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>

      <div className="services-cta">
        <Link to="/contact" className="btn btn-primary services-cta-button">
          {t("services.cta")}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </section>
  );
}