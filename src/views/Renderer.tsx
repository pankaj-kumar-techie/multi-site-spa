import AboutUs from "./about-us/AboutUs";
import HeroBanner from "./hero-banner/HeroBanner";
import ContactUs from "./contact-us/ContactUs";
import Portfolio from "./portfolio/Portfolio";
import Product from "./product/Product";
import Services from "./services/Services";
import Timeline from "./timeline/Timeline";
import PageNotFound from "./page-not-found/PageNotFound";
import ComingSoon from "./coming-soon/ComingSoon";
import Testimonials from "./testimonials/Testimonials";
import Gallery from "./gallery/Gallery";
import FAQAccordion from "./faq/FAQAccordion";
import TermsAndConditions from "./terms-and-conditions/TermsAndConditions";

export class Renderer {

    static componentRenderV1(website: string, section: any): JSX.Element {
        console.log("Section Data With Version ", section['data'].theme, section.version)
        const components: any = {
            HeroBanner: <HeroBanner key={section.id} data={section['data']} version={section['version']}></HeroBanner>,
            AboutUs: <AboutUs key={section.id} data={section['data']} version={section['version']}></AboutUs>,
            ContactUs: <ContactUs key={section.id} data={section['data']} version={section['version']}></ContactUs>,
            Portfolio: <Portfolio key={section.id} data={section['data']} version={section['version']}></Portfolio>,
            Product: <Product key={section.id} data={section['data']} version={section['version']}></Product>,
            Timeline: <Timeline key={section.id} data={section['data']} version={section['version']}></Timeline>,
            Service: <Services key={section.id} data={section['data']} version={section['version']}></Services>,
            Testimonial: <Testimonials key={section.id} data={section['data']}
                                       version={section['version']}></Testimonials>,
            Gallery: <Gallery key={section.id} data={section['data']} version={section['version']}></Gallery>,
            FAQ: <FAQAccordion key={section.id} data={section['data']} version={section['version']}></FAQAccordion>,
            TermsAndConditions: <TermsAndConditions key={section.id} data={section['data']}
                                                    version={section['version']}></TermsAndConditions>,

            ComingSoon: <ComingSoon key={section.id} data={section['data']} version={section['version']}></ComingSoon>,
            PageNotFound: <PageNotFound></PageNotFound>,
        };
        const type: any = section.data.type;
        return components[type];
    }
}

