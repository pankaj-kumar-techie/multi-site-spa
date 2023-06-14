import React, {useEffect, useState} from "react";
import TitleCover from "../../../components/comman/title-cover/TitleCover";

export default function FirstComingSoon(props: { data: any }) {
    // const [contactUsTheme, setComingSoonTheme] = useState<string>("")
    const [comingSoonUsData, setComingSoonData] = useState<any>([])


    // const styles = {
    //     CLASSIC: styles1,
    //     MODERN: styles2,
    // }[contactUsTheme] || styles1;

    useEffect(() => {
        setComingSoonData(props.data);
        // setContactUsTheme(props.data.theme || "CLASSIC")
    }, [props.data])

    return (
        <section className="h-screen bg-cover"
                 style={{backgroundImage: "url('https://images.unsplash.com/photo-1619364726002-dfd4fdaee5f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')"}}>
            <div className="flex h-full w-full items-center justify-center container mx-auto px-8">
                <div className="max-w-2xl text-center">
                    <TitleCover title={comingSoonUsData.title}
                                paragraph={comingSoonUsData.description} titleSize={"sm:text-5xl"}
                                titleColor={"text-white"} paragraphColor={"text-white"}></TitleCover>

                    <div
                        className="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
                        <input id="email" type="text"
                               className="rounded-md border border-transparent bg-white/20 px-4 py-2 text-white placeholder-white backdrop-blur-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 sm:mx-2"
                               placeholder="Email Address"/>

                        <button
                            className="transform rounded-md bg-blue-700 px-8 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">Notify
                            Me
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}