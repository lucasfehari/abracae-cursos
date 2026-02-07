import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'navy';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold tracking-wide rounded-full transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 uppercase font-tech";
  
  const variants = {
    primary: "bg-brand-orange text-white hover:bg-brand-orangeDark shadow-lg shadow-brand-orange/30 focus:ring-brand-orange border border-transparent",
    secondary: "bg-white text-brand-orange hover:bg-gray-50 shadow-lg border border-brand-orange/20 focus:ring-brand-orange",
    outline: "border-2 border-brand-orange text-brand-orange bg-transparent hover:bg-brand-orange hover:text-white focus:ring-brand-orange",
    navy: "bg-brand-navy text-white hover:bg-brand-navyLight shadow-lg shadow-brand-navy/40 focus:ring-brand-navy border border-brand-navyLight"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};