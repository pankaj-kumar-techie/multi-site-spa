import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import BlogList from "./views/blog/BlogList";
import BlogDetails from "./views/blog/BlogDetails";
import App from "./App";
import LandingPageApp from "./LandingPageApp";
import PageNotFound from "./views/page-not-found/PageNotFound";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route index element={<App/>}/>
            <Route path=":slug" element={<App/>}/>
            <Route path="blog" element={<BlogList/>}/>
            <Route path="blog/:id" element={<BlogDetails/>}/>
            <Route path="test" element={<LandingPageApp/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </BrowserRouter>
);

reportWebVitals();
