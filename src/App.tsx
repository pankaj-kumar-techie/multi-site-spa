import React, {useEffect, useState} from 'react';
import {Section} from "./modal/Section";
import {PageService} from "./service/PageService";
import ErrorPage from "./components/comman/error/ErrorPage";
import Loader from "./components/comman/loader/Loader";
import {ClientService} from "./service/ClientService";
import {Renderer} from "./views/Renderer";
import { websites } from './@local-db/website';


//Todo : Pass static data form @loacl_db/website to setSectionData
export default function App() {
    const [sectionData, setSectionData] = useState<Section[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const clientDomainName = window.location.hostname;
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const loadPage = async () => {
            setLoading(true);
            console.log('Client Domain Name:', clientDomainName);

            let path = window.location.pathname.substring(1); // Remove leading '/';

            console.log('Path:', path);

            // if (!path) {
            //     path = 'index';
            // }

            try {
                // if (!localStorage.getItem('client-id')) {
                //     const clientResponse = await ClientService.getClientDetail(clientDomainName);
                //     const clientId = clientResponse.data.id;
                //     // Store client ID in local storage
                //     localStorage.setItem('client-id', clientId);
                // }

                // const res = await PageService.getPage(path);
                setLoading(false);

                setSectionData(websites);

                // setSectionData(res.data.section);
                // console.log('Pass Section Data to Child Component', res.data.section);
            } catch (error) {
                console.log('Error:', error);
                setError('Failed to fetch data. Please try again later.');
                setLoading(false);
            }
        };

        loadPage();
    }, [clientDomainName]);

    if (error) {
        return <ErrorPage message={error}/>;
    }

    return (
        <>
            {!loading && sectionData.length > 0 ? (
                <>
                    {sectionData.map((sectionData: Section) =>
                        Renderer.componentRenderV1('Home', sectionData)
                    )}
                </>
            ) : (
                <Loader/>
            )}
        </>
    );
}
