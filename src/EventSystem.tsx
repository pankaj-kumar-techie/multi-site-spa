import React, { createContext, useContext } from 'react';

interface EventContextType {
    subscribe: (event: string, callback: () => void) => void;
    publish: (event: string) => void;
}

const EventContext = createContext<EventContextType | null>(null);

export const EventProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const eventListeners: { [event: string]: (() => void)[] } = {};

    const subscribe = (event: string, callback: () => void) => {
        if (!eventListeners[event]) {
            eventListeners[event] = [];
        }
        eventListeners[event].push(callback);
    };

    const publish = (event: string) => {
        const listeners = eventListeners[event];
        if (listeners) {
            listeners.forEach((callback) => callback());
        }
    };

    return (
        <EventContext.Provider value={{ subscribe, publish }}>
            {children}
        </EventContext.Provider>
    );
};

export const useEventSystem = () => {
    const eventSystem = useContext(EventContext);
    if (!eventSystem) {
        throw new Error('useEventSystem must be used within an EventProvider');
    }
    return eventSystem;
};
