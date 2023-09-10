import { useContext } from "react";
import { useDynamicTextColor } from "../themes/DynamicTextColor";
import { ThemeContext } from "../themes/ThemeProvider";

export default function Container(){
    const { theme } = useContext(ThemeContext);
    const textColor = useDynamicTextColor(theme.colors.primary || "");
    return(
        <section className={`bg-${theme.colors.primary} font-bold`}>

        </section>
    )
}