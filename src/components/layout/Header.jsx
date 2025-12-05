import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { useTranslation } from "../../hooks/useTranslation.js";

const NAV_ITEMS = [
  { key: "home", to: "/" },
  { key: "services", to: "/services" },
  { key: "projects", to: "/projects" },
  { key: "contact", to: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const { t } = useTranslation();

  const navItems = NAV_ITEMS.map((item) => ({
    ...item,
    label: t(`nav.${item.key}`),
  }));

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);
        ticking = false;
      });
      ticking = true;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          Hype Media
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav nav-desktop" aria-label="Hauptnavigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          {/* Language Toggle Button */}
          <button
            className="language-toggle"
            onClick={toggleLanguage}
            aria-label={`Switch to ${language === "de" ? "English" : "Deutsch"}`}
            title={`Switch to ${language === "de" ? "English" : "Deutsch"}`}
          >
            {language === "de" ? "EN" : "DE"}
          </button>

          <Link to="/contact" className="header-cta">
            {language === "de" ? "Projekt anfragen" : "Start a project"}
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            className={`hamburger ${isMobileMenuOpen ? "hamburger-open" : ""}`}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        id="mobile-nav"
        className={`nav nav-mobile ${isMobileMenuOpen ? "nav-mobile-open" : ""}`}
        aria-label="Mobile Navigation"
      >
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `nav-link ${isActive ? "nav-active" : ""}`
            }
            onClick={closeMobileMenu}
          >
            {item.label}
          </NavLink>
        ))}
        <Link to="/contact" className="header-cta header-cta-mobile" onClick={closeMobileMenu}>
          {language === "de" ? "Projekt anfragen" : "Start a project"}
        </Link>
        <button
          className="language-toggle language-toggle-mobile"
          onClick={() => {
            toggleLanguage();
            closeMobileMenu();
          }}
          aria-label={`Switch to ${language === "de" ? "English" : "Deutsch"}`}
        >
          {language === "de" ? "EN" : "DE"}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={closeMobileMenu} />
      )}
    </header>
  );
}