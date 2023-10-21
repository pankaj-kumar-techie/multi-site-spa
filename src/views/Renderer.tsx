import FloatingButton from "../components/common/button/FloatingButton";
import LocationButton from "../components/common/button/LocationButton";
import Footer from "../components/layouts/footer/Footer";
import Header from "../components/layouts/header/Header";
import { PluginConfig } from "../modal/PluginConfig";
import { Theme } from "../modal/Theme";
import AboutUs from "./about-us/AboutUs";
import Blog from "./blog/Blog";
import ComingSoon from "./coming-soon/ComingSoon";
import ContactUs from "./contact-us/ContactUs";
import FAQAccordion from "./faq/FAQAccordion";
import Gallery from "./gallery/Gallery";
import HeroBanner from "./hero-banner/HeroBanner";
import OurTeam from "./our-team/OurTeam";
import Package from "./package/Package";
import PageNotFound from "./page-not-found/PageNotFound";
import Portfolio from "./portfolio/Portfolio";
import Product from "./product/Product";
import Services from "./services/Services";
import TermsAndConditions from "./terms-and-conditions/TermsAndConditions";
import Testimonials from "./testimonials/Testimonials";
import Timeline from "./timeline/Timeline";
import Video from "./video/Video";

export class Renderer {

    static componentRenderV1(theme: Theme, section: any): JSX.Element {
        console.log("Section Data With Version ", theme, section.version)

        const components: any = {
            Header: <Header key={section.id} data={section['data']} version={section['version']}></Header>,
            Footer: <Footer key={section.id} data={section['data']} version={section['version']}></Footer>,
            HeroBanner: <HeroBanner key={section.id} data={section['data']} version={section['version']}></HeroBanner>,
            AboutUs: <AboutUs key={section.id} data={section['data']} version={section['version']}></AboutUs>,
            ContactUs: <ContactUs key={section.id} data={section['data']} version={section['version']}></ContactUs>,
            Portfolio: <Portfolio key={section.id} data={section['data']} version={section['version']}></Portfolio>,
            OurTeam: <OurTeam key={section.id} data={section['data']} version={section['version']}></OurTeam>,
            Product: <Product key={section.id} data={section['data']} version={section['version']}></Product>,
            Package: <Package key={section.id} data={section['data']} version={section['version']}></Package>,
            Timeline: <Timeline key={section.id} data={section['data']} version={section['version']}></Timeline>,
            Service: <Services key={section.id} data={section['data']} version={section['version']}></Services>,
            Testimonial: <Testimonials key={section.id} data={section['data']} version={section['version']}></Testimonials>,
            Gallery: <Gallery key={section.id} data={section['data']} version={section['version']}></Gallery>,
            Videos: <Video key={section.id} data={section['data']} version={section['version']}></Video>,
            Blog: <Blog key={section.id} data={section['data']} version={section['version']}></Blog>,
            FAQ: <FAQAccordion key={section.id} data={section['data']} version={section['version']}></FAQAccordion>,
            TermsAndConditions: <TermsAndConditions key={section.id} data={section['data']} version={section['version']}></TermsAndConditions>,

            ComingSoon: <ComingSoon key={section.id} data={section['data']} version={section['version']}></ComingSoon>,
            PageNotFound: <PageNotFound></PageNotFound>,
        };
        const type: any = section.data.type;
        return components[type];
    }


    static renderPlugin(theme: Theme, plugin: PluginConfig): JSX.Element | null {
        const pluginComponents: any = {
            FloatingButton: <FloatingButton phoneNumber={plugin.data?.mobile} whatsappText={plugin.data?.text} />,
            LocationButton: <LocationButton locationName={plugin.location?.locationName} latitude={plugin.location?.latitude}
                longitude={plugin.location?.longitude}></LocationButton>
            // NavigationButtons: <NavigationButtons key={section.id} data={section['data']} version={section['version']} />,
            // GoogleReviews: <GoogleReviews key={section.id} data={section['data']} version={section['version']} />,
            // InstagramFeed: <InstagramFeed key={section.id} data={section['data']} version={section['version']} />,
        };

        const type: any = plugin.name;
        return pluginComponents[type] || null;
    }
}

