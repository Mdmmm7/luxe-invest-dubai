
import React from 'react';

const OfficeHours: React.FC = () => {
  return (
    <div className="glass-card p-8 rounded-xl scroll-fade-left">
      <h3 className="text-2xl font-semibold text-navy mb-6">Office Hours</h3>
      
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-navy">Monday - Friday:</span>
          <span className="font-medium">9:00 AM - 6:00 PM</span>
        </div>
        <div className="flex justify-between">
          <span className="text-navy">Saturday:</span>
          <span className="font-medium">10:00 AM - 4:00 PM</span>
        </div>
        <div className="flex justify-between">
          <span className="text-navy">Sunday:</span>
          <span className="font-medium">Closed</span>
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
