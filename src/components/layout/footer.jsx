import { Link } from "react-router-dom";

const FOOTER_LINKS = {
  services: [
    { label: "Web Development", to: "/services" },
    { label: "Social Media", to: "/services" },
    { label: "Branding", to: "/services" },
    { label: "Consulting", to: "/services" },
  ],
  company: [
    { label: "Home", to: "/" },
    { label: "Projects", to: "/projects" },
    { label: "Contact", to: "/contact" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            Hype Media
          </Link>
          <p className="footer-tagline">
            Progressive Digital Experiences for Ambitious Brands.
          </p>
          {/* Social Media Links */}
          <div className="footer-social">
            <a
              href="#"
              className="footer-social-link"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M18.5 0h-17C.673 0 0 .673 0 1.5v17c0 .827.673 1.5 1.5 1.5h17c.827 0 1.5-.673 1.5-1.5v-17C20 .673 19.327 0 18.5 0zM6 17H3V8h3v9zM4.5 6.433c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zM17 17h-3v-4.5c0-1.38-.026-3.15-1.92-3.15-1.92 0-2.21 1.5-2.21 3.05V17H6.87V8h2.88v1.43h.04c.41-.78 1.42-1.6 2.92-1.6 3.12 0 3.7 2.05 3.7 4.72V17H17z"/>
              </svg>
            </a>
            <a
              href="#"
              className="footer-social-link"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M18.244 4.751a7.384 7.384 0 01-2.12.58 3.7 3.7 0 001.623-2.04 7.35 7.35 0 01-2.343.897 3.686 3.686 0 00-6.278 3.36 10.458 10.458 0 01-7.59-3.85 3.69 3.69 0 001.142 4.925 3.666 3.666 0 01-1.67-.462v.047a3.695 3.695 0 002.96 3.622 3.692 3.692 0 01-1.665.063 3.694 3.694 0 003.447 2.563 7.395 7.395 0 01-4.58 1.58c-.297 0-.59-.017-.88-.052a10.426 10.426 0 005.648 1.655c6.778 0 10.48-5.614 10.48-10.48 0-.16-.004-.319-.012-.477a7.488 7.488 0 001.84-1.907z"/>
              </svg>
            </a>
            <a
              href="#"
              className="footer-social-link"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.123 2.69-1.387 3.976-4.099 4.099-1.055.048-1.37.058-4.042.058-2.67 0-2.986-.01-4.04-.058-2.717-.124-3.977-1.416-4.099-4.1-.048-1.055-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zm0-1.802C7.284 0 6.944.012 5.877.06 2.246.227.227 2.242.06 5.877.01 6.944 0 7.284 0 10s.012 3.056.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.056-.012 4.123-.06c3.628-.167 5.65-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.123C18.767 2.206 16.742.228 13.123.06 12.056.01 11.716 0 10 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Links Sections */}
        <div className="footer-links">
          <div className="footer-column">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-list">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-list">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          © {currentYear} Hype Media Agency. All rights reserved.
        </p>
      </div>
    </footer>
  );
}