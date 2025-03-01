
import React, { useEffect } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import WhyDubaiSection from '@/components/sections/WhyDubaiSection';
import InvestmentAreasSection from '@/components/sections/InvestmentAreasSection';
import ExpertiseSection from '@/components/sections/ExpertiseSection';
import ContactSection from '@/components/sections/ContactSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';

const Index = () => {
  useEffect(() => {
    // Scroll animation logic
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll(
        '.scroll-fade-up, .scroll-fade-left, .scroll-fade-right, .scroll-scale'
      );
      
      scrollElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('in-view');
        }
      });
    };
    
    // Initial check for elements in view
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <WhyDubaiSection />
      <InvestmentAreasSection />
      <ExpertiseSection />
      <FAQSection />
      <ContactSection />
      <CTASection />
    </div>
  );
};

export default Index;
