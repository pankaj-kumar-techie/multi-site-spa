import React, {useEffect, useState} from "react";
import {Section} from "../../modal/Section";
import {useParams} from "react-router-dom";
import {PageService} from "../../service/PageService";
import PageNotFound from "../../components/page-not-found/PageNotFound";
import {Renderer} from "../../components/Renderer";
import Echo from "../../components/Echo";

export default function Home() {
 const pahariyatri = {
                               "id": "426c3a01-de60-46fd-b95b-b1b8625ecbda",
                               "name": "pahariyatri",
                               "path": "pahariyatri",
                               "htmlId": "homeId",
                               "section": [
                                   {
                                       "id": "3215caef-6010-42ec-ba23-4553004b75f9",
                                       "name": null,
                                       "htmlClass": null,
                                       "version": null,
                                       "data": {
                                           "type": "AboutUs",
                                           "image": {
                                               "cid": "string",
                                               "url": "string"
                                           },
                                           "title": "Hero Banner",
                                           "subTitle": "About Pahari Yatri",
                                           "description": "Hero Banner description"
                                       }
                                   },
                                   {
                                       "id": "3a417356-df76-4c80-a587-351ec48d1112",
                                       "name": null,
                                       "htmlClass": null,
                                       "version": null,
                                       "data": {
                                           "type": "ContactUs",
                                           "image": {
                                               "cid": "string",
                                               "url": "string"
                                           },
                                           "title": "Hero Banner",
                                           "subTitle": "About Pahari Yatri",
                                           "description": "Hero Banner description"
                                       }
                                   },
                                   {
                                       "id": "52de1ad9-55ac-4d9d-ae9f-9766fd341ae4",
                                       "name": null,
                                       "htmlClass": null,
                                       "version": null,
                                       "data": {
                                           "type": "Portfolio",
                                           "title": "Hero Banner",
                                           "subTitle": "About Pahari Yatri"
                                       }
                                   },
                                   {
                                       "id": "915679e0-130b-4dab-8e1f-b734ce034430",
                                       "name": null,
                                       "htmlClass": null,
                                       "version": null,
                                       "data": {
                                           "type": "Product",
                                           "image": {
                                               "cid": "string",
                                               "url": "string"
                                           },
                                           "title": "Hero Banner",
                                           "subTitle": "About Pahari Yatri",
                                           "description": "Hero Banner description"
                                       }
                                   },
                                   {
                                       "id": "915679e0-130b-4dab-8e1f-b734ce034430",
                                       "name": null,
                                       "htmlClass": null,
                                       "version": null,
                                       "data": {
                                           "type": "Timeline",
                                           "image": {
                                               "cid": "string",
                                               "url": "string"
                                           },
                                           "title": "Hero Banner",
                                           "subTitle": "About Pahari Yatri",
                                           "description": "Hero Banner description"
                                       }
                                   },{
                                       "id": "915679e0-130b-4dab-8e1f-b734ce034430",
                                       "name": null,
                                       "htmlClass": null,
                                       "version": null,
                                       "data": {
                                           "type": "CommingSoon",
                                           "image": {
                                               "cid": "string",
                                               "url": "string"
                                           },
                                           "title": "Hero Banner",
                                           "subTitle": "About Pahari Yatri",
                                           "description": "Hero Banner description"
                                       }
                                   },{
                                       "id": "915679e0-130b-4dab-8e1f-b734ce034430",
                                       "name": null,
                                       "htmlClass": null,
                                       "version": null,
                                       "data": {
                                           "type": "HeroBanner",
                                           "image": {
                                               "cid": "string",
                                               "url": "string"
                                           },
                                           "title": "Hero Banner",
                                           "subTitle": "About Pahari Yatri",
                                           "description": "Hero Banner description"
                                       }
                                   },
                                   {
                                       "id": "915679e0-130b-4dab-8e1f-b734ce034430",
                                       "name": null,
                                       "htmlClass": null,
                                       "version": null,
                                       "data": {
                                           "type": "Service",
                                           "image": {
                                               "cid": "string",
                                               "url": "string"
                                           },
                                           "title": "Hero Banner",
                                           "subTitle": "About Pahari Yatri",
                                           "description": "Hero Banner description"
                                       }
                                   }
                               ],
                               "theme": []
                           }
    const [sectionData, setSectionData] = useState<any>([]);
        const [loading, setLoading] = useState<boolean>(false);
    const params = useParams();

    useEffect(() => {
            setSectionData(pahariyatri.section);
//         loadPage();
    }, []);


    const loadPage = () => {
        setLoading(true);
        let { slug } = params;
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
