// src/pages/Home.jsx
import HeroSection from "../sections/HeroSection.jsx";
import ServicesSection from "../sections/ServicesSection.jsx";
import ProjectsSection from "../sections/ProjectsSection.jsx";
import TestimonialsSection from "../sections/TestimonialsSection.jsx";
import ContactSection from "../sections/ContactSection.jsx";
// optional später: TeamSection

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}