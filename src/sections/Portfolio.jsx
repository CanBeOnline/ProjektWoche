// src/sections/Portfolio.jsx
import { useTranslation } from "../hooks/useTranslation.js";

export default function Portfolio() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="section hero">
      <div className="hero-content">
        <p className="hero-label">{t("portfolio.label")}</p>
        <h1 className="hero-title">
          {t("portfolio.title")}
        </h1>
        <p className="hero-subtitle">
          {t("portfolio.subtitle")}
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            {t("portfolio.cta")}
          </a>
          <a href="#projects" className="btn btn-secondary">
            {t("portfolio.viewWork")}
          </a>
        </div>
      </div>

      <div className="hero-visual">
        {/* Hier später Illustration/Bild oder Fake-Dashboard */}
        <div className="hero-placeholder-card">
          <p>{t("portfolio.campaignPerformance")}</p>
          <span>{t("portfolio.engagement")}</span>
        </div>
      </div>
    </section>
  );
}