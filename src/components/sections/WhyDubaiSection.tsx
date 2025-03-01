
import React from 'react';
import AnimatedSectionTitle from '../ui/AnimatedSectionTitle';
import FeatureCard from '../ui/FeatureCard';

const featureData = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1V23M1 12H23M4.22 4.22L19.78 19.78M19.78 4.22L4.22 19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "0% Income Tax",
    description: "Enjoy tax-free income and capital gains with Dubai's investor-friendly policies."
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "High Rental Yields",
    description: "Benefit from rental yields of 6-10%, significantly higher than most global markets."
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 13.2554C20.6972 15.3733 19.7213 17.3309 18.2203 18.8484C16.7194 20.366 14.7748 21.3641 12.6667 21.6897C10.5586 22.0152 8.40384 21.6538 6.5323 20.6633C4.66076 19.6728 3.1756 18.1044 2.27531 16.1716M3 13.2554V8.25537M3 8.25537H8M21 11.2554C20.6972 9.13747 19.7213 7.17989 18.2203 5.66233C16.7194 4.14476 14.7748 3.14665 12.6667 2.82109C10.5586 2.49554 8.40384 2.85703 6.5323 3.8475C4.66076 4.83797 3.1756 6.40632 2.27531 8.33915M21 11.2554V16.2554M21 16.2554H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Growing Demand",
    description: "Experience consistent demand growth driven by expats, tourists, and investors."
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Booming Economy",
    description: "Leverage Dubai's diverse economy with world-class infrastructure and innovation."
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 21H21M3 18H21M5 18V7.8C5 7.51997 5 7.37996 5.0545 7.26635C5.10243 7.16517 5.16517 7.10243 5.26635 7.0545C5.37996 7 5.51997 7 5.8 7H18.2C18.48 7 18.62 7 18.7336 7.0545C18.8348 7.10243 18.8976 7.16517 18.9455 7.26635C19 7.37996 19 7.51997 19 7.8V18M9 7V5M15 7V5M7.5 11H16.5M7.5 14H14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Strategic Location",
    description: "Access markets across Asia, Europe, and Africa with Dubai's central global position."
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12L11 14L15 10M12 3L13.5068 4.83688C13.7519 5.13488 13.8744 5.28387 14.0334 5.38448C14.1752 5.47311 14.3354 5.53319 14.5021 5.56101C14.6903 5.59274 14.886 5.57294 15.2776 5.53335L17.5 5.2L16.6742 7.31942C16.5203 7.69467 16.4434 7.8823 16.4191 8.07582C16.3976 8.24422 16.4104 8.41502 16.4568 8.57821C16.5096 8.76337 16.6177 8.93416 16.8339 9.27573L18 11L15.9753 12.0247C15.6628 12.1812 15.5066 12.2595 15.3669 12.3698C15.2429 12.4681 15.1349 12.5856 15.0462 12.7181C14.9463 12.8671 14.8823 13.0353 14.7542 13.3719L14 15.5L12.3168 14.0599C12.0398 13.8105 11.9013 13.6858 11.7417 13.6106C11.6006 13.5442 11.4487 13.5 11.2929 13.5C11.1178 13.5 10.9365 13.5509 10.574 13.6525L8.5 14.25L8.3235 12.1361C8.2865 11.7307 8.26801 11.5279 8.31583 11.3426C8.35801 11.1785 8.43823 11.0266 8.54777 10.8966C8.6715 10.7488 8.84326 10.6441 9.18677 10.4346L12 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Safety & Stability",
    description: "Invest with confidence in one of the world's safest cities with political stability."
  }
];

const WhyDubaiSection: React.FC = () => {
  return (
    <section id="why-dubai" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <AnimatedSectionTitle
          preTitle="Investment Benefits"
          title="Why Dubai?"
          className="mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center scroll-fade-up">
          <p className="text-lg text-navy-light max-w-2xl mx-auto mb-8">
            Dubai's real estate market offers a unique combination of high returns and security, 
            making it an ideal destination for savvy investors looking to diversify their portfolios.
          </p>
          <CustomButton variant="secondary" showArrow>
            Learn More About Dubai
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default WhyDubaiSection;
