import React from "react";
import HeroBanner from "./components/hero-banner/HeroBanner";
import AboutUs from "./components/about-us/AboutUs";
import ContactUs from "./components/contact-us/ContactUs";
import Gallery from "./components/gallery/Gallery";
import Testimonials from "./components/testimonials/Testimonials";
import Services from "./components/services/Services";
import FAQAccordion from "./components/faq/FAQAccordion";
import TermsAndConditions from "./components/terms-and-conditions/TermsAndConditions";
import Product from "./components/product/Product";
import Portfolio from "./components/portfolio/Portfolio";

const EchoPage = () => {

    return (
        <>
            <HeroBanner key={"1"} data={""} version={"v1"}></HeroBanner>
            <AboutUs key={"11"} data={""} version={"v1"}></AboutUs>
            <Gallery key={"12"} data={""} version={"v1"}></Gallery>
            <Testimonials key={"21"} data={""} version={"v1"}></Testimonials>
            <Services key={"121"} data={""} version={"v1"}></Services>
            <Portfolio key={"111"} data={""} version={"v1"}></Portfolio>
            <ContactUs key={"122"} data={""} version={"v1"}></ContactUs>
            <Product key={"211"} data={""} version={"v1"}></Product>
            <FAQAccordion key={"1221"} data={""} version={"v1"}></FAQAccordion>
            <TermsAndConditions key={"1121"} data={""} version={"v1"}></TermsAndConditions>

        </>
    );
};

export default EchoPage;
