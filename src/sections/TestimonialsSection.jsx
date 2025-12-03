import { testimonials } from "../data/index.js";
import TestimonialCard from "../components/cards/TestimonialCard.jsx";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section testimonials">
      <header className="section-header">
        <p className="section-label">What our clients say</p>
        <h2 className="section-title">Testimonials</h2>
      </header>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}