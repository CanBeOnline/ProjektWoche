// src/sections/HeroSection.jsx
import heroImage from "../assets/images/HeroBild.webp";

export default function HeroSection() {
  return (
    <section className="hero-with-background">
      <div className="hero-background" style={{ backgroundImage: `url(${heroImage})` }} />
      <div className="hero-overlay" />
      <div className="hero-content-wrapper">
        <div className="hero-content">
          <h1 className="hero-title">Let's grow your brand.</h1>
          <p className="hero-subtitle">
            We create modern websites, social media campaigns and high-impact visuals
            for ambitious brands.
          </p>
          <a href="#contact" className="btn btn-primary hero-button">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}