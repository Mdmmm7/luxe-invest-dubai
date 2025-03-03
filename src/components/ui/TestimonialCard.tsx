
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position?: string;
  avatar?: string;
  className?: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  position,
  avatar,
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
        "scroll-fade-up p-6 rounded-xl",
        "bg-white/90 backdrop-blur-sm shadow-md border border-gray-100",
        "flex flex-col",
        className
      )}
      style={{ transitionDelay: `${delay * 0.1}s` }}
    >
      <div className="mb-4 text-emerald-500">
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.028 6C6.684 11.184 1.5 19.68 1.5 29.04C1.5 36.672 6.108 41.136 11.868 41.136C17.196 41.136 21.516 36.672 21.516 31.344C21.516 26.448 17.772 22.704 12.876 22.704C12.3 22.704 11.724 22.704 11.436 22.848C12.588 17.808 17.484 12.048 22.38 9.024L14.028 6ZM38.796 6C31.452 11.184 26.268 19.68 26.268 29.04C26.268 36.672 30.876 41.136 36.636 41.136C41.964 41.136 46.284 36.672 46.284 31.344C46.284 26.448 42.54 22.704 37.644 22.704C37.068 22.704 36.492 22.704 36.204 22.848C37.356 17.808 42.252 12.048 47.148 9.024L38.796 6Z" fill="currentColor"/>
        </svg>
      </div>
      
      <p className="mb-6 text-gray-700 italic">{quote}</p>
      
      <div className="mt-auto flex items-center">
        {avatar && (
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-emerald-200">
            <img src={avatar} alt={author} className="w-full h-full object-cover" />
          </div>
        )}
        <div>
          <h4 className="font-semibold text-emerald-800">{author}</h4>
          {position && <p className="text-sm text-gray-600">{position}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
