
import React from 'react';
import { Mail, Phone } from 'lucide-react';
import SocialLinks from './SocialLinks';

const ContactInfo: React.FC = () => {
  return (
    <div className="glass-card p-8 rounded-xl mb-8 scroll-fade-left">
      <h3 className="text-2xl font-semibold text-navy mb-6">Our Team</h3>
      
      {/* Team image - Updated to show real estate negotiation */}
      <div className="mb-6 overflow-hidden rounded-lg">
        <img 
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
          alt="Sobha Realty Capital Team during a real estate negotiation" 
          className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 mt-1">
            <Phone className="h-6 w-6 text-gold" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-navy">Phone</p>
            <p className="text-base">+44 7399 372291</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 mt-1">
            <Mail className="h-6 w-6 text-gold" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-navy">Email</p>
            <p className="text-base">sobharealtycapital@gmail.com</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h4 className="text-lg font-medium text-navy mb-4">Follow Us</h4>
        <SocialLinks />
      </div>
    </div>
  );
};

export default ContactInfo;
