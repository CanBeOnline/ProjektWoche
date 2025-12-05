import { Link } from "react-router-dom";
import { useTranslation } from "../../hooks/useTranslation.js";

const FOOTER_LINKS = {
  services: [
    { key: "webDevelopment", to: "/services" },
    { key: "socialMedia", to: "/services" },
    { key: "branding", to: "/services" },
    { key: "consulting", to: "/services" },
  ],
  company: [
    { key: "home", to: "/" },
    { key: "projects", to: "/projects" },
    { key: "contact", to: "/contact" },
  ],
};

export default function Footer() {
  const { t } = useTranslation();
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
            {t("footer.tagline")}
          </p>
          {/* Social Media Links */}
          <div className="footer-social">
            <a
              href="#"
              className="footer-social-link"
              aria-label={t("footer.socialMedia.linkedin")}
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
              aria-label={t("footer.socialMedia.twitter")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M15.902 1.5h2.227l-4.847 5.54 5.706 7.46h-4.47l-3.5-4.57-4.01 4.57H2.87l5.15-5.89L2.5 1.5h4.47l3.18 4.15L13.9 1.5h2.002zm-.84 13.5h-1.35l-5.48-7.16-1.88-2.46h1.35l4.73 6.18.73.96 1.9 2.48z"/>
              </svg>
            </a>
            <a
              href="#"
              className="footer-social-link"
              aria-label={t("footer.socialMedia.instagram")}
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
            <h3 className="footer-heading">{t("footer.services")}</h3>
            <ul className="footer-list">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.key}>
                  <Link to={link.to} className="footer-link">
                    {t(`nav.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">{t("footer.company")}</h3>
            <ul className="footer-list">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.key}>
                  <Link to={link.to} className="footer-link">
                    {t(`nav.${link.key}`)}
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
          © {currentYear} Hype Media Agency. {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}