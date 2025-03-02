
import React, { useState } from 'react';
import AnimatedSectionTitle from '../ui/AnimatedSectionTitle';
import { Plus, Minus } from 'lucide-react';
import { cn } from '../../lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What legal documents do I need to invest in Dubai real estate?",
    answer: "As a foreigner, you need a valid passport and visa. For the property purchase, you'll need a title deed, sale purchase agreement, and NOC (No Objection Certificate) from the developer. Our team handles all the paperwork for you, ensuring a smooth process."
  },
  {
    question: "What is the average ROI for luxury properties in Dubai?",
    answer: "Luxury properties in prime locations of Dubai typically yield between 5-8% annual rental returns. Capital appreciation varies by area but has averaged 8-12% annually in premium districts over the past five years. Our investment advisors can provide detailed projections based on your specific investment goals."
  },
  {
    question: "Are there any property taxes in Dubai?",
    answer: "Dubai has no annual property tax or capital gains tax, which is a major advantage for investors. The primary fees include a one-time 4% transfer fee of the property value when purchasing, a maintenance fee for the building, and possibly a 5% VAT if buying from a developer (though most residential properties are exempt)."
  },
  {
    question: "What payment plans are typically available for new developments?",
    answer: "Developers in Dubai offer flexible payment plans, typically ranging from 30/70 (30% during construction, 70% on completion) to 50/50 plans. Some premium projects offer post-handover payment plans extending up to 5 years. We work with developers to negotiate the most favorable terms for our clients."
  },
  {
    question: "Can I obtain residency through property investment in Dubai?",
    answer: "Yes, investing in property worth at least AED 1 million (approximately $272,000) can make you eligible for a 2-year renewable residence visa. Investments of AED 5 million or more may qualify for a 5-year Golden Visa. Our legal team can guide you through the residency application process."
  },
  {
    question: "How is the rental process managed for international investors?",
    answer: "We offer comprehensive property management services for international investors, handling everything from finding tenants and conducting background checks to collecting rent and managing maintenance. Our property management fee is typically 7% of the annual rental income, providing you with hassle-free passive income."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSectionTitle
          title="Frequently Asked Questions"
          preTitle="Everything you need to know about investing in Dubai"
          alignment="center"
        />
        
        <div className="max-w-4xl mx-auto mt-12">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={cn(
                  "border rounded-lg overflow-hidden",
                  openIndex === index 
                    ? 'border-gold shadow-md' 
                    : 'border-gray-200',
                  "scroll-fade-up"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <button
                  className="flex justify-between items-center w-full px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                  data-no-redirect="true"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-content-${index}`}
                >
                  <span className="text-lg font-medium text-navy pr-4">{faq.question}</span>
                  <span className="ml-2 flex-shrink-0 transition-transform duration-300">
                    {openIndex === index ? (
                      <Minus className="h-5 w-5 text-gold" />
                    ) : (
                      <Plus className="h-5 w-5 text-gold" />
                    )}
                  </span>
                </button>
                
                <div 
                  id={`faq-content-${index}`}
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    openIndex === index 
                      ? 'max-h-[500px] opacity-100 visible' 
                      : 'max-h-0 opacity-0 invisible'
                  )}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
