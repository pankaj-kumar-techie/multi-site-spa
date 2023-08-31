import React, { useContext } from "react";
import { ThemeContext } from "../../../themes/ThemeProvider";

interface NavigationButtonsProps {
    onPrev: () => void;
    onNext: () => void;
    isPrevDisabled: boolean;
    isNextDisabled: boolean;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({ onPrev, onNext, isPrevDisabled, isNextDisabled }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="flex justify-center mt-6">
            <button
                onClick={onPrev}
                disabled={isPrevDisabled}
                className={`mr-4 ${theme.background.secondary} hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300`}>
                Previous
            </button>
            <button
                onClick={onNext}
                disabled={isNextDisabled}
                className={`${theme.background.secondary} hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300`}
            >
                Next
            </button>
        </div>
    );
};

export default NavigationButtons;
