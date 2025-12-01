// src/sections/TestimonialsSection.jsx

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section testimonials">
      <header className="section-header">
        <p className="section-label">What our clients say</p>
        <h2 className="section-title">Testimonials</h2>
      </header>

      <div className="testimonials-grid">
        {/* später: aus testimonials.json */}
        <article className="testimonial-card">
          <p className="testimonial-text">
            “They helped us double our online revenue in less than 3 months.”
          </p>
          <p className="testimonial-author">
            Anna K. – Founder, DTC Brand
          </p>
        </article>

        <article className="testimonial-card">
          <p className="testimonial-text">
            “Super klarer Prozess, starke Designs und performante Kampagnen.”
          </p>
          <p className="testimonial-author">
            Jonas M. – CEO, SaaS Startup
          </p>
        </article>
      </div>
    </section>
  );
}