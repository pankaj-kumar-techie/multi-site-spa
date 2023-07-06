import React from 'react';

interface ButtonProps {
  label: string;
  color?: string;
  action?: () => void;
  height?: string;
  width?: string;
}

const Button: React.FC<ButtonProps> = ({ label, color = 'blue', action, height, width }) => {
  const getButtonColorClass = (color: string): string => {
    switch (color) {
      case 'blue':
        return 'bg-blue-500 hover:bg-blue-700 text-white';
      case 'red':
        return 'bg-red-500 hover:bg-red-700 text-white';
      case 'green':
        return 'bg-green-500 hover:bg-green-700 text-white';
      default:
        return 'bg-blue-500 hover:bg-blue-700 text-white';
    }
  };

  const buttonStyle = {
    height,
    width,
  };

  const buttonClasses = `py-2 px-4 rounded-md ${getButtonColorClass(color)}`;

  return (
    <button className={buttonClasses} style={buttonStyle} onClick={action}>
      {label}
    </button>
  );
};

export default Button;
