// src/sections/HeroSection.jsx
import heroImage from "../assets/images/HeroBild.webp";
import { useTranslation } from "../hooks/useTranslation.js";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="hero-with-background">
      <div className="hero-background" style={{ backgroundImage: `url(${heroImage})` }} />
      <div className="hero-overlay" />
      <div className="hero-content-wrapper">
        <div className="hero-content">
          <h1 className="hero-title">{t("hero.title")}</h1>
          <p className="hero-subtitle">
            {t("hero.subtitle")}
          </p>
          <a href="#contact" className="btn btn-primary hero-button">
            {t("hero.cta")}
          </a>
        </div>
      </div>
    </section>
  );
}