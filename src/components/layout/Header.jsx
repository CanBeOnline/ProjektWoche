import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <nav className="nav nav-desktop">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-active" : ""}`
              }
            >
              {t(`nav.${item.key}`)}
            </NavLink>
          ))}
        </nav>

        {/* Language Toggle Button */}
        <button
          className="language-toggle"
          onClick={toggleLanguage}
          aria-label={`Switch to ${language === "de" ? "English" : "Deutsch"}`}
          title={`Switch to ${language === "de" ? "English" : "Deutsch"}`}
        >
          {language === "de" ? "EN" : "DE"}
        </button>

        {/* Mobile Hamburger Button */}
        <button
          className={`hamburger ${isMobileMenuOpen ? "hamburger-open" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className={`nav nav-mobile ${isMobileMenuOpen ? "nav-mobile-open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `nav-link ${isActive ? "nav-active" : ""}`
            }
            onClick={closeMobileMenu}
          >
            {t(`nav.${item.key}`)}
          </NavLink>
        ))}
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