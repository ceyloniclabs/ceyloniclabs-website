import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductsSection } from './components/ProductsSection';
import { ServicesSection } from './components/ServicesSection';
import { MethodologySection } from './components/MethodologySection';
import { AboutSection } from './components/AboutSection';
import { CommercialSection } from './components/CommercialSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80; // height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Scroll listener to update active section in navbar dynamically
  useEffect(() => {
    const sectionIds = ['hero', 'products', 'services', 'methodology', 'about', 'pricing', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#05070C] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Fixed Navigation Bar */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Single Page Content */}
      <main className="flex-1">
        <Hero onNavigate={handleNavigate} />
        <ProductsSection onNavigate={handleNavigate} />
        <ServicesSection onNavigate={handleNavigate} />
        <MethodologySection onNavigate={handleNavigate} />
        <AboutSection onNavigate={handleNavigate} />
        <CommercialSection onNavigate={handleNavigate} />
        <ContactSection />
      </main>

      {/* Footer with Dynamic Auto-Increment Year */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
