import React, {useEffect, useState} from "react";
import {Section} from "../../modal/Section";
import {useParams} from "react-router-dom";
import {PageService} from "../../service/PageService";
import PageNotFound from "../../components/page-not-found/PageNotFound";
import {Renderer} from "../../components/Renderer";
import Echo from "../../components/Echo";

export default function Home() {
    const [sectionData, setSectionData] = useState<any>([]);
        const [loading, setLoading] = useState<boolean>(false);
    const params = useParams();

    useEffect(() => {
        loadPage();

    }, []);


    const loadPage = () => {
        setLoading(true);
        let { slug } = params;
        console.log("Website Name slug :"+ params.slug);

        PageService.getPage(params.slug ?? 'home').then((res) => {
            console.log("Website Section Data : " + res);
            setLoading(false)
            setSectionData(res.data.section);
            console.log('Pass Section Data to Child Component ', res.data.section);
        }).catch((reson) => {
            console.log("Error :" + reson)
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
            <Echo data={"kdk"}></Echo>
        </>
    )
}
