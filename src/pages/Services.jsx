import ServicesSection from "../sections/ServicesSection.jsx";
import { useTranslation } from "../hooks/useTranslation.js";
import Webentwicklung from "../components/Webentwicklung.jsx";
import Branding from "../components/Branding.jsx";
import Technischebetreuung from "../components/Technischebetreuung.jsx";
import ServiceBild from "../assets/images/ServiceBild.jpg";
import { Link } from "react-router-dom";

export default function Services() {
  const { t } = useTranslation();

  return (
    <>
      <section className="section">
        <header className="section-header section-header-with-image-container">
          <p className="section-label">{t("services.title")}</p>
          <div className="section-header-with-image">
            <div className="section-header-content">
              <h1 className="section-title">{t("services.pageTitle")}</h1>
              <p className="section-description">
                {t("services.pageDescription")}
              </p>
            </div>
            <img 
              src={ServiceBild} 
              alt="Services" 
              className="section-header-image"
            />
          </div>
        </header>
      </section>
      <Webentwicklung />
      <Branding />
      <Technischebetreuung />
      
      <section className="section">
        <div className="project-cta-container">
          <div className="project-cta-content">
            <h2 className="project-cta-title">{t("services.projectCtaTitle")}</h2>
            <p className="project-cta-description">
              {t("services.projectCtaDescription")}
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary project-cta-button">
            {t("services.projectCtaButton")}
          </Link>
        </div>
      </section>
      
      <ServicesSection />
    </>
  );
}

