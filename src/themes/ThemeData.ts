import { Theme } from "../modal/Theme";


export const themes: { [key: string]: Theme } = {
    default: {
        name: 'Default',
        colors: {
            primary: 'text-black-200',
            secondary: 'text-black',
        },
        typography: {
            firstFontColor: 'text-white',
            fontFamily: 'font-arial',
            fontSize: 'text-base',
        },
        background: {
            backgroundColor: 'bg-slate-800'
        },
        buttons: {
            primary: 'bg-primary text-white hover:bg-primary-dark',
            secondary: 'bg-secondary text-white hover:bg-secondary-dark',
        },
    },
    classic: {
        name: 'Classic',
        colors: {
            primary: 'bg-custom-blue',
            secondary: 'bg-indigo-700',
        },
        typography: {
            fontFamily: 'font-arial',
            fontSize: 'text-base',
            // hoverColor: 'text-white',
            firstFontColor: 'text-black-200',
            secondFontColor: 'text-white',
        },
        background: {
            backgroundColor: 'bg-gray-200',
        },
        buttons: {
            primary: 'bg-red-500 text-white hover:bg-red-600',
            secondary: 'bg-gray-400 text-black hover:bg-gray-500',
        },
    },
    modern: {
        name: 'Modern',
        colors: {
            primary: 'bg-custom-brown',
            secondary: 'text-black',
        },
        typography: {
            firstFontColor: 'text-black-200',
            fontFamily: 'font-arial',
            fontSize: 'text-base',
        },
        background: {
            backgroundColor: 'bg-amber-300',
            backgroundImage: 'url("your-image-url")',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        },
        buttons: {
            primary: 'bg-purple-600 text-white hover:bg-purple-700',
            secondary: 'bg-amber-500 text-white hover:bg-amber-600',
        },
    },
    transparent: {
        name: 'Transparent',
        colors: {
            primary: 'bg-',
            secondary: 'text-black',
        },
        typography: {
            firstFontColor: 'text-black-200',
            fontFamily: 'font-arial',
            fontSize: 'text-base',
        },
        background: {
            backgroundColor: 'bg-teal-200',
            backgroundImage: 'url("your-image-url")',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        },
        buttons: {
            primary: 'bg-teal-400 text-white hover:bg-teal-500',
            secondary: 'bg-transparent text-black hover:bg-gray-100',
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
            backgroundColor: 'bg-black-300',
        },
        buttons: {
            primary: 'bg-indigo-700 text-white hover:bg-indigo-800',
            secondary: 'bg-orange-500 text-white hover:bg-orange-600',
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
            backgroundColor: 'bg-stone-200',
        },
        buttons: {
            primary: 'bg-gray-400 text-black hover:bg-gray-500',
            secondary: 'bg-white text-gray-500 hover:text-black hover:bg-gray-100',
        },
    },
};

