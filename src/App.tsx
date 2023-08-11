import React, { useEffect, useState } from 'react';
import { Section } from "./modal/Section";
import ErrorPage from "./components/common/error/ErrorPage";
import Loader from "./components/common/loader/Loader";
import { Renderer } from "./views/Renderer";
import ThemeProvider from './themes/ThemeProvider';
import { HelmetManager } from "./utils/HelmetManager";
import { PageService } from './service/PageService';
import { pahariyatri, pahariyatriseo } from './@local-db/pahariyatri';
import { gayatrilodge, gayatrilodgeSeo } from './@local-db/gayatrilodge';
import { blogpahariyatri, blogpahariyatriseo } from './@local-db/blog';
import { techie, techiepahariyatriseo } from './@local-db/techie';
import { northVibeDesign, northVibeDesignSeo} from './@local-db/nvd';
// import { ClientService } from './service/ClientService';


//Todo : Pass dynamics data form Api response to renderer instead of @loacl_db/website
export default function App() {
    const [sectionData, setSectionData] = useState<Section[]>([]);
    const [seo, setSeo] = useState<any>();
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
            console.log('Page Path:', path);

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
                    case "pahariyatri.com":
                        setSeo(pahariyatriseo);
                        setSectionData(pahariyatri);
                        break;
                    case "techie.pahariyatri.com":
                        setSeo(techiepahariyatriseo);
                        setSectionData(techie);
                        break;
                    case "blog.pahariyatri.com":
                        setSeo(blogpahariyatriseo);
                        setSectionData(blogpahariyatri);
                        break;
                    case "dev.pahariyatri.com":
                        setSeo(northVibeDesignSeo);
                        setSectionData(northVibeDesign);
                        break;
                    case "gayatrilodge.com":
                        setSeo(gayatrilodgeSeo);
                        setSectionData(gayatrilodge);
                        break;
                    default:
                        setSectionData(northVibeDesign);
                        setSeo(northVibeDesignSeo);
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
            } finally {
                setLoading(false); // Set loading to false after completion (whether success or error)
            }
        };

        loadPage();
    }, [clientDomainName]);

    if (error) {
        return <ErrorPage message={error} />;
    }
    if (loading || sectionData.length === 0) {
        return <Loader />;
    }

    return (
        <>
            <HelmetManager title={seo.title ?? "Loonds"} description={seo.description ?? ""} keywords={seo.keywords ?? ""} tags={seo.tags ?? ""}></HelmetManager>
            {!loading && sectionData.length > 0 ? (
                <>
                    <ThemeProvider theme={"classic"}>
                        {sectionData.map((sectionData: Section) =>
                            Renderer.componentRenderV1(theme, sectionData)
                            )}
                    </ThemeProvider>
                </>
            ) : (
                <Loader />
            )}
        </>
    );
}
