import AboutUs from "./about-us/AboutUs";
import PageNotFound from "./page-not-found/PageNotFound";
import HeroBanner from "./hero-banner/HeroBanner";

export class ComponentRenderer {

    static render(siteId:string , section: any): JSX.Element{
        console.log("Render");
        switch (section['data']['type']){
            case 'AboutUs':
                return <AboutUs data={section['data']}></AboutUs>;
            case 'HeroBanner':
                return <HeroBanner data={section['data']}></HeroBanner>;
            default:
                return <PageNotFound></PageNotFound>;
        }
    }

}
