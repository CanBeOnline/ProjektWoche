// src/sections/ContactSection.jsx
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    budget: "",
  });

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
        <p className="section-label">Let’s talk</p>
        <h2 className="section-title">Request a quote</h2>
        <p className="section-description">
          Erzähl uns kurz von deinem Projekt – wir melden uns mit einer
          Einschätzung zurück.
        </p>
      </header>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            Name
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className="form-row">
          <label>
            Email
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
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
            Project description
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Send request
        </button>
      </form>
    </section>
  );
}