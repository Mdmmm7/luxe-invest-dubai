
import React from 'react';
import AnimatedSectionTitle from '../ui/AnimatedSectionTitle';
import TestimonialCard from '../ui/TestimonialCard';
import CustomButton from '../ui/CustomButton';

const testimonialData = [
  {
    quote: "Sobha Realty Capital helped me acquire a premium property in Downtown Dubai that has appreciated 18% in just 14 months. Their market insight was invaluable.",
    author: "Sarah Johnson",
    position: "UK-based Investor",
  },
  {
    quote: "The team's knowledge of Dubai's real estate regulations saved me time and money. They streamlined the entire investment process from start to finish.",
    author: "Michael Chen",
    position: "Singapore Entrepreneur",
  },
  {
    quote: "As a first-time international investor, I found their guidance exceptional. They handled everything while I was overseas and secured a property that delivers 8% annual yield.",
    author: "Anna Petrov",
    position: "Moscow Business Owner",
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
              title="Guiding Your Investment Journey"
              alignment="left"
              className="mb-8"
            />
            
            <div className="space-y-6 scroll-fade-right">
              <p className="text-navy-light">
                Our team of seasoned real estate investment advisors specializes in the Dubai property market. 
                With deep local knowledge and global investment expertise, we guide you through every step of your 
                investment journey.
              </p>
              
              <div className="border-l-4 border-gold pl-6 py-1">
                <p className="italic text-navy">
                  "We don't just help you purchase property – we help you build a strategic investment 
                  portfolio tailored to your financial goals."
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mt-1 mr-3">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12L9 16L19 6" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-navy-light">In-depth market analysis and property selection</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mt-1 mr-3">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12L9 16L19 6" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-navy-light">ROI optimization and yield maximization strategies</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mt-1 mr-3">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12L9 16L19 6" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-navy-light">Legal guidance and regulatory compliance support</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mt-1 mr-3">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12L9 16L19 6" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-navy-light">Ongoing property management and portfolio growth</p>
                </div>
              </div>
              
              <CustomButton variant="primary" showArrow>
                Meet Our Team
              </CustomButton>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-navy/10 rounded-full filter blur-3xl"></div>
            
            <div className="relative z-10 space-y-6">
              <h3 className="text-2xl font-semibold text-navy mb-6 scroll-fade-left">
                What Our Investors Say
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
