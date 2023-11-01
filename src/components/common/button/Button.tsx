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
    <div className=' flex justify-center items-center'>
      <button className={`${theme.buttons.secondary} ${textColor} hover:bg-${theme.buttons.primary} h-${height} w-${width}`} onClick={action}>
        {label}
      </button>
    </div>
  );
};

export default Button;
