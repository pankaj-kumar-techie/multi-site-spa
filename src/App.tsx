import { useEffect, useState } from 'react';
import { archdy, archdyPlugin, archdySeo, archdyTheme } from './@local-db/archdy';
import { blogTheme, blogpahariyatri, blogpahariyatriseo } from './@local-db/blog';
import { drayWorldLogistic, drayWorldLogisticPlugin, drayWorldLogisticSeo, drayWorldLogisticTheme } from './@local-db/drayWorld';
import { gayatrilodge, gayatrilodgeGuestRegistration, gayatrilodgeSeo, gayatrilodgeTheme, gaytriLodgePlugin } from './@local-db/gayatrilodge';
import { loonds, loondsSeo, loondsTheme } from './@local-db/loonds';
import { northVibeDesign, northVibeDesignPlugin, northVibeDesignSeo, northVibeDesignTheme } from './@local-db/northVibeDesign';
import { pahariyatri, pahariyatriDynamicDetails, pahariyatriPlugin, pahariyatriSeo, pahariyatriTheme } from './@local-db/pahariyatri';
import { techie, techieTheme, techiepahariyatriseo } from './@local-db/techie';
import ErrorPage from "./components/common/error/ErrorPage";
import Loader from "./components/common/loader/Loader";
import { PluginConfig } from './modal/PluginConfig';
import { Section } from "./modal/Section";
import ThemeProvider from './themes/ThemeProvider';
import { HelmetManager } from "./utils/HelmetManager";
import { Renderer } from "./views/Renderer";
import { basic } from './@local-db/basic';
import { gifthampers, gifthampersTheme } from './@local-db/giftHampers';
import { foregrowsolutions, foregrowsolutionsSeo, foregrowsolutionsTheme } from './@local-db/foregrowsolutions';
// import { ClientService } from './service/ClientService';


//Todo : Pass dynamics data form Api response to renderer instead of @loacl_db/website
export default function App() {
    const [sectionData, setSectionData] = useState<Section[]>([]);

    const [seo, setSeo] = useState<any>();
    const [theme, setTheme] = useState<any>();
    const [plugins, setPlugins] = useState<any>();
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

            // Extract values from the URL
            const urlParts = path.split('/');
            const page = urlParts[0];
            const id = urlParts[1];
            console.log('Page is here : ', page);
            console.log('id is here : ', id);

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
                        setSeo(pahariyatriSeo);
                        setTheme(pahariyatriTheme);
                        if (page === 'packages') {
                            setSectionData(pahariyatriDynamicDetails)
                        } else if (page === 'blogs'){
                            setSectionData(pahariyatriDynamicDetails);
                        } else {
                            setSectionData(pahariyatri);
                        }
                        setPlugins(pahariyatriPlugin);
                        break;
                    case "techie.pahariyatri.com":
                        setSeo(techiepahariyatriseo);
                        setTheme(techieTheme);
                        setSectionData(techie);
                        break;
                    case "blog.pahariyatri.com":
                        setSeo(blogpahariyatriseo);
                        setTheme(blogTheme);
                        setSectionData(blogpahariyatri);
                        break;
                    case "northvibedesign.com":
                        setSeo(northVibeDesignSeo);
                        setTheme(northVibeDesignTheme);
                        setSectionData(northVibeDesign);
                        setPlugins(northVibeDesignPlugin)
                        break;
                    case "loonds.pahariyatri.com":
                        setSeo(loondsSeo);
                        setTheme(loondsTheme);
                        setSectionData(loonds);
                        break;
                    case "gayatrilodge.com":
                        setSeo(gayatrilodgeSeo);
                        setTheme(gayatrilodgeTheme);
                        if(page === "guest"){
                            setSectionData(gayatrilodgeGuestRegistration);
                        }else{
                            setSectionData(gayatrilodge);
                        }
                        setPlugins(gaytriLodgePlugin)
                        break;
                    case "archdy.com":
                        setSectionData(archdy);
                        setPlugins(archdyPlugin)
                        setTheme(archdyTheme);
                        setSeo(archdySeo);
                        break;
                    case "dray-world.com":
                        setSectionData(drayWorldLogistic);
                        setPlugins(drayWorldLogisticPlugin)
                        setTheme(drayWorldLogisticTheme);
                        setSeo(drayWorldLogisticSeo);
                        break;
                    case "foregrowsolutions.com":
                        setSectionData(foregrowsolutions);
                        // setPlugins(drayWorldLogisticPlugin)
                        setTheme(foregrowsolutionsTheme);
                        setSeo(foregrowsolutionsSeo);
                        break;
                    default:
                        setSeo(foregrowsolutionsSeo);
                        setTheme(foregrowsolutionsTheme);
                        if (page === 'packages') {
                            setSectionData(pahariyatriDynamicDetails)
                        } else if (page === 'blogs'){
                            setSectionData(pahariyatriDynamicDetails);
                        } else {
                            setSectionData(foregrowsolutions);
                        }
                        setPlugins(pahariyatriPlugin);
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
                setLoading(false);
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
                    <ThemeProvider theme={theme.name ?? "default"}>
                        {plugins && plugins.length > 0 &&
                            plugins.filter((plugin: PluginConfig) => plugin.isActive)
                                .map((plugin: PluginConfig) =>
                                    Renderer.renderPlugin(theme, plugin)
                                )}
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
