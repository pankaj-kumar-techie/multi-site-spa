import React, { useContext, useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, } from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti"
import { ThemeContext } from "../../../../themes/ThemeProvider";

export default function SecondFooter(props: { data: any }) {
    const { theme } = useContext(ThemeContext);
    const [footerData, setFooterData] = useState<any>([])


    const [footerTheme, setFooterTheme] = useState<string>("")


    useEffect(() => {
        setFooterData(props.data);
    }, [props.data])

    return (
        <section className={theme.background.backgroundColor}>
            <div className="w-full text-gray-300 py-2 px-2">
                <div
                    className="flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500 ">
                    <p className="py-4 font-medium text-gray-300 hover:text-white hover:ease-in-out font-jakarta duration-200 cursor-pointer ">Made
                        With ❤️ by Loonds</p>
                    <div className="flex  justify-between sm:w-[300px] pt-4 text-2xl">
                        <FaFacebook className="cursor-pointer hover:text-white hover:ease-in-out duration-300" />
                        <FaInstagram className="cursor-pointer hover:text-white hover:ease-in-out duration-300" />
                        <FaLinkedin className="cursor-pointer hover:text-white hover:ease-in-out duration-300" />
                        <TiSocialPinterest className="cursor-pointer  hover:text-white hover:ease-in-out duration-300"
                            size={30} />
                    </div>
                </div>
            </div>
        </section>


    )
}