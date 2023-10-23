import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Blog, Package, Portfolio, Product } from './modal/Section';

interface ClientAppState {
    blogs: Blog[];
    portfolios: Portfolio[];
    packagesDetails: Package[];
    products: Product[];
}

const initialClientAppState: ClientAppState = {
    blogs: [],
    portfolios: [],
    packagesDetails:[],
    products: [],
};

const ClientAppDataContext = createContext<{
    state: ClientAppState;
    dispatch: React.Dispatch<ClientAppAction>;
    getBlogById: (id: string) => Blog | undefined;
    getPackageById: (id: number) => Package | undefined;
} | undefined>(undefined);

type ClientAppAction =
    | { type: 'SET_BLOGS'; payload: Blog[] }
    | { type: 'SET_PORTFOLIOS'; payload: Portfolio[] }
    | { type: 'SET_PACKAGES'; payload: Package[] }
    | { type: 'SET_PRODUCTS'; payload: Product[] };

const clientAppReducer = (state: ClientAppState, action: ClientAppAction): ClientAppState => {
    switch (action.type) {
        case 'SET_BLOGS':
            return { ...state, blogs: action.payload };
        case 'SET_PORTFOLIOS':
            return { ...state, portfolios: action.payload };
        case 'SET_PACKAGES':
            return{ ...state, packagesDetails: action.payload};
        case 'SET_PRODUCTS':
            return { ...state, products: action.payload };
        default:
            return state;
    }
};

export const ClientAppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(clientAppReducer, initialClientAppState);

    const getBlogById = (id: string) => state.blogs.find(clientBlog => clientBlog.id === id);
    const getPackageById = (id: number) => state.packagesDetails.find(clientBlog => clientBlog.id === id);

    return (
        <ClientAppDataContext.Provider value={{ state, dispatch, getBlogById, getPackageById }}>
            {children}
        </ClientAppDataContext.Provider>
    );
};

export const useClientAppDataContext = () => {
    const context = useContext(ClientAppDataContext);
    if (!context) {
        console.log('useClientAppDataContext must be used within a ClientAppProvider');
    }
    return context;
};

export default ClientAppDataContext;
