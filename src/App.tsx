import React from 'react';
import HeroBanner from "./components/hero-banner/HeroBanner";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Timeline from "./components/timeline/Timeline";
import ContactUs from "./components/contact-us/ContactUs";


function App() {

    return (
         <>
                     <HeroBanner></HeroBanner>
                     {/*<AboutUs data={sectionData}></AboutUs>*/}
                     <Timeline></Timeline>
                     <Portfolio></Portfolio>
                     <Services></Services>
                     {/*<AboutUs></AboutUs>*/}
                     {/*<CommingSoon></CommingSoon>*/}
                     {/*<Login></Login>*/}
                     <ContactUs></ContactUs>
                     {/*<Keyboard></Keyboard>*/}
        </>
    );
}

export default App;
