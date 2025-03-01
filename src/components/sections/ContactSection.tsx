
import React, { useState } from 'react';
import { Building, Mail, Phone, MessageSquare } from 'lucide-react';
import AnimatedSectionTitle from '../ui/AnimatedSectionTitle';
import CustomButton from '../ui/CustomButton';
import { toast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Request received!",
      description: "Our investment expert will contact you shortly.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      budget: '',
      message: ''
    });
  };

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
          <div className="bg-white rounded-xl shadow-xl p-8 transform transition-all duration-500 hover:shadow-2xl scroll-fade-up">
            <h3 className="text-2xl font-semibold text-navy mb-6">Get Your Free Consultation</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="+1 (123) 456-7890"
                />
              </div>
              
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Investment Budget (USD)</label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="500,000+"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                  placeholder="Tell us about your investment goals..."
                ></textarea>
              </div>
              
              <div>
                <CustomButton type="submit" variant="primary" size="lg" className="w-full" showArrow>
                  Get Your Free Consultation
                </CustomButton>
              </div>
            </form>
          </div>
          
          {/* Contact info */}
          <div className="flex flex-col justify-between">
            <div className="glass-card p-8 rounded-xl mb-8 scroll-fade-left">
              <h3 className="text-2xl font-semibold text-navy mb-6">Connect With Us</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="h-6 w-6 text-gold" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-navy">Phone</p>
                    <p className="text-base">+971 4 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="h-6 w-6 text-gold" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-navy">Email</p>
                    <p className="text-base">invest@luxedubai.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Building className="h-6 w-6 text-gold" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-navy">Office</p>
                    <p className="text-base">Sheikh Zayed Road, Downtown Dubai</p>
                    <p className="text-base">Dubai, United Arab Emirates</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="https://wa.me/971412345678" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
