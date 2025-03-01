
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionTitleProps {
  preTitle?: string;
  title: string;
  className?: string;
  titleClassName?: string;
  preTitleClassName?: string;
  alignment?: 'left' | 'center' | 'right';
  withAccent?: boolean;
}

const AnimatedSectionTitle: React.FC<AnimatedSectionTitleProps> = ({
  preTitle,
  title,
  className,
  titleClassName,
  preTitleClassName,
  alignment = 'center',
  withAccent = true,
}) => {
  const titleRef = useRef<HTMLDivElement>(null);

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

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={titleRef}
      className={cn(
        'scroll-fade-up mb-12',
        {
          'text-left': alignment === 'left',
          'text-center': alignment === 'center',
          'text-right': alignment === 'right',
        },
        className
      )}
    >
      {preTitle && (
        <div 
          className={cn(
            "inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider uppercase rounded-md bg-gold/10 text-gold",
            preTitleClassName
          )}
        >
          {preTitle}
        </div>
      )}
      <h2 
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold text-navy",
          "relative inline-block",
          withAccent && "after:content-[''] after:absolute after:w-1/3 after:h-1 after:bg-gold after:bottom-0 after:left-0",
          withAccent && alignment === 'center' && "after:left-1/3",
          withAccent && alignment === 'right' && "after:left-2/3",
          titleClassName
        )}
      >
        {title}
      </h2>
    </div>
  );
};

export default AnimatedSectionTitle;
