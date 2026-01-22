import { lazy, Suspense } from 'react';
import FloatingButton from "../components/common/button/FloatingButton";
import LocationButton from "../components/common/button/LocationButton";
import { PluginConfig } from "../modal/PluginConfig";
import { Theme } from "../modal/Theme";

const AboutUs = lazy(() => import('./about-us/AboutUs'));
const Blog = lazy(() => import('./blog/Blog'));
const Calendar = lazy(() => import('./calendar/Calendar'));
const ChatbotDemo = lazy(() => import('./chatbot-demo/ChatbotDemo'));
const ComingSoon = lazy(() => import('./coming-soon/ComingSoon'));
const ContactUs = lazy(() => import('./contact-us/ContactUs'));
const DetailsPage = lazy(() => import('./details-page/DetailsPage'));
const FAQAccordion = lazy(() => import('./faq/FAQAccordion'));
const Footer = lazy(() => import('./footer/Footer'));
const Gallery = lazy(() => import('./gallery/Gallery'));
const Header = lazy(() => import('./header/Header'));
const HeroBanner = lazy(() => import('./hero-banner/HeroBanner'));
const LogoMarquee = lazy(() => import('./gallery/LogoMarquee'));
const OurTeam = lazy(() => import('./our-team/OurTeam'));
const Package = lazy(() => import('./package/Package'));
const PageNotFound = lazy(() => import('./page-not-found/PageNotFound'));
const Plan = lazy(() => import('./plan/Plan'));
const Portfolio = lazy(() => import('./portfolio/Portfolio'));
const Product = lazy(() => import('./product/Product'));
const Services = lazy(() => import('./services/Services'));
const TermsAndConditions = lazy(() => import('./terms-and-conditions/TermsAndConditions'));
const Testimonials = lazy(() => import('./testimonials/Testimonials'));
const Timeline = lazy(() => import('./timeline/Timeline'));
const Video = lazy(() => import('./video/Video'));

export class Renderer {

    static componentRenderV1(theme: Theme, section: any): JSX.Element {
        const components: Record<string, (section: any) => JSX.Element> = {
            Header: (section) => <Suspense fallback={null}><Header key={section.id} data={section.data} /></Suspense>,
            Footer: (section) => <Suspense fallback={null}><Footer key={section.id} data={section.data} /></Suspense>,
            HeroBanner: (section) => <Suspense fallback={null}><HeroBanner key={section.id} data={section.data} /></Suspense>,
            AboutUs: (section) => <Suspense fallback={null}><AboutUs key={section.id} data={section.data} /></Suspense>,
            ContactUs: (section) => <Suspense fallback={null}><ContactUs key={section.id} data={section.data} /></Suspense>,
            Contact: (section) => <Suspense fallback={null}><ContactUs key={section.id} data={section.data} /></Suspense>,
            Portfolio: (section) => <Suspense fallback={null}><Portfolio key={section.id} data={section.data} /></Suspense>,
            OurTeam: (section) => <Suspense fallback={null}><OurTeam key={section.id} data={section.data} /></Suspense>,
            Product: (section) => <Suspense fallback={null}><Product key={section.id} data={section.data} /></Suspense>,
            Package: (section) => <Suspense fallback={null}><Package key={section.id} data={section.data} /></Suspense>,
            Timeline: (section) => <Suspense fallback={null}><Timeline key={section.id} data={section.data} /></Suspense>,
            DetailPage: () => <Suspense fallback={null}><DetailsPage /></Suspense>,
            Service: (section) => <Suspense fallback={null}><Services key={section.id} data={section.data} /></Suspense>,
            Testimonial: (section) => <Suspense fallback={null}><Testimonials key={section.id} data={section.data} /></Suspense>,
            Gallery: (section) => <Suspense fallback={null}><Gallery key={section.id} data={section.data} /></Suspense>,
            LogoMarquee: (section) => <Suspense fallback={null}><LogoMarquee key={section.id} data={section.data} /></Suspense>,
            Videos: (section) => <Suspense fallback={null}><Video key={section.id} data={section.data} /></Suspense>,
            Blog: (section) => <Suspense fallback={null}><Blog key={section.id} data={section.data} /></Suspense>,
            Plan: (section) => <Suspense fallback={null}><Plan key={section.id} data={section.data} /></Suspense>,
            FAQ: (section) => <Suspense fallback={null}><FAQAccordion key={section.id} data={section.data} /></Suspense>,
            TermsAndConditions: (section) => <Suspense fallback={null}><TermsAndConditions key={section.id} data={section.data} /></Suspense>,
            ComingSoon: (section) => <Suspense fallback={null}><ComingSoon key={section.id} data={section.data} /></Suspense>,
            Calendar: (section) => <Suspense fallback={null}><Calendar key={section.id} data={section.data} /></Suspense>,
            PageNotFound: () => <Suspense fallback={null}><PageNotFound /></Suspense>,
            ChatbotDemo: () => <Suspense fallback={null}><ChatbotDemo /></Suspense>,
        };

        const type = section.data.type;
        return (components[type] || (() => <div>Component {type} not found</div>))(section);
    }



    static renderPlugin(theme: Theme, plugin: PluginConfig): JSX.Element | null {
        const pluginComponents: any = {
            FloatingButton: <FloatingButton phoneNumber={plugin.data?.mobile} whatsappText={plugin.data?.text} />,
            LocationButton: <LocationButton locationName={plugin.location?.locationName} latitude={plugin.location?.latitude}
                longitude={plugin.location?.longitude}></LocationButton>
        };

        const type: any = plugin.name;
        return pluginComponents[type] || null;
    }
}

