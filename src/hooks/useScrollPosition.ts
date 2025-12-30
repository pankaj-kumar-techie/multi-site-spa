import { useEffect, useState } from 'react';

/**
 * Custom hook to track scroll position
 * @param threshold - The scroll position threshold to trigger the state change (default: 90)
 * @returns boolean indicating if the scroll position is past the threshold
 */
export const useScrollPosition = (threshold: number = 90): boolean => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY >= threshold);
        };

        window.addEventListener('scroll', handleScroll);

        // Check initial scroll position
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [threshold]);

    return isScrolled;
};
