import React, { useEffect, useState } from "react";
import { Section } from "../../modal/Section";
import { useParams } from "react-router-dom";
import { PageService } from "../../service/PageService";
import PageNotFound from "../../components/page-not-found/PageNotFound";
import { Renderer } from "../../components/Renderer";

export default function Home() {
    const [sectionData, setSectionData] = useState<Section[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const params = useParams<{ slug?: string }>();

    useEffect(() => {
        const loadPage = () => {
            setLoading(true);
            const slug = params.slug ?? "home";
            console.log("Website Name slug :", slug);

            PageService.getPage(slug)
                .then((res) => {
                    setLoading(false);
                    setSectionData(res.data.section);
                    console.log("Pass Section Data to Child Component ", res.data.section);
                })
                .catch((error) => {
                    console.log("Error:", error);
                    // TODO: Provide feedback to the client and retry the API call
                });
        };

        loadPage();
    }, [params.slug]);

    return (
        <>
            {!loading && sectionData.length > 0 ? (
                <>
                    {sectionData.map((sectionData: Section) =>
                        Renderer.componentRenderV1("Home", sectionData)
                    )}
                </>
            ) : (
                <PageNotFound />
            )}
        </>
    );
}
