
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface DistrictCardProps {
  name: string;
  image: string;
  description: string;
  className?: string;
  delay?: number;
}

const DistrictCard: React.FC<DistrictCardProps> = ({
  name,
  image,
  description,
  className,
  delay = 0
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "scroll-fade-up overflow-hidden rounded-lg relative group cursor-pointer",
        "transition-all duration-300 h-[400px]",
        "shadow-lg hover:shadow-xl",
        className
      )}
      style={{ transitionDelay: `${delay * 0.1}s` }}
    >
      <div className="absolute inset-0 bg-navy-dark/30 group-hover:bg-navy-dark/10 transition-all duration-500 z-10"></div>
      
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
      )}
      
      <img 
        src={image} 
        alt={name} 
        className={cn(
          "w-full h-full object-cover transition-all duration-700",
          "group-hover:scale-110",
          !isLoaded && "opacity-0",
        )}
        onLoad={() => setIsLoaded(true)}
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy-dark/90 to-transparent z-20">
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <p className="text-white/80 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-20 transition-all duration-300">{description}</p>
      </div>
    </div>
  );
};

export default DistrictCard;
