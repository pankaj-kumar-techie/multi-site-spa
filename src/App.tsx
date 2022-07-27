import React, {useEffect, useState} from 'react';
import HeroBanner from "./components/hero-banner/HeroBanner";
import AboutUs from "./components/about-us/AboutUs";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Timeline from "./components/timeline/Timeline";
import ContactUs from "./components/contact-us/ContactUs";
import Echo from "./components/Echo";
import JsonData from "./data.json";


function App() {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);
    return (
        <>
            <HeroBanner></HeroBanner>
            <AboutUs></AboutUs>
            <Timeline></Timeline>
            <Portfolio></Portfolio>
            <Services></Services>
            {/*<AboutUs></AboutUs>*/}
            {/*<CommingSoon></CommingSoon>*/}
            {/*<Login></Login>*/}
            <ContactUs></ContactUs>
            {/*<Keyboard></Keyboard>*/}
            <Echo data={JsonData.About.paragraph}></Echo>
        </>
    );
}

export default App;
