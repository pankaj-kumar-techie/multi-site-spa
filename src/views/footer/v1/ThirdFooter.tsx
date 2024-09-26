import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../themes/ThemeProvider";

export default function ThirdFooter(props: { data: any }) {
    const { theme } = useContext(ThemeContext);
    const [footerData, setFooterData] = useState<any>({
        title: "",
        description: "",
        socialLink: [],
    });

    useEffect(() => {
        setFooterData(props.data.footer);
    }, [props.data]);

    return (
        <section className={`bg-${theme.colors.primary}`}>
            <div className="w-full text-gray-300 py-2 px-2">
                <div className="flex flex-col items-center justify-center w-full py-4 text-center text-gray-500">
                    <p className={`text-${theme.colors.secondary} py-4 font-medium hover:${theme.colors.secondary} hover:ease-in-out font-jakarta duration-200 cursor-pointer`}>
                        Made With ❤️ by {footerData.copyright || "Loonds"}
                    </p>
                </div>
            </div>
        </section>

    );
}
