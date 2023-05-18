import React, {useEffect, useState} from 'react';
import {Section} from "./modal/Section";
import {PageService} from "./service/PageService";
import ErrorPage from "./components/comman/error/ErrorPage";
import {Renderer} from "./components/Renderer";
import Loader from "./components/comman/loader/Loader";
import Header from "./components/layouts/header/Header";
import Footer from "./components/layouts/footer/Footer";


export default function App() {
    const [sectionData, setSectionData] = useState<Section[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const clintDomainName = window.location.hostname;
    const [error, setError] = useState("");

    useEffect(() => {
        const loadPage = async () => {
            setLoading(true);
            console.log("Clint Domain Name  :", clintDomainName);

            try {
                const res = await PageService.getPage(clintDomainName);
                setLoading(false);
                setSectionData(res.data.section);
                console.log("Pass Section Data to Child Component ", res.data.section);
                return;
            } catch (error) {
                console.log("Error:", error);
            }

            // API call failed after maxRetries attempts
            setError("Failed to fetch data. Please try again later.");
            setLoading(false);
        };

        loadPage();
    }, [clintDomainName]);

    if (error) {
        return <ErrorPage message={error}/>;
    }


    return (
        <>
            {!loading && sectionData.length > 0 ? (
                <>
                    <Header></Header>
                    {sectionData.map((sectionData: Section) =>
                        Renderer.componentRenderV1("Home", sectionData)
                    )}
                    <Footer></Footer>
                </>
            ) : (
                <Loader/>
            )}
        </>
    );
}

