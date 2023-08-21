export interface Theme {
    name: string;
    colors: {
        primary?: string;
        secondary?: string;
    };
    typography: {
        fontFamily?: string;
        fontSize?: string;
        firstFontColor?: string;
        secondFontColor?: string;
    };
    background: {
        backgroundColorPrimary?: string;
        backgroundColorSecondary?: string;
        backgroundColorDark?: string;
        backgroundImage?: string;
        backgroundAttachment?: string;
        backgroundPosition?: string;
        backgroundRepeat?: string;
        backgroundClip?: string;
        backgroundSize?: string;
    };
    buttons : {
        primary?: string;
        secondary?: string;
    }
}