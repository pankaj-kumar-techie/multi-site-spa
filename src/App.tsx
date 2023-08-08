import React, {useEffect, useState} from 'react';
import {Section} from "./modal/Section";
import ErrorPage from "./components/common/error/ErrorPage";
import Loader from "./components/common/loader/Loader";
import {Renderer} from "./views/Renderer";
 import {basic, blogpahariyatri, gayatrilodge, pahariyatri, techie, website1, website2, website3} from './@local-db/website';
import ThemeProvider from './themes/ThemeProvider';
import {HelmetManager} from "./utils/HelmetManager";
import { PageService } from './service/PageService';
// import { ClientService } from './service/ClientService';


//Todo : Pass dynamics data form Api response to renderer instead of @loacl_db/website
export default function App() {
    const [sectionData, setSectionData] = useState<Section[]>([]);
    const [theme, setTheme] = useState<any>();
    // const { theme } = useContext(ThemeContext);
    const [loading, setLoading] = useState<boolean>(false);
    const clientDomainName = window.location.hostname;
    const [error, setError] = useState<string>('');


    useEffect(() => {
        const loadPage = async () => {
            setLoading(true);
            console.log('Client Domain Name:', clientDomainName);

            let path = window.location.pathname.substring(1); // Remove leading '/';

            console.log('Path:', path);

            if (!path) {
                path = 'index';
            }

            try {
                // if (!localStorage.getItem('client-id')) {
                //     const clientResponse = await ClientService.getClientDetail(clientDomainName);
                //     const clientId = clientResponse.data.id;
                //     // Store client ID in local storage
                //     localStorage.setItem('client-id', clientId);
                // }

                // const res = await PageService.getPage(path);
                setLoading(false);

                switch (clientDomainName) {
                    case "spa-app-loonds.vercel.app":
                        setSectionData(techie);
                        break;
                    case "spa-app-git-main-loonds.vercel.app":
                        setSectionData(website2);
                        break;
                    case "spa-app-alpha.vercel.app":
                        setSectionData(website3);
                        break;
                    case "pahariyatri.com":
                        setSectionData(pahariyatri);
                        break;
                    case "techie.pahariyatri.com":
                        setSectionData(techie);
                        break;
                    case "gayatrilodge.com":
                        setSectionData(gayatrilodge);
                        break;
                    case "blog.pahariyatri.com":
                        setSectionData(blogpahariyatri);
                        break;
                    default:
                        setSectionData(gayatrilodge);
                        break;
                }

                // const res = await PageService.getPage(path);
                // setLoading(false);
                // console.log('Page Section Data:', res.data.theme);
                // setSectionData(res.data.section);
                // setTheme(res.data.theme);

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
    if (loading || sectionData.length === 0) {
        return <Loader />;
    }

    return (
        <>
           <HelmetManager title={clientDomainName} description={clientDomainName} keywords={""}></HelmetManager>
            {!loading && sectionData.length > 0 ? (
                <>
                    <ThemeProvider theme={"classic"}>
                        {sectionData.map((sectionData: Section) =>
                            Renderer.componentRenderV1(theme, sectionData)
                        )}
                    </ThemeProvider>
                </>
            ) : (
                <Loader/>
            )}
        </>
    );
}
