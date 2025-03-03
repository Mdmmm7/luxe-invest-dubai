
import React from 'react';
import AnimatedSectionTitle from '../ui/AnimatedSectionTitle';
import TestimonialCard from '../ui/TestimonialCard';
import CustomButton from '../ui/CustomButton';

const testimonialData = [
  {
    quote: "VivoNest's smart home integration transformed my living experience. The energy monitoring system helped me reduce my electricity consumption by 25% within three months.",
    author: "Sarah Johnson",
    position: "Homeowner in Portland",
  },
  {
    quote: "The air quality monitoring system alerted me to an issue I wasn't aware of. After addressing it with VivoNest's recommendations, my allergies have improved significantly.",
    author: "Michael Chen",
    position: "Apartment Dweller in Chicago",
  },
  {
    quote: "As a first-time homebuyer, I found their guidance exceptional. The smart water monitoring system has already prevented what could have been a major leak issue.",
    author: "Anna Petrov",
    position: "New Homeowner in Seattle",
  }
];

const ExpertiseSection: React.FC = () => {
  return (
    <section id="expertise" className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <AnimatedSectionTitle
              preTitle="Our Expertise"
              title="Enhancing Living Environments"
              alignment="left"
              className="mb-8"
            />
            
            <div className="space-y-6 scroll-fade-right">
              <p className="text-gray-700">
                Our team of experienced smart home specialists focuses on creating healthier, more efficient living spaces. 
                With advanced monitoring technology and data-driven insights, we guide you through every step of 
                optimizing your home environment.
              </p>
              
              <div className="border-l-4 border-emerald-500 pl-6 py-1">
                <p className="italic text-gray-700">
                  "We don't just install technology – we help you create a living space that actively 
                  contributes to your wellbeing and environmental goals."
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1 mr-3">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12L9 16L19 6" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-gray-700">Comprehensive air quality monitoring and improvement</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1 mr-3">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12L9 16L19 6" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-gray-700">Energy usage optimization and sustainability solutions</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1 mr-3">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12L9 16L19 6" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-gray-700">Intelligent water management and leak prevention</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1 mr-3">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12L9 16L19 6" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-gray-700">Continuous monitoring and data-driven recommendations</p>
                </div>
              </div>
              
              <CustomButton variant="primary" showArrow>
                Meet Our Team
              </CustomButton>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-100/50 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-200/30 rounded-full filter blur-3xl"></div>
            
            <div className="relative z-10 space-y-6">
              <h3 className="text-2xl font-semibold text-emerald-800 mb-6 scroll-fade-left">
                What Our Clients Say
              </h3>
              
              <div className="grid grid-cols-1 gap-6">
                {testimonialData.map((testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    quote={testimonial.quote}
                    author={testimonial.author}
                    position={testimonial.position}
                    delay={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
