import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../themes/ThemeProvider";
import Icon from "../../../utils/IconUtils";
import { SocialLink } from "../../../modal/Section";

export default function SecondFooter(props: { data: any }) {
    const { theme } = useContext(ThemeContext);
    const [footerData, setFooterData] = useState<any>({
        title: "",
        description: "",
        socialLink: [],
    })
    useEffect(() => {
        setFooterData(props.data.footer);
    }, [props.data])
    return (
        <section className={`bg-${theme.colors.primary}`}>
            <div className="w-full text-gray-300 py-2 px-2">
                <div
                    className="flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500 ">
                    <p className={`${theme.colors.secondary} py-4 font-medium  hover:${theme.colors.secondary} hover:ease-in-out font-jakarta duration-200 cursor-pointer`}>
                        Made With ❤️ by {footerData.copyright || " Loonds"}</p>
                    <div className="flex  justify-between sm:w-[300px] pt-4 text-2xl">


                        {footerData.socialLink.map((socialIcon: SocialLink) => (
                            <Icon
                                key={socialIcon.id}
                                id={socialIcon.id}
                                name={socialIcon.name}
                                size={30}
                                className="cursor-pointer hover:text-white hover:ease-in-out duration-300"
                                link={socialIcon.link}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>

    )
}