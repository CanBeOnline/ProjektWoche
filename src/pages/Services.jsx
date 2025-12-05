import ServicesSection from "../sections/ServicesSection.jsx";
import { useTranslation } from "../hooks/useTranslation.js";
import Webentwicklung from "../components/Webentwicklung.jsx";
import Branding from "../components/Branding.jsx";
import Technischebetreuung from "../components/Technischebetreuung.jsx";

export default function Services() {
  const { t } = useTranslation();

  return (
    <>
      <section className="section">
        <header className="section-header">
          <p className="section-label">{t("services.title")}</p>
          <h1 className="section-title">{t("services.pageTitle")}</h1>
          <p className="section-description">
            {t("services.pageDescription")}
          </p>
        </header>
      </section>
      <Webentwicklung />
      <Branding />
      <Technischebetreuung />
      <ServicesSection />
    </>
  );
}

