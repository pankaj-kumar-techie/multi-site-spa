import AboutUs from "./about-us/AboutUs";
import PageNotFound from "./page-not-found/PageNotFound";
import HeroBanner from "./hero-banner/HeroBanner";
import ContactUs from "./contact-us/ContactUs";
import CommingSoon from "./comming-soon/CommingSoon";
import Portfolio from "./portfolio/Portfolio";
import Services from "./services/Services";
import Timeline from "./timeline/Timeline";
import Echo from "./Echo";
import Product from "./product/Product";

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




    static componentRenderV1(siteId:string , section: any): JSX.Element{
        const components: any = {
            AboutUs: <AboutUs data={section['data']} version={'v1'}></AboutUs>,
            HeroBanner: <HeroBanner data={section['data']}></HeroBanner>,
            ContactUs: <ContactUs data={section['data']}></ContactUs>
        };
        // const {role} = section.filter(s=>section['data']['type']);
        console.log("Section type :" + section['data']['type']);
        // const typeTwo = section.filter((t: { [x: string]: any; }) => t['data']['type']);
        const type: any = section.data.type;
        console.log("Render V2 called :" + type);

        const Component: any = components[type];

        return Component;
    }
}

