export interface Theme {
    name: string;
    colors: {
        primary?: string;
        secondary?: string;
        tertiary?:string;
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