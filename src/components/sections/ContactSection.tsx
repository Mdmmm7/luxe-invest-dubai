
import React from 'react';
import AnimatedSectionTitle from '../ui/AnimatedSectionTitle';
import ContactForm from '../contact/ContactForm';
import ContactInfo from '../contact/ContactInfo';
import OfficeHours from '../contact/OfficeHours';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSectionTitle
          title="Start Your Investment Journey"
          preTitle="Contact our experts for a personalized consultation"
          alignment="center"
        />
        
        <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact form */}
          <ContactForm />
          
          {/* Contact info */}
          <div className="flex flex-col justify-between">
            <ContactInfo />
            <OfficeHours />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
