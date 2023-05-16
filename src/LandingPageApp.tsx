import React, { useEffect } from 'react';

const LandingPage: React.FC = () => {
    useEffect(() => {
        const socket = new WebSocket('ws://localhost:3001'); // Connect to the WebSocket server of the blog app running on port 3001

        socket.onopen = () => {
            console.log('WebSocket connection established');
        };

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            console.log('Received data from blog app:', data);
            // Process and update the landing page with the received data
        };

        socket.onclose = () => {
            console.log('WebSocket connection closed');
        };

        return () => {
            socket.close(); // Close the WebSocket connection when the component is unmounted
        };
    }, []);

    return <div>Landing Page</div>;
};

export default LandingPage;
