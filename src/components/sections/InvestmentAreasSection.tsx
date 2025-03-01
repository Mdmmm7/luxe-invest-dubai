
import React from 'react';
import AnimatedSectionTitle from '../ui/AnimatedSectionTitle';
import DistrictCard from '../ui/DistrictCard';

const districtData = [
  {
    name: "Downtown Dubai",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Home to the iconic Burj Khalifa and Dubai Mall, offering premium properties with exceptional views."
  },
  {
    name: "Dubai Marina",
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Luxury waterfront living with high-rise apartments and stunning marina views."
  },
  {
    name: "Palm Jumeirah",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Exclusive island living on the world-famous palm-shaped archipelago with private beaches."
  },
  {
    name: "Business Bay",
    image: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Dubai's business hub with modern residential and commercial properties adjacent to Downtown."
  }
];

const InvestmentAreasSection: React.FC = () => {
  return (
    <section id="investments" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <AnimatedSectionTitle
          preTitle="Premium Locations"
          title="Key Investment Areas"
          className="mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {districtData.map((district, index) => (
            <DistrictCard
              key={index}
              name={district.name}
              image={district.image}
              description={district.description}
              delay={index}
            />
          ))}
        </div>
        
        <div className="mt-16 p-8 rounded-lg glass-card scroll-scale">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-navy mb-4">
                Discover the Right Investment Area for Your Goals
              </h3>
              <p className="text-navy-light mb-0">
                Each area in Dubai offers unique investment advantages. Our experts can help you 
                identify the perfect location based on your investment strategy, budget, and expected returns.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <CustomButton variant="primary" showArrow>
                Get Area Insights
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentAreasSection;
