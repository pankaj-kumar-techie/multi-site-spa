import { useEffect, useState } from 'react';
import { PluginConfig } from '../modal/PluginConfig';
import { Section } from "../modal/Section";
import { defaultSeo } from '../utils/defaultSeo';

interface WebsiteData {
    seo: any;
    theme: any;
    sections: Section[];
    plugins: PluginConfig[];
    dynamicDetails?: any;
}

const domainMap: { [key: string]: string } = {
    "pahariyatri.com": "pahariyatri",
    "gayatrilodge.com": "gayatrilodge",
    "www.kalabyhimani.com": "kalabyhimani",
    "techie.pahariyatri.com": "techie",
    "foregrowsolutions.com": "foregrowsolutions",
    "websitebuilder.com": "websitebuilder",
    "dray-world.com": "drayworld",
    "spirework.in": "spirework",
    "www.spirework.in": "spirework",
    "localhost": "websitebuilder",
};

// @ts-ignore
const jsonConfigs = import.meta.glob('../@local-db/*.json');

const loadWebsiteData = async (domain: string): Promise<WebsiteData> => {
    const fileName = domainMap[domain];
    if (!fileName) throw new Error(`No config mapping for domain: ${domain}`);

    const path = `../@local-db/${fileName}.json`;
    const loader = jsonConfigs[path];

    if (!loader) throw new Error(`JSON config not found at: ${path}`);

    const data: any = await loader();
    // In Vite, imported modules usually have their properties on the module object
    // JSON modules might be slightly different depending on Vite version
    return data.default || data as WebsiteData;
};

export const useWebsiteData = () => {
    const [sectionData, setSectionData] = useState<Section[]>([]);
    const [seo, setSeo] = useState<any>();
    const [theme, setTheme] = useState<any>();
    const [plugins, setPlugins] = useState<PluginConfig[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const loadPage = async () => {
            setLoading(true);
            setError('');

            const clientDomainName = window.location.hostname;
            const urlParams = new URLSearchParams(window.location.search);
            let previewSite = urlParams.get('preview');
            
            if (previewSite) {
                localStorage.setItem('preview_site', previewSite);
            } else {
                previewSite = localStorage.getItem('preview_site');
            }
            
            const effectiveDomain = previewSite || clientDomainName;

            const path = window.location.pathname.substring(1) || 'index';
            const urlParts = path.split('/');
            const page = urlParts[0];

            try {
                const data = await loadWebsiteData(effectiveDomain);
                setSeo({ ...defaultSeo, ...data.seo });
                setTheme(data.theme);
                setPlugins(data.plugins || []);

                const pathSegment = window.location.pathname.substring(1) || 'index';
                const page = pathSegment.split('/')[0];

                // Filter sections based on path
                // Sections with path 'all' appear everywhere (Header/Footer)
                const allSections = data.sections || [];
                const filteredSections = allSections.filter((section: Section) =>
                    section.path === page || section.path === 'all' || (page === 'index' && !section.path)
                );

                // Fallback for legacy dynamicDetails if no sections match and it's a known dynamic route
                const finalSections = (filteredSections.length === 0 && (page === 'packages' || page === 'blogs'))
                    ? (data.dynamicDetails || [])
                    : filteredSections;

                setSectionData(finalSections);
            } catch (err) {
                console.error('Error loading website data:', err);
                setError(`Website not found or failed to load for domain: ${effectiveDomain}`);
            } finally {
                setLoading(false);
            }
        };

        loadPage();
    }, []);

    return { sectionData, seo, theme, plugins, loading, error };
};