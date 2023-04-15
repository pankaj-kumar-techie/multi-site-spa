import AboutUs from "./about-us/AboutUs";
import HeroBanner from "./hero-banner/HeroBanner";
import ContactUs from "./contact-us/ContactUs";
import Portfolio from "./portfolio/Portfolio";
import Product from "./product/Product";
import Services from "./services/Services";
import Timeline from "./timeline/Timeline";
import PageNotFound from "./page-not-found/PageNotFound";
import CommingSoon from "./comming-soon/CommingSoon";

//Todo: refactor code use good approach instead of switch case

export class Renderer {

    // static componentRender(siteId:string , section: any): JSX.Element{
    //     console.log("Render");
    //     switch (section['data']['type']){
    //         case 'AboutUs':
    //             return <AboutUs data={section['data']} version={'v1'}></AboutUs>;
    //         case 'HeroBanner':
    //             return <HeroBanner data={section['data']}></HeroBanner>;
    //         case 'ContactUs':
    //             return <ContactUs data={section['data']}></ContactUs>;
    //         case 'Portfolio':
    //             return <Portfolio></Portfolio>;
    //         case 'Product':
    //             return <Product data={section['data']}></Product>;
    //         case 'Service':
    //             return <Services></Services>;
    //         case 'Timeline':
    //             return <Timeline></Timeline>;
    //         case 'Default':
    //             return <Echo data={section['data']}></Echo>;
    //         case 'CommingSoon':
    //             return <CommingSoon></CommingSoon>;
    //         case 'PageNotFound':
    //             return <PageNotFound></PageNotFound>;
    //         default:
    //             return <PageNotFound></PageNotFound>;
    //     }
    // }


    //Todo : Get Section Version and pass version value

    static componentRenderV1(website:string , section: any): JSX.Element{
        const components: any = {
            AboutUs: <AboutUs data={section['data']} version={'v2'}></AboutUs>,
            HeroBanner: <HeroBanner data={section['data']} version={'v2'}></HeroBanner>,
            ContactUs: <ContactUs data={section['data']}></ContactUs>,
            Portfolio: <Portfolio data={section['data']}></Portfolio>,
            Product: <Product data={section['data']}></Product>,
            Timeline: <Timeline data={section['data']}></Timeline>,
            Service: <Services data={section['data']}></Services>,
            CommingSoon: <CommingSoon></CommingSoon>,
            PageNotFound : <PageNotFound></PageNotFound>,
        };
        console.log("Section type :" + section['data']['type']);
        const type: any = section.data.type;
        console.log("Render V2 called :" + type);

        return components[type];
    }
}

