export interface Theme {
    name: string;
    colors: {
        primary?: string;
        secondary?: string;
        tertiary?: string;
        accent?: string;
    };
    typography: {
        fontFamily?: string;
        fontSize?: string;
    };
    buttons: {
        primary?: string;
        secondary?: string;
    }
}