
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description,
  className,
  delay = 0
}) => {
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
        "scroll-scale p-6 rounded-lg transition-all duration-300",
        "glass-card hover:shadow-xl hover:-translate-y-1",
        className
      )}
      style={{ transitionDelay: `${delay * 0.1}s` }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gold/10 text-gold">
          {icon}
        </div>
        <h3 className="mb-2 text-xl font-semibold text-navy">{title}</h3>
        <p className="text-navy-light">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
