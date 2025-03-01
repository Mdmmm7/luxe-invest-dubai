
import React from 'react';
import { cn } from '@/lib/utils';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant = 'primary', size = 'md', showArrow = false, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          'relative overflow-hidden group font-medium transition-all duration-300 ease-out',
          'flex items-center justify-center rounded-md',
          'disabled:opacity-50 disabled:pointer-events-none',
          {
            'bg-gold text-navy hover:bg-gold-light': variant === 'primary',
            'bg-navy text-white hover:bg-navy-light': variant === 'secondary',
            'bg-transparent border border-gold text-gold hover:bg-gold/10': variant === 'outline',
            'text-sm px-4 py-2': size === 'sm',
            'text-base px-6 py-3': size === 'md',
            'text-lg px-8 py-4': size === 'lg',
          },
          "before:absolute before:inset-0 before:w-full before:h-full before:bg-shimmer-gradient before:bg-[length:200%_100%] before:animate-shimmer before:opacity-0 hover:before:opacity-100",
          className
        )}
        ref={ref}
        {...props}
      >
        <span className="relative">
          {children}
          {showArrow && (
            <svg 
              className="ml-2 inline-block w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          )}
        </span>
      </button>
    );
  }
);

CustomButton.displayName = 'CustomButton';

export default CustomButton;
