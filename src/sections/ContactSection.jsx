// src/sections/ContactSection.jsx
import { useState } from "react";
import { useTranslation } from "../hooks/useTranslation.js";

export default function ContactSection() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    salutation: "",
    companyName: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    budget: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormValid =
    form.salutation.trim() &&
    form.firstName.trim() &&
    form.lastName.trim() &&
    form.email.trim() &&
    form.message.trim();

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    
    // Simuliere API-Call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    console.log("Contact form submitted:", form);
    alert(t("contact.success"));
    
    setIsSubmitting(false);
    // Optional: Formular zurücksetzen
    // setForm({ firstName: "", lastName: "", email: "", phone: "", message: "", budget: "" });
  }

  return (
    <section id="contact" className="section contact">
      <header className="section-header">
        <p className="section-label">{t("contact.label")}</p>
        <h2 className="section-title">{t("contact.formTitle")}</h2>
        <p className="section-description">
          {t("contact.formDescription")}
        </p>
      </header>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-row-grid">
          <div className="form-row">
            <label htmlFor="salutation">
              {t("contact.salutation")} <span style={{ color: "var(--color-error-500)" }}>{t("contact.required")}</span>
              <select
                id="salutation"
                name="salutation"
                value={form.salutation}
                onChange={handleChange}
                required
              >
                <option value="">{t("contact.salutationSelect")}</option>
                <option value="mr">{t("contact.salutationMr")}</option>
                <option value="mrs">{t("contact.salutationMrs")}</option>
                <option value="diverse">{t("contact.salutationDiverse")}</option>
              </select>
            </label>
          </div>

          <div className="form-row">
            <label htmlFor="companyName">
              {t("contact.companyName")}{" "}
              <span style={{ color: "var(--color-text-muted)", fontSize: "var(--text-xs)" }}>
                {t("contact.optional")}
              </span>
              <input
                id="companyName"
                name="companyName"
                type="text"
                placeholder={t("contact.companyNamePlaceholder")}
                value={form.companyName}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>

        <div className="contact-form-row-grid">
          <div className="form-row">
            <label htmlFor="firstName">
              {t("contact.firstName")} <span style={{ color: "var(--color-error-500)" }}>{t("contact.required")}</span>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder={t("contact.firstNamePlaceholder")}
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="form-row">
            <label htmlFor="lastName">
              {t("contact.lastName")} <span style={{ color: "var(--color-error-500)" }}>{t("contact.required")}</span>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder={t("contact.lastNamePlaceholder")}
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </label>
          </div>
        </div>

        <div className="contact-form-row-grid">
          <div className="form-row">
            <label htmlFor="email">
              {t("contact.email")} <span style={{ color: "var(--color-error-500)" }}>{t("contact.required")}</span>
              <input
                id="email"
                name="email"
                type="email"
                placeholder={t("contact.emailPlaceholder")}
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="form-row">
            <label htmlFor="phone">
              {t("contact.phone")}{" "}
              <span style={{ color: "var(--color-text-muted)", fontSize: "var(--text-xs)" }}>
                {t("contact.optional")}
              </span>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder={t("contact.phonePlaceholder")}
                value={form.phone}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>

        <div className="form-row">
          <label htmlFor="budget">
            {t("contact.budget")}{" "}
            <span style={{ color: "var(--color-text-muted)", fontSize: "var(--text-xs)" }}>
              {t("contact.optional")}
            </span>
            <select
              id="budget"
              name="budget"
              value={form.budget}
              onChange={handleChange}
            >
              <option value="">{t("contact.budgetSelect")}</option>
              <option value="under5k">{t("contact.budgetUnder5k")}</option>
              <option value="5k-15k">{t("contact.budget5k15k")}</option>
              <option value="15k-plus">{t("contact.budget15kPlus")}</option>
            </select>
          </label>
        </div>

        <div className="form-row">
          <label htmlFor="message">
            {t("contact.message")} <span style={{ color: "var(--color-error-500)" }}>{t("contact.required")}</span>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder={t("contact.messagePlaceholder")}
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div style={{ marginTop: "var(--space-2)", textAlign: "right" }}>
          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="btn btn-primary"
          >
            {isSubmitting ? t("contact.submitting") : t("contact.submit")}
          </button>
        </div>
      </form>
    </section>
  );
}