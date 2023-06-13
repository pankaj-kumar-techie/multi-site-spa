import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import BlogDetails from "./views/blog/BlogDetails";
import App from "./App";
import PageNotFound from "./views/page-not-found/PageNotFound";
import FirstBlog from "./views/blog/v1/FirstBlog";
import TravelChatBot from "./TravelChatBot";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route index element={<App/>}/>
            <Route path=":slug" element={<App/>}/>
            <Route path="blog" element={<FirstBlog/>}/>
            <Route path="blog/:id" element={<BlogDetails/>}/>
            {/*<Route path="test" element={<LandingPageApp/>}/>*/}
            <Route path="test" element={<TravelChatBot/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </BrowserRouter>
);

reportWebVitals();
