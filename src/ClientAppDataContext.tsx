import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Blog, Portfolio, Product } from './modal/Section';

// Define your initial state
interface ClientAppState {
    blogs: Blog[];
    portfolios: Portfolio[];
    products: Product[];
    // Add other data properties you need
}

const initialClientAppState: ClientAppState = {
    blogs: [],
    portfolios: [],
    products: [],
    // Initialize other data properties
};

// Define your context
const ClientAppDataContext = createContext<{
    state: ClientAppState;
    dispatch: React.Dispatch<ClientAppAction>;
    getBlogById: (id: string) => Blog | undefined;
    // getPortfolioByKey: (key: string) => Portfolio | undefined;
    // getProductById: (id: string) => Product | undefined;
} | undefined>(undefined);

// Define action types
type ClientAppAction =
    | { type: 'SET_BLOGS'; payload: Blog[] }
    | { type: 'SET_PORTFOLIOS'; payload: Portfolio[] }
    | { type: 'SET_PRODUCTS'; payload: Product[] };
// Define action interfaces for other data properties

// Create a client app reducer
const clientAppReducer = (state: ClientAppState, action: ClientAppAction): ClientAppState => {
    switch (action.type) {
        case 'SET_BLOGS':
            return { ...state, blogs: action.payload };
        case 'SET_PORTFOLIOS':
            return { ...state, portfolios: action.payload };
        case 'SET_PRODUCTS':
            return { ...state, products: action.payload };
        default:
            return state;
    }
};

// Create a ClientAppProvider component
export const ClientAppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(clientAppReducer, initialClientAppState);

    // Helper functions to access data by ID or key
    const getBlogById = (id: string) => state.blogs.find(clientBlog => clientBlog.id === id);
    // const getProductById = (id: string) => state.products.find(clientProduct => clientProduct.id === id);

    return (
        <ClientAppDataContext.Provider
            value={{ state, dispatch, getBlogById }}
        >
            {children}
        </ClientAppDataContext.Provider>
    );
};

// Create a custom hook to access the context
export const useClientAppDataContext = () => {
    const context = useContext(ClientAppDataContext);
    if (!context) {
        console.log('useClientAppDataContext must be used within a ClientAppProvider');
    }
    return context;
};

export default ClientAppDataContext;
