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
    <section id="contact" className="py-24 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16 sm:mb-20">
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-4">
            Kontakt
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-poppins">
            Stellen Sie uns eine Anfrage
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Erzählen Sie uns kurz von Ihrem Projekt – wir melden uns mit einer Einschätzung zurück.
          </p>
        </header>

        {/* Form */}
        <form 
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 sm:p-10 lg:p-14 xl:p-16 border border-gray-100 dark:border-gray-700"
          onSubmit={handleSubmit}
        >
          {/* Name Row - Grid für Vorname und Nachname */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="form-group">
              <label 
                htmlFor="firstName" 
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3"
              >
                Vorname <span className="text-red-500">*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Max"
                value={form.firstName}
                onChange={handleChange}
                required
                className="w-full px-5 py-3.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <div className="form-group">
              <label 
                htmlFor="lastName" 
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3"
              >
                Nachname <span className="text-red-500">*</span>
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Mustermann"
                value={form.lastName}
                onChange={handleChange}
                required
                className="w-full px-5 py-3.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          {/* Email Row */}
          <div className="mb-6 sm:mb-8">
            <label 
              htmlFor="email" 
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3"
            >
              E‑Mail Adresse <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="max.mustermann@example.com"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-3.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Phone and Budget Row - Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="form-group">
              <label 
                htmlFor="phone" 
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3"
              >
                Telefonnummer <span className="text-gray-400 text-xs">(optional)</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+49 123 456789"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-5 py-3.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <div className="form-group">
              <label 
                htmlFor="budget" 
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3"
              >
                Budget <span className="text-gray-400 text-xs">(optional)</span>
              </label>
              <select
                id="budget"
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className="w-full px-5 py-3.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
              >
                <option value="">Budget auswählen</option>
                <option value="under5k">Unter 5.000 €</option>
                <option value="5k-15k">5.000–15.000 €</option>
                <option value="15k-plus">15.000 € +</option>
              </select>
            </div>
          </div>

          {/* Message Row */}
          <div className="mb-10 sm:mb-12">
            <label 
              htmlFor="message" 
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3"
            >
              Projektbeschreibung <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Bitte geben Sie uns Details Ihres Projekts an..."
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-5 py-3.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 min-w-[200px]"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Wird gesendet...
                </span>
              ) : (
                "Anfrage senden"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}