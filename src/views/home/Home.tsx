import React, {useEffect, useState} from "react";
import {Section} from "../../modal/Section";
import {PageService} from "../../service/PageService";
import {Renderer} from "../../components/Renderer";
import Loader from "../../components/comman/loader/Loader";
import ErrorPage from "../../components/comman/error/ErrorPage";

export default function Home() {
    const [sectionData, setSectionData] = useState<Section[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const clintHostName = window.location.hostname;
    const [error, setError] = useState("");

    useEffect(() => {
        const loadPage = async () => {
            setLoading(true);
            console.log("Clint Domain Name  :", clintHostName);

            let retryCount = 0;
            const maxRetries = 2;

            while (retryCount < maxRetries) {
                try {
                    const res = await PageService.getPage(clintHostName);
                    setLoading(false);
                    setSectionData(res.data.section);
                    console.log("Pass Section Data to Child Component ", res.data.section);
                    return;
                } catch (error) {
                    console.log("ErrorPage:", error);
                    retryCount++;
                }
            }

            // API call failed after maxRetries attempts
            setError("Failed to load page data after " + maxRetries + " attempts.");
            setLoading(false);
        };

        loadPage();
    }, [clintHostName]);

    if (error) {
        return <ErrorPage message={error}/>;
    }


    return (
        <>
            {!loading && sectionData.length > 0 ? (
                <>
                    {sectionData.map((sectionData: Section) =>
                        Renderer.componentRenderV1("Home", sectionData)
                    )}
                </>
            ) : (
                <Loader/>
            )}
        </>
    );
}
