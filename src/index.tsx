import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import PageNotFound from "./views/page-not-found/PageNotFound";
import { ClientAppProvider } from './ClientAppDataContext';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ClientAppProvider>
        <BrowserRouter>
            <Routes>
                <Route index element={<App />} />
                <Route path=":slug/:id" element={<App />} />
                {/* <Route path="/:slug/:id" element={<DetailsPage />} /> */}
                {/* <Route path="blogs/:id" element={<DetailsPage />} />
                {/*<Route path="test" element={<LandingPageApp/>}/>*/}
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    </ClientAppProvider>

);

reportWebVitals();
