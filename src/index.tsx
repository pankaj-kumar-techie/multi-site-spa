import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageNotFound from "./components/page-not-found/PageNotFound";
import Home from "./views/home/Home";
import TravelChatBot from "./TravelChatBot";
import BlogList from "./views/blog/BlogList";
import BlogDetails from "./views/blog/BlogDetails";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            {/*<Route path="website/:slug" element={<Home/>}/>*/}
            <Route path="blog" element={<BlogList/>}/>
            <Route path="blog/:id" element={<BlogDetails/>}/>
            <Route path="echo" element={<TravelChatBot/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </BrowserRouter>
    // <React.StrictMode>
    //   <App />
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
