// src/sections/ContactSection.jsx
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    budget: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormValid =
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
    alert("Danke für deine Anfrage – wir melden uns bald bei Ihnen!");
    
    setIsSubmitting(false);
    // Optional: Formular zurücksetzen
    // setForm({ firstName: "", lastName: "", email: "", phone: "", message: "", budget: "" });
  }

  return (
    <section id="contact" className="section contact">
      <header className="section-header">
        <p className="section-label">Kontakt</p>
        <h2 className="section-title">Stellen Sie uns eine Anfrage</h2>
        <p className="section-description">
          Erzählen Sie uns kurz von Ihrem Projekt – wir melden uns mit einer Einschätzung zurück.
        </p>
      </header>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-row-grid">
          <div className="form-row">
            <label htmlFor="firstName">
              Vorname <span style={{ color: "var(--color-error-500)" }}>*</span>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Max"
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="form-row">
            <label htmlFor="lastName">
              Nachname <span style={{ color: "var(--color-error-500)" }}>*</span>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Mustermann"
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
              E‑Mail Adresse <span style={{ color: "var(--color-error-500)" }}>*</span>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="max.mustermann@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="form-row">
            <label htmlFor="phone">
              Telefonnummer{" "}
              <span style={{ color: "var(--color-text-muted)", fontSize: "var(--text-xs)" }}>
                (optional)
              </span>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+49 123 456789"
                value={form.phone}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>

        <div className="form-row">
          <label htmlFor="budget">
            Budget{" "}
            <span style={{ color: "var(--color-text-muted)", fontSize: "var(--text-xs)" }}>
              (optional)
            </span>
            <select
              id="budget"
              name="budget"
              value={form.budget}
              onChange={handleChange}
            >
              <option value="">Budget auswählen</option>
              <option value="under5k">Unter 5.000 €</option>
              <option value="5k-15k">5.000–15.000 €</option>
              <option value="15k-plus">15.000 € +</option>
            </select>
          </label>
        </div>

        <div className="form-row">
          <label htmlFor="message">
            Projektbeschreibung <span style={{ color: "var(--color-error-500)" }}>*</span>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Bitte geben Sie uns Details Ihres Projekts an..."
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
            {isSubmitting ? "Wird gesendet..." : "Anfrage senden"}
          </button>
        </div>
      </form>
    </section>
  );
}