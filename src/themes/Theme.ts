export interface Theme {
    name: string;
    colors: {
        primary: string;
        secondary: string;
    };
    typography: {
        fontFamily: string;
        fontSize: string;
    };
    background: {
        backgroundColor?: string;
        backgroundImage?: string;
        backgroundAttachment?: string;
        backgroundPosition?: string;
        backgroundRepeat?: string;
        backgroundClip?: string;
        backgroundSize?: string;
    };
}

export const themes: { [key: string]: Theme } = {
    default: {
        name: 'Default',
        colors: {
            primary: 'bg-gray-200',
            secondary: 'text-black',
        },
        typography: {
            fontFamily: 'font-arial',
            fontSize: 'text-base',
        },
        background: {},
    },
    classic: {
        name: 'Classic',
        colors: {
            primary: 'bg-purssian-blue',
            secondary: 'text-white',
        },
        typography: {
            fontFamily: 'font-arial',
            fontSize: 'text-base',
        },
        background: {
            backgroundColor: 'bg-gray-200',
        },
    },
    modern: {
        name: 'Modern',
        colors: {
            primary: 'bg-custom-brown',
            secondary: 'text-black',
        },
        typography: {
            fontFamily: 'font-arial',
            fontSize: 'text-base',
        },
        background: {
            backgroundImage: 'url("your-image-url")',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        },
    },
    transparent: {
        name: 'Transparent',
        colors: {
            primary: 'bg-',
            secondary: 'text-black',
        },
        typography: {
            fontFamily: 'font-arial',
            fontSize: 'text-base',
        },
        background: {
            backgroundImage: 'url("your-image-url")',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        },
    },
    vibrant: {
        name: 'Vibrant',
        colors: {
            primary: 'bg-red-500',
            secondary: 'text-white',
        },
        typography: {
            fontFamily: 'font-arial',
            fontSize: 'text-base',
        },
        background: {
            backgroundColor: 'bg-yellow-200',
        },
    },
    minimalist: {
        name: 'Minimalist',
        colors: {
            primary: 'bg-white',
            secondary: 'text-black',
        },
        typography: {
            fontFamily: 'font-arial',
            fontSize: 'text-base',
        },
        background: {
            backgroundColor: 'bg-gray-50',
        },
    },
};

