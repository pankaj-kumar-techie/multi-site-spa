import { useContext } from "react";
import { ThemeContext } from "../../themes/ThemeProvider";

export default function ServiceCard(props: { icon: any, iconAlt: any, title: any, body: any }) {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="w-full px-0 md:px-4 md:w-1/2 lg:w-1/3">
            <div className={`mb-8 hover:text-${theme.colors.secondary ?? "text-white"}  rounded-[20px] ease-in-out duration-500 bg-white p-10 shadow-md hover:bg-${theme.colors.primary} hover:shadow-lg md:px-7 xl:px-10`}>
                {props.icon && (
                    <div className="bg-white p-2 mb-0 md:mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                        <img src={props.icon} alt={props.iconAlt} />
                    </div>
                )}
                <h4 className="text-dark mb-3 text-xl font-semibold">{props.title}</h4>
                <p className="text-body-color h-[100px] overflow-hidden">{props.body}</p>
            </div>
        </div>
    )
}
