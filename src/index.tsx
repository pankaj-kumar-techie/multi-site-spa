import ReactDOM from 'react-dom/client';
import { Suspense } from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import PageNotFound from "./views/page-not-found/PageNotFound";
import { ClientAppProvider } from './ClientAppDataContext';
import ErrorBoundary from './components/ErrorBoundary';
import { HelmetProvider } from 'react-helmet-async';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <HelmetProvider>
        <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
                <ClientAppProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route index element={<App />} />
                            <Route path=":slug" element={<App />} />
                            <Route path=":slug/:id" element={<App />} />
                            <Route path="*" element={<PageNotFound />} />
                        </Routes>
                    </BrowserRouter>
                </ClientAppProvider>
            </Suspense>
        </ErrorBoundary>
    </HelmetProvider>
);

reportWebVitals();
