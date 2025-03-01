
import React, { useEffect, useState, useRef } from 'react';
import CustomButton from '../ui/CustomButton';

const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const scrollPosition = window.scrollY;
      const opacity = 1 - scrollPosition / 700;
      const translateY = scrollPosition * 0.4;
      
      heroRef.current.style.opacity = opacity > 0 ? opacity.toString() : '0';
      heroRef.current.style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy-dark/50 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Dubai Skyline" 
          className="w-full h-full object-cover"
          style={{ 
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 1.5s ease-in-out' 
          }}
        />
      </div>
      
      {/* Content */}
      <div 
        ref={heroRef}
        className="container relative z-20 px-4 sm:px-6 lg:px-8 transition-all duration-700"
        style={{ 
          opacity: isLoaded ? 1 : 0,
          transform: `translateY(${isLoaded ? 0 : 30}px)`,
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-gold/20 backdrop-blur-md text-white text-sm font-medium">
            Premier Real Estate Investment Opportunities
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6">
            Invest in Dubai – The Future of <span className="text-gold">Luxury and Growth</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Secure high returns with tax-free benefits in one of the world's fastest-growing cities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CustomButton size="lg" showArrow onClick={scrollToContact}>
              Get Investment Insights
            </CustomButton>
            <CustomButton 
              size="lg" 
              variant="outline"
              onClick={scrollToContact}
            >
              Contact Us
            </CustomButton>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce cursor-pointer"
        style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 1s ease-in-out 1s' }}
        onClick={() => {
          const whyDubaiSection = document.getElementById('why-dubai');
          whyDubaiSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
