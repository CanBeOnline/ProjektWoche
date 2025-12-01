// src/sections/HeroSection.jsx
export default function HeroSection() {
  return (
    <section id="hero" className="section hero">
      <div className="hero-content">
        <p className="hero-label">Creative Digital Agency</p>
        <h1 className="hero-title">
          We help brands grow with web & social.
        </h1>
        <p className="hero-subtitle">
          Modern websites, scroll-stopping social content and clear digital
          strategies for ambitious companies.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            Get in touch
          </a>
          <a href="#projects" className="btn btn-secondary">
            View our work
          </a>
        </div>
      </div>

      <div className="hero-visual">
        {/* Hier später Illustration/Bild oder Fake-Dashboard */}
        <div className="hero-placeholder-card">
          <p>Campaign Performance</p>
          <span>+132% Engagement</span>
        </div>
      </div>
    </section>
  );
}