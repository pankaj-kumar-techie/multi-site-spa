import React, {useEffect, useState} from "react";
import {Section} from "../../modal/Section";
import {useParams} from "react-router-dom";
import {PageService} from "../../service/PageService";
import PageNotFound from "../../components/page-not-found/PageNotFound";
import {Renderer} from "../../components/Renderer";

export default function Home() {
    const [sectionData, setSectionData] = useState<any>([]);
        const [loading, setLoading] = useState<boolean>(false);
    const params = useParams();

    useEffect(() => {
            // setSectionData(pahariyatri.section);
        loadPage();
    });


    const loadPage = () => {
        setLoading(true);
        console.log("Website Name slug :"+ params.slug);

        PageService.getPage(params.slug ?? 'home').then((res) => {
            setLoading(false)
            setSectionData(res.data.section);
            console.log('Pass Section Data to Child Component ', res.data.section);
        }).catch((error) => {
            console.log("Error :" + error)
        });
    }
    return (
        <>
            {!loading ? <>
                {sectionData.map((sectionData: Section) =>
                    // Renderer.componentRender("a", sectionData),
                    Renderer.componentRenderV1("pahariyatri", sectionData)
                )}
            </> : <PageNotFound></PageNotFound>}
{/*             <Echo data={"kdk"}></Echo> */}
        </>
    )
}
