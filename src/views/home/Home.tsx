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
        loadPage();

    }, []);


    const loadPage = () => {
        setLoading(true);
        let { slug } = params;
        console.log("Website Name slug :"+ params.slug);

        PageService.getPage(params.slug ?? 'home').then((res) => {
            console.log(res);
            setLoading(false)
            setSectionData(res.data.section);
            console.log('Section Data ', res.data.section);
        }).catch((reson) => {
            console.log("Error :" + reson)
        });
    }
    return (
        <>
            {!loading ? <div style={{backgroundImage: `url(http://localhost:8090/files/avatar.png})`}}>
                {sectionData.map((sectionData: Section) =>
                    Renderer.componentRender("a", sectionData)
                )}
            </div> : <PageNotFound></PageNotFound>}
        </>
    )
}
