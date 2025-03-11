
import React from 'react';
import { Facebook, Instagram, MessageSquare, Send } from 'lucide-react';

const SocialLinks: React.FC = () => {
  return (
    <div className="flex space-x-4">
      <a 
        href="https://www.instagram.com/sobha_realty_capital/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-gray-100 hover:bg-gold/20 p-3 rounded-full transition-colors"
      >
        <Instagram className="h-5 w-5 text-navy" />
      </a>
      <a 
        href="https://www.facebook.com/profile.php?id=61573540299012" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-gray-100 hover:bg-gold/20 p-3 rounded-full transition-colors"
      >
        <Facebook className="h-5 w-5 text-navy" />
      </a>
      <a 
        href="https://wa.me/447399372291" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-gray-100 hover:bg-gold/20 p-3 rounded-full transition-colors"
      >
        <MessageSquare className="h-5 w-5 text-navy" />
      </a>
      <a 
        href="https://t.me/vivonest" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-gray-100 hover:bg-gold/20 p-3 rounded-full transition-colors"
      >
        <Send className="h-5 w-5 text-navy" />
      </a>
    </div>
  );
};

export default SocialLinks;
