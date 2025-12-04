import ContactSection from "../sections/ContactSection.jsx";
import ContactCard from "../components/cards/contactcard.jsx";
import { useTranslation } from "../hooks/useTranslation.js";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <section className="section">
        <header className="section-header">
          <p className="section-label">{t("contact.label")}</p>
          <h1 className="section-title">{t("contact.title")}</h1>
          <p className="section-description">
            {t("contact.description")}
          </p>
        </header>

        <div className="services-grid contact-cards-grid">
          <ContactCard
            label={t("contact.servicesLabel")}
            title={t("contact.servicesTitle")}
            description={t("contact.servicesDescription")}
          />
          <ContactCard
            label={t("contact.consultingLabel")}
            title={t("contact.consultingTitle")}
            description={t("contact.consultingDescription")}
          />
          <ContactCard
            label={t("contact.supportLabel")}
            title={t("contact.supportTitle")}
            description={t("contact.supportDescription")}
          />
        </div>
      </section>
      <ContactSection />
    </>
  );
}

