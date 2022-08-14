import React, {useEffect, useState} from "react";
import {Section} from "../../modal/Section";
import {useParams} from "react-router-dom";
import {PageService} from "../../service/PageService";
import PageNotFound from "../../components/page-not-found/PageNotFound";
import {ComponentRenderer} from "../../components/ComponentRenderer";

export default function Home() {
    const [landingPageData, setLandingPageData] = useState<any>([]);
    const [sectionData, setSectionData] = useState<any>([]);
        const [loading, setLoading] = useState<boolean>(false);
    const params = useParams();

    useEffect(() => {
        loadPage();

    }, []);


    const loadPage = () => {
        setLoading(true);
        let { slug } = params;
        console.log("parms slug :"+ params.slug);

        PageService.getPage(params.slug ?? 'home').then((res) => {
            console.log(res);
            setLoading(false)
            setLandingPageData(res.data);
            setSectionData(res.data.section);
            console.log('Section Data ', res.data.section);
        }).catch((reson) => {
            console.log("Error :" + reson)
        });
    }
    return (
        <>
            {!loading ? <div>
                {sectionData.map((sectionData: Section) =>
                    ComponentRenderer.render("a", sectionData)
                )}
            </div> : <PageNotFound></PageNotFound>}
        </>
    )
}
