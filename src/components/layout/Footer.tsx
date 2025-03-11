
import React from 'react';
import { Facebook, Instagram, MessageSquare, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-dark text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="font-playfair text-3xl font-bold mb-4">
              <span className="text-gold">Sobha Realty</span> Capital
            </div>
            <p className="text-white/70 mb-6">
              Premier real estate investment opportunities in Dubai.
              Experience luxury, growth, and exceptional returns.
            </p>
          </div>
          
          <div className="md:col-span-2 md:flex md:justify-end">
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-6">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://wa.me/447399372291" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  <MessageSquare className="h-5 w-5" />
                </a>
                <a 
                  href="https://t.me/vivonest" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  <Send className="h-5 w-5" />
                </a>
              </div>
              
              <a 
                href="/privacy-policy" 
                className="text-white/70 hover:text-gold transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50 text-sm">
          &copy; {new Date().getFullYear()} Sobha Realty Capital. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
