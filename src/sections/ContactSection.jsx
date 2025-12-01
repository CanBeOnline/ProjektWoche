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

  const isFormValid =
    form.firstName.trim() &&
    form.lastName.trim() &&
    form.email.trim() &&
    form.message.trim();

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // vorerst nur Log – später kann man hier mehr machen
    console.log("Contact form submitted:", form);
    alert("Danke für deine Anfrage – (Demo).");
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
        <div className="form-row">
          <label>
            Vorname *
            <input
              name="firstName"
              type="text"
              placeholder="Vorname"
              value={form.firstName}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className="form-row">
          <label>
            Nachname *
            <input
              name="lastName"
              type="text"
              placeholder="Nachname"
              value={form.lastName}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className="form-row">
          <label>
            E‑Mail Adresse *
            <input
              name="email"
              type="email"
              placeholder="E-Mail-Adresse"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className="form-row">
          <label>
            Telefonnummer (optional)
            <input
              name="phone"
              type="tel"
              placeholder="Telefonnummer"
              value={form.phone}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form-row">
          <label>
            Budget (optional)
            <select
              name="budget"
              value={form.budget}
              onChange={handleChange}
            >
              <option value="">Select budget</option>
              <option value="under5k">Under 5.000 €</option>
              <option value="5k-15k">5.000–15.000 €</option>
              <option value="15k-plus">15.000 € +</option>
            </select>
          </label>
        </div>

        <div className="form-row">
          <label>
            Projektbeschreibung *
            <textarea
              name="message"
              rows="4"
              placeholder="Bitte geben Sie uns Details Ihres Projekts an..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={!isFormValid}
        >
          Anfrage senden
        </button>
      </form>
    </section>
  );
}