import { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { services } from "../data/index.js";
import ServiceCard from "../components/cards/ServiceCard.jsx";
import { useTranslation } from "../hooks/useTranslation.js";
import serviceImage from "../assets/images/service.webp";

export default function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const { t } = useTranslation();

  const categories = useMemo(
    () => ["all", ...new Set(services.map((service) => service.category))],
    []
  );

  const filteredServices = useMemo(
    () =>
      activeCategory === "all"
        ? services
        : services.filter((service) => service.category === activeCategory),
    [activeCategory]
  );

  const promiseList = [
    t("services.promises.0", "Klarer Projektplan in 48h"),
    t("services.promises.1", "Launch in 6–8 Wochen, messbar ab Tag 1"),
    t("services.promises.2", "Cross-funktionales Team aus Strategy, UX, Content"),
  ];

  const highlightStats = [
    { value: "6–8 Wochen", label: t("services.stats.timeline", "Launch-Zyklus") },
    { value: "+23% CR", label: t("services.stats.conversion", "Ø Conversion-Lift") },
    { value: "<24h", label: t("services.stats.response", "Antwortzeit") },
  ];

  const visualKpis = [
    {
      value: t("services.visual.kpi1.value", "6–8 Wochen"),
      label: t("services.visual.kpi1.label", "Launch-Zyklus"),
    },
    {
      value: t("services.visual.kpi2.value", "+23% CR"),
      label: t("services.visual.kpi2.label", "Conversion-Lift"),
    },
    {
      value: t("services.visual.kpi3.value", "<24h"),
      label: t("services.visual.kpi3.label", "Antwortzeit"),
    },
  ];

  const visualBadge = t("services.visual.badge", "Launch-ready");
  const visualPunchline = t(
    "services.visual.punchline",
    "Klarer Plan, klare Sprints, messbare Ergebnisse ab Tag 1."
  );

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

    // Check if header is already visible
    if (headerRef.current) {
      const rect = headerRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsHeaderVisible(true);
      }
    }

    return () => {
      headerObserver.disconnect();
    };
  }, []);

  useEffect(() => {
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

    // Reset visible state when filter changes
    setVisibleCards(new Set());

    wrappers?.forEach((wrapper, index) => {
      wrapper.dataset.index = index;
      cardsObserver.observe(wrapper);
      const rect = wrapper.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setVisibleCards((prev) => new Set([...prev, index]));
      }
    });

    return () => {
      wrappers?.forEach((wrapper) => cardsObserver.unobserve(wrapper));
    };
  }, [filteredServices]);

  return (
    <section id="services" className="section services services-section-enhanced" ref={sectionRef}>
      <div className="services-background-accent" aria-hidden="true" />

      <div className="services-layout services-layout-single">
        <header
          className={`section-header services-header ${isHeaderVisible ? "services-header-visible" : ""}`}
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

          <div className="services-promise-list">
            {promiseList.map((promise, idx) => (
              <span key={idx} className="services-promise-chip">
                {promise}
              </span>
            ))}
          </div>

          <div className="services-actions">
            <Link to="/contact" className="btn btn-primary">
              {t("services.cta")}
            </Link>
            <Link to="/projects" className="btn btn-ghost">
              {t("services.viewCases", "Case Studies ansehen")}
            </Link>
          </div>

          <div className="services-stat-list">
            {highlightStats.map((stat) => (
              <div className="services-stat-card" key={stat.label}>
                <span className="services-stat-value">{stat.value}</span>
                <span className="services-stat-label-compact">{stat.label}</span>
              </div>
            ))}
          </div>
        </header>

        <div
          className={`services-visual ${isHeaderVisible ? "services-visual-visible" : ""}`}
          style={{ backgroundImage: `url(${serviceImage})` }}
          aria-hidden="true"
        >
          <div className="services-visual-overlay">
            <span className="services-visual-badge">{visualBadge}</span>
            <p className="services-visual-text">{visualPunchline}</p>
            <div className="services-visual-kpis">
              {visualKpis.map((item) => (
                <div className="services-visual-kpi" key={item.label}>
                  <span className="services-visual-kpi-value">{item.value}</span>
                  <span className="services-visual-kpi-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="services-panel">
          <div className="services-tabs" role="tablist" aria-label={t("services.label")}>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                className={`services-tab ${activeCategory === category ? "services-tab-active" : ""}`}
                onClick={() => setActiveCategory(category)}
              >
                {category === "all"
                  ? t("services.filterAll", "Alle")
                  : t(`services.categories.${category}`, category)}
              </button>
            ))}
          </div>

          <div className="services-grid">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className={`service-card-wrapper ${visibleCards.has(index) ? "service-card-visible" : ""}`}
                data-index={index}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}