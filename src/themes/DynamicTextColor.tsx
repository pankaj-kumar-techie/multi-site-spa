import { useEffect, useState } from 'react';

function calculateTextColor(bgColor: string): string {
    // Calculate relative luminance (perceived brightness)
    const r = parseInt(bgColor.slice(1, 3), 16) / 255;
    const g = parseInt(bgColor.slice(3, 5), 16) / 255;
    const b = parseInt(bgColor.slice(5, 7), 16) / 255;

    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    // Choose white or black text based on luminance
    return luminance > 0.5 ? 'black' : 'white';
}

export function useDynamicTextColor(bgColor: string): string {
    const [textColor, setTextColor] = useState<string>('');

    useEffect(() => {
        const calculatedTextColor = calculateTextColor(bgColor);
        setTextColor(calculatedTextColor);
    }, [bgColor]);

    return textColor;
}
