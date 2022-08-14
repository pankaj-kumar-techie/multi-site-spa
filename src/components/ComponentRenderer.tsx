import AboutUs from "./about-us/AboutUs";
import PageNotFound from "./page-not-found/PageNotFound";
import HeroBanner from "./hero-banner/HeroBanner";
import ContactUs from "./contact-us/ContactUs";

//Todo: refactor code use good approach instead of switch case

export class ComponentRenderer {

    static render(siteId:string , section: any): JSX.Element{
        console.log("Render");
        switch (section['data']['type']){
            case 'AboutUs':
                return <AboutUs data={section['data']}></AboutUs>;
            case 'HeroBanner':
                return <HeroBanner data={section['data']}></HeroBanner>;
            case 'ContactUs':
                return <ContactUs data={section['data']}></ContactUs>;
            default:
                return <PageNotFound></PageNotFound>;
        }
    }

}
