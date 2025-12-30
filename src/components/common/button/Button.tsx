import React from 'react';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'outline';
  action?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, variant = 'primary', action, className }) => {
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-premium hover:shadow-hard',
    secondary: 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 shadow-sm',
    outline: 'bg-transparent text-primary-600 border-2 border-primary-600 hover:bg-primary-50'
  };

  return (
    <button
      className={`px-8 py-3 rounded-full font-bold transition-all duration-300 active:scale-95 focus:outline-none ${variants[variant]} ${className}`}
      onClick={action}
    >
      {label}
    </button>
  );
};

export default Button;
