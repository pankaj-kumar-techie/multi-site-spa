import { Theme } from "../modal/Theme";

export const themes: { [key: string]: Theme } = {
    default: {
        name: 'Default Theme',
        colors: {
            primary: 'black',
            secondary: 'slate',
        },
        typography: {
            fontFamily: 'font-arial',
            fontSize: 'text-base',
        },
        buttons: {
            primary: 'bg-primary text-white hover:bg-primary-dark',
            secondary: 'bg-secondary text-white hover:bg-secondary-dark',
        },
    },
    classic: {
        name: 'Classic Theme',
        colors: {
            primary: 'custom-blue',
            secondary: 'custom-beige',
        },
        typography: {
            fontFamily: 'font-arial',
            fontSize: 'text-base',
        },
        buttons: {
            primary: 'bg-red-500 text-white hover:bg-red-600',
            secondary: 'bg-gray-400 text-black hover:bg-gray-500',
        },
    },
    modern: {
        name: 'Modern Theme',
        colors: {
            primary: 'custom-brown',
            secondary: 'black',
        },
        typography: {
            fontFamily: 'font-arial',
            fontSize: 'text-base',
        },
        buttons: {
            primary: 'bg-purple-600 text-white hover:bg-purple-700',
            secondary: 'bg-amber-500 text-white hover:bg-amber-600',
        },
    },
    transparent: {
        name: 'Transparent Theme',
        colors: {
            primary: 'slate-500',
            secondary: 'black',
        },
        typography: {
            fontFamily: 'font-arial',
            fontSize: 'text-base',
        },
        buttons: {
            primary: 'bg-teal-400 text-white hover:bg-teal-500',
            secondary: 'bg-transparent text-black hover:bg-gray-100',
        },
    },
    vibrant: {
        name: 'Vibrant Theme',
        colors: {
            primary: 'red-500',
            secondary: 'white',
        },
        typography: {
            fontFamily: 'font-arial',
            fontSize: 'text-base',
        },
        buttons: {
            primary: 'bg-indigo-700 text-white hover:bg-indigo-800',
            secondary: 'bg-orange-500 text-white hover:bg-orange-600',
        },
    },
    minimalist: {
        name: 'Minimalist Theme',
        colors: {
            primary: 'white',
            secondary: 'slate-500',
        },
        typography: {
            fontFamily: 'font-arial',
            fontSize: 'text-base',
        },
        buttons: {
            primary: 'bg-gray-400 text-black hover:bg-gray-500',
            secondary: 'bg-custom-orange text-gray-500 hover:text-black hover:bg-gray-100',
        },
    },
    ocean: {
        name: 'Ocean Theme',
        colors: {
            primary: 'blue-500',
            secondary: 'teal-500',
        },
        typography: {
            fontFamily: 'font-arial',
            fontSize: 'text-base',
        },
        buttons: {
            primary: 'bg-blue-600 text-white hover:bg-blue-700',
            secondary: 'bg-teal-400 text-white hover:bg-teal-500',
        },
    },
    sunset: {
        name: 'Sunset Theme',
        colors: {
            primary: 'orange-500',
            secondary: 'red-500',
        },
        typography: {
            fontFamily: 'font-arial',
            fontSize: 'text-base',
        },
        buttons: {
            primary: 'bg-orange-600 text-white hover:bg-orange-700',
            secondary: 'bg-red-400 text-white hover:bg-red-500',
        },
    },
};
