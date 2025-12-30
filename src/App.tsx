import { Helmet } from 'react-helmet-async';
import ErrorPage from "./components/common/error/ErrorPage";
import Loader from "./components/common/loader/Loader";
import { PluginConfig } from './modal/PluginConfig';
import { Section } from "./modal/Section";
import ThemeProvider from './themes/ThemeProvider';
import { HelmetManager } from "./utils/HelmetManager";
import { Renderer } from "./views/Renderer";
import { useWebsiteData } from './hooks/useWebsiteData';


//Todo : Pass dynamics data form Api response to renderer instead of @loacl_db/website
export default function App() {
    const { sectionData, seo, theme, plugins, loading, error } = useWebsiteData();

    if (error) {
        return <ErrorPage message={error} />;
    }

    if (loading || sectionData.length === 0) {
        return <Loader />;
    }

    return (
        <>
            <HelmetManager
                title={seo.title ?? ""}
                description={seo.description ?? ""}
                keywords={seo.keywords ?? ""}
                tags={seo.tags ?? ""}
                author={seo.author}
                faviconUrl={seo.faviconUrl}
                twitterCard={seo.twitterCard ?? "summary_large_image"}
                twitterTitle={seo.twitterTitle ?? seo.title}
                twitterDescription={seo.twitterDescription ?? seo.description}
                twitterImage={seo.twitterImage ?? seo.imageUrl}
                ogTitle={seo.ogTitle ?? seo.title}
                ogDescription={seo.ogDescription ?? seo.description}
                ogImage={seo.ogImage ?? seo.imageUrl}
            />
            <ThemeProvider theme={theme.name ?? "default"}>
                {plugins && plugins.length > 0 &&
                    plugins.filter((plugin: PluginConfig) => plugin.isActive)
                        .map((plugin: PluginConfig) =>
                            Renderer.renderPlugin(theme, plugin)
                        )}
                {sectionData.map((section: Section) =>
                    <div key={section.id}>
                        {Renderer.componentRenderV1(theme, section)}
                    </div>
                )}
            </ThemeProvider>
        </>
    );
}
