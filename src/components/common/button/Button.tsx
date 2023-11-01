import React, { useContext } from 'react';
import { ThemeContext } from '../../../themes/ThemeProvider';
import { useDynamicTextColor } from '../../../themes/DynamicTextColor';

interface ButtonProps {
  label: string;
  color?: string;
  action?: () => void;
  height?: string;
  width?: string;
}

const Button: React.FC<ButtonProps> = ({ label, color, action, height, width }) => {
  const { theme } = useContext(ThemeContext);
  const textColor = useDynamicTextColor(theme.colors.primary || "");


  return (
    <div className='flex justify-center items-center'>
    <button
      className={`bg-${color || theme.buttons.secondary} hover:bg-${theme.buttons.primary} ${textColor} font-semibold py-${height || '3'} px-${width || '10'} rounded focus:outline-none transition-all duration-300 ease-in-out`}
      onClick={action}
    >
      {label}
    </button>
  </div>
  );
};

export default Button;
