import React from "react";
import HeroBanner from "./views/hero-banner/HeroBanner";
import AboutUs from "./views/about-us/AboutUs";
import Product from "./views/product/Product";
import Testimonials from "./views/testimonials/Testimonials";
import FAQAccordion from "./views/faq/FAQAccordion";
import ContactUs from "./views/contact-us/ContactUs";
import Footer from "./components/layouts/footer/Footer";
import Header from "./components/layouts/header/Header";
import Gallery from "./views/gallery/Gallery";

const TravelChatBot = () => {
    const data = {
        "type": "HeroBanner",
        "id": null,
        "title": "Gayatri Lodge!",
        "subTitle": "Have a question or need help planning your trip? Contact us using the information below or fill out the form and we'll get back to you as soon as the form and we'll get back to you as soon as possiblethe",
        "description": "Inspirational designs illustrations",
        "version": "v1",
        "style": "CLASSIC",
        "tagline": "",
        "banner": null,
        "slides": null,
        "delay": 0
    }
    const data2 = {
        "type": "HeroBanner",
        "id": null,
        "title": "Gayatri Lodge!",
        "subTitle": "Have a question or need help planning your trip? Contact us using the information below or fill out the form and we'll get back to you as soon as the form and we'll get back to you as soon as possiblethe",
        "description": "Inspirational designs illustrations",
        "version": "v1",
        "style": "MODERN",
        "tagline": "",
        "banner": null,
        "slides": null,
        "delay": 0
    }

    return (
        <>
            <Header key={"kdk"} data={""} version={"v1"}></Header>
            <HeroBanner key={"1"} data={data} version={"v1"}></HeroBanner>
            <AboutUs key={"11"} data={data} version={"v1"}></AboutUs>
            <Product key={"111"} data={data} version={"v1"}></Product>
            <Gallery key={"2323"} data={data} version={"v1"}></Gallery>
            <Testimonials key={"11111"} data={data} version={"v1"}></Testimonials>
            <ContactUs key={"1111"} data={data} version={"v1"}></ContactUs>
            <FAQAccordion key={"111111"} data={data} version={"v1"}></FAQAccordion>
            <Footer key={"1111111"} data={data} version={"v1"}></Footer>
        </>
    );
};

export default TravelChatBot;
