    import { useEffect, useState } from 'react';

    function calculateTextColor(bgColorClass: string): string {
        // Mapping of specific background color classes to corresponding text color classes
        const colorMappings: { [bgClass: string]: string } = {
            'black': 'text-white',
            'white': 'text-black',
            'custom-blue': 'text-white',
            'custom-brown': 'text-black',
            'blue-500': 'text-white',
            'teal-500': 'text-white',
            'orange-500': 'text-white',
            'red-500': 'text-white',
            'slate-500': 'text-black',
            // Add more mappings as needed
        };

        // Check if a specific mapping exists for the provided background color class
        if (colorMappings[bgColorClass]) {
            return colorMappings[bgColorClass];
        }

        // Calculate relative luminance (perceived brightness) for other background colors
        const bgColor = getComputedStyle(document.documentElement).getPropertyValue(`--${bgColorClass.replace('bg-', '')}`);
        const r = parseInt(bgColor.slice(1, 3), 16) / 255;
        const g = parseInt(bgColor.slice(3, 5), 16) / 255;
        const b = parseInt(bgColor.slice(5, 7), 16) / 255;

        const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

        return luminance > 0.5 ? 'text-black' : 'text-white';
    }


    export function useDynamicTextColor(bgColorClass: string): string {
        const [textColor, setTextColor] = useState<string>('');

        useEffect(() => {
            const calculatedTextColor = calculateTextColor(bgColorClass);
            setTextColor(calculatedTextColor);
        }, [bgColorClass]);

        return textColor;
    }
