// src/App.jsx
import "./App.css";
import MainLayout from "./components/layout/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import HeroSection from "./sections/HeroSection.jsx";
import ServicesSection from "./sections/ServicesSection.jsx";


export default function App() {
  return (
    <MainLayout>
      <Home />
      <HeroSection />
      <ServicesSection />
    </MainLayout>
  );
}