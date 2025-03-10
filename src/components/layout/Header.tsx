
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import CustomButton from '../ui/CustomButton';
import { MessageSquare } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (isHomePage) {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#' + id);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8",
        isScrolled ? "py-4 backdrop-blur-md bg-navy-dark/90 shadow-md" : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div 
            className="font-playfair text-2xl font-bold text-white cursor-pointer"
            onClick={() => navigate('/')}
          >
            <span className="text-gold">Sobha Realty</span> Capital
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Home', id: 'home' },
              { name: 'Why Dubai?', id: 'why-dubai' },
              { name: 'Our Expertise', id: 'expertise' },
              { name: 'FAQs', id: 'faq' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <a
                key={item.name}
                href={isHomePage ? `#${item.id}` : `/#${item.id}`}
                className="text-white text-sm font-medium relative group"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex space-x-4 items-center">
            <a 
              href="https://wa.me/447351129580" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
            <CustomButton onClick={() => scrollToSection('contact')}>
              Contact Us
            </CustomButton>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path 
                  d="M18 6L6 18M6 6L18 18" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              ) : (
                <path 
                  d="M4 6H20M4 12H20M4 18H20" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          "md:hidden absolute left-0 right-0 top-full bg-navy-dark shadow-lg transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto py-4 px-4">
          <nav className="flex flex-col space-y-4">
            {[
              { name: 'Home', id: 'home' },
              { name: 'Why Dubai?', id: 'why-dubai' },
              { name: 'Our Expertise', id: 'expertise' },
              { name: 'FAQs', id: 'faq' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <a
                key={item.name}
                href={isHomePage ? `#${item.id}` : `/#${item.id}`}
                className="text-white py-2 border-b border-gray-700"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col space-y-3 pt-3">
              <a 
                href="https://wa.me/447351129580" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors"
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                WhatsApp
              </a>
              <CustomButton onClick={() => scrollToSection('contact')} className="w-full">
                Contact Us
              </CustomButton>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
