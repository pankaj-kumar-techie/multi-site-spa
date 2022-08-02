import React, {useEffect, useState} from 'react';
import HeroBanner from "./components/hero-banner/HeroBanner";
import AboutUs from "./components/about-us/AboutUs";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Timeline from "./components/timeline/Timeline";
import ContactUs from "./components/contact-us/ContactUs";
import Echo from "./components/Echo";
import {PageService} from "./service/PageService";
import {useParams} from "react-router-dom";
import {Section} from "./modal/Section";
import PageNotFound from "./components/page-not-found/PageNotFound";


function App() {
    const [landingPageData, setLandingPageData] = useState<any>([]);
    const [sectionData, setSectionData] = useState<Section>();
    const [loading,setLoading] = useState<boolean>(false);
    const params = useParams<any>();
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        loadPage();
    }, []);


    const loadPage = () => {
        setLoading(true);
        PageService.getPage(params.htmlId ?? 'home').then((res) => {
            console.log(res);
            setLoading(false)
            setLandingPageData(res.data);
            const sectionData_1 = res.data.section[0]
            setSectionData(sectionData_1);
            console.log('Section Data ',res.data);
        }).catch((reson) => {
            console.log("Error :" + reson)
        });
    }

    return (
         <>
             {!loading ?<div>
                     <HeroBanner></HeroBanner>
                     <AboutUs data={sectionData}></AboutUs>
                     <Timeline></Timeline>
                     <Portfolio></Portfolio>
                     <Services></Services>
                     {/*<AboutUs></AboutUs>*/}
                     {/*<CommingSoon></CommingSoon>*/}
                     {/*<Login></Login>*/}
                     <ContactUs></ContactUs>
                     {/*<Keyboard></Keyboard>*/}
                     <Echo data={landingPageData}></Echo>
                 </div> : <PageNotFound></PageNotFound>}
        </>
    );
}

export default App;
