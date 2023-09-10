import React, { useContext } from "react";
import { useDynamicTextColor } from "../themes/DynamicTextColor";
import { ThemeContext } from "../themes/ThemeProvider";

interface ContainerProps {
    children: (textColor: string) => React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
    const { theme } = useContext(ThemeContext);
    const textColor = useDynamicTextColor(theme.colors.primary || "");

    return (
        <section className={`bg-${theme.colors.primary} font-bold text-${textColor}`}>
            {children(textColor)}
        </section>
    );
}
