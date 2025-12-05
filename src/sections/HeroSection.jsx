// src/sections/HeroSection.jsx
import heroImage from "../assets/images/HeroBild.webp";
import { useTranslation } from "../hooks/useTranslation.js";

export default function HeroSection() {
  const { t } = useTranslation();

  const metrics = [
    { value: "20+", label: t("hero.metrics.projects") },
    { value: "<24h", label: t("hero.metrics.response") },
    { value: "+132%", label: t("hero.metrics.engagement") },
  ];

  return (
    <section className="hero-with-background hero-enhanced">
      <div className="hero-background" style={{ backgroundImage: `url(${heroImage})` }} />
      <div className="hero-overlay" />

      <div className="hero-content-wrapper">
        <div className="hero-grid">
          <div className="hero-content hero-copy">
            <div className="hero-pill hero-animate-fade">{t("hero.badge")}</div>

            <h1 className="hero-title hero-animate-slide">{t("hero.title")}</h1>

            <p className="hero-subtitle hero-animate-fade-delay">
              {t("hero.subtitle")}
            </p>

            <div className="hero-actions hero-animate-fade-delay-2">
              <a href="#contact" className="btn btn-primary hero-button">
                {t("hero.cta")}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#projects" className="btn btn-secondary hero-button-secondary">
                {t("hero.secondaryCta")}
              </a>
            </div>

            <div className="hero-trust hero-animate-fade-delay-3">
              <span className="hero-trust-dot" />
              <p className="hero-trust-text">{t("hero.trust")}</p>
            </div>

            <div className="hero-metrics hero-animate-fade-delay-4">
              {metrics.map((metric, index) => (
                <div
                  className="hero-metric-card"
                  key={metric.label}
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <span className="hero-metric-value">{metric.value}</span>
                  <span className="hero-metric-label">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual hero-animate-scale">
            <div className="hero-visual-glow" />
            <div className="hero-visual-card">
              <div className="hero-visual-header">
                <span className="hero-visual-pill">{t("portfolio.label")}</span>
                <p className="hero-visual-subtitle">{t("portfolio.title")}</p>
              </div>

              <div className="hero-visual-metric">
                <span className="hero-visual-value">+132%</span>
                <span className="hero-visual-label">{t("hero.engagementLabel")}</span>
              </div>

              <div className="hero-visual-footer">
                <span className="hero-visual-dot" />
                <p className="hero-visual-footnote">{t("hero.visualFootnote")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}