
import React from 'react';
import { Clock } from 'lucide-react';

const OfficeHours: React.FC = () => {
  return (
    <div className="glass-card p-8 rounded-xl scroll-fade-left">
      <h3 className="text-2xl font-semibold text-navy mb-6">Office Hours</h3>
      
      {/* Working hours image */}
      <div className="mb-6 overflow-hidden rounded-lg">
        <img 
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
          alt="Sobha Realty Capital office hours" 
          className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-gold mr-2" />
            <span className="text-navy">Monday - Friday:</span>
          </div>
          <span className="font-medium">9:00 AM - 6:00 PM</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-gold mr-2" />
            <span className="text-navy">Saturday:</span>
          </div>
          <span className="font-medium">10:00 AM - 4:00 PM</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-gold mr-2" />
            <span className="text-navy">Sunday:</span>
          </div>
          <span className="font-medium">10:00 AM - 3:00 PM</span>
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          Feel free to schedule a meeting outside these hours by appointment.
        </p>
      </div>
    </div>
  );
};

export default OfficeHours;
