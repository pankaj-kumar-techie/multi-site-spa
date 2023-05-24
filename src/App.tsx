import React, {useEffect, useState} from 'react';
import {Section} from "./modal/Section";
import {PageService} from "./service/PageService";
import ErrorPage from "./components/comman/error/ErrorPage";
import {Renderer} from "./components/Renderer";
import Loader from "./components/comman/loader/Loader";
import Header from "./components/layouts/header/Header";
import Footer from "./components/layouts/footer/Footer";
import {ClientService} from "./service/ClientService";

export default function App() {
    const [sectionData, setSectionData] = useState<Section[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const clientDomainName = window.location.hostname;
    let path = window.location.pathname.substring(1); // Remove leading '/';
    const [error, setError] = useState("");

    useEffect(() => {
        const loadPage = async () => {
            setLoading(true);
            console.log("Client Domain Name:", clientDomainName);
            console.log("Path:", path);

            if (!path) {
                path = "index";
            }

            try {
                if (!localStorage.getItem('client-id')) {
                    const clientResponse = await ClientService.getClientDetail(clientDomainName);
                    const clientId = clientResponse.data.id;
                    // Store client ID in local storage
                    localStorage.setItem('client-id', clientId);
                }

                const res = await PageService.getPage(path);
                setLoading(false);
                setSectionData(res.data.section);
                console.log("Pass Section Data to Child Component", res.data.section);
            } catch (error) {
                console.log("Error:", error);
                // API call failed after maxRetries attempts
                setError("Failed to fetch data. Please try again later.");
                setLoading(false);
            }
        };

        loadPage();
    }, [clientDomainName, path]);

    if (error) {
        return <ErrorPage message={error}/>;
    }

    return (
        <>
            {!loading && sectionData.length > 0 ? (
                <>
                    <Header data={""} version={"v1"}/>
                    {sectionData.map((sectionData: Section) =>
                        Renderer.componentRenderV1("Home", sectionData)
                    )}
                    <Footer data={""} version={"v1"}/>
                </>
            ) : (
                <Loader/>
            )}
        </>
    );
}
