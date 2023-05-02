import { useEffect, useRef } from 'react';

const Tracking = () => {
    const timeOnPageRef = useRef(0);
    const scrollPositionRef = useRef(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            timeOnPageRef.current += 1;
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                console.log(`User spent ${timeOnPageRef.current} seconds on this page`);
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            console.log(`User spent ${timeOnPageRef.current} seconds on this page`);
        };
    }, [timeOnPageRef]);

    useEffect(() => {
        const handleScroll = () => {
            scrollPositionRef.current = window.scrollY;
            if (scrollPositionRef.current > 1914911.189749539) {
                console.log('User has scrolled past 1914911.189749539px');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClick = () => {
            console.log('User clicked on the page');
        };

        document.addEventListener('click', handleClick);

        return () => document.removeEventListener('click', handleClick);
    }, []);

    return null;
};

export default Tracking;
