import { NavLink } from "react-router-dom";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  return (
    <header className="header">
      <div className="logo">Hype Media</div>
      <nav className="nav">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => (isActive ? "nav-active" : undefined)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}