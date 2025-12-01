// src/components/layout/MainLayout.jsx
import Header from "./Header.jsx";
import Footer from "./footer.jsx";

export default function MainLayout({ children }) {
  return (
    <div className="app-root">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}