import React, {useEffect, useState} from 'react';
import HeroBanner from "./components/hero-banner/HeroBanner";
import AboutUs from "./components/about-us/AboutUs";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Timeline from "./components/timeline/Timeline";
import ContactUs from "./components/contact-us/ContactUs";
import Echo from "./components/Echo";
import {PageService} from "./service/PageService";
import {Page} from "./modal/Page";
import {useParams} from "react-router-dom";


function App() {
    const [landingPageData, setLandingPageData] = useState<Page>();
    const params = useParams<any>();


    useEffect(() => {
        loadPage();
    }, []);


    const loadPage = () => {
        PageService.getPage(params.htmlId ?? 'home').then((res) => {
            console.log(res);
            setLandingPageData(res.data.name);
        }).catch((reson) => {
            console.log("Error :" + reson)
        });
    }

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
            <Echo data={landingPageData}></Echo>
        </>
    );
}

export default App;
