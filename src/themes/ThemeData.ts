import { Theme } from "../modal/Theme";

export const themes: { [key: string]: Theme } = {
    default: {
        name: 'Default Theme',
        colors: {
            primary: 'black',
            secondary: 'white',
        },
        typography: {
            fontFamily: 'font-arial',
            fontSize: 'text-base',
        },
        buttons: {
            primary: 'bg-black hover:bg-slate-800',
            secondary: 'bg-[#008080] hover:bg-[#009999]',
        },
    },
    trek: {
        name: 'Trek Theme',
        colors: {
            primary: 'gray-100',
            secondary: 'black',
        },
        typography: {
            fontFamily: 'font-arial',
            fontSize: 'text-base',
        },
        buttons: {
            primary: 'bg-black hover:bg-slate-800',
            secondary: 'bg-[#008080] hover:bg-[#009999]',
        },
    },
    classic: {
        name: 'Classic Theme',
        colors: {
            primary: 'orange-500',
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
            primary: 'blue-500',
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
    hospitality: {
        name: 'Hospitality Theme',
        colors: {
            primary: '#2D3436', // Dark Charcoal
            secondary: '#F1F2F6', // Off White
            accent: '#D4A373', // Earthy Gold
        },
        typography: {
            fontFamily: 'font-serif',
            fontSize: 'text-base',
        },
        buttons: {
            primary: 'bg-[#D4A373] text-white hover:bg-[#A98467]',
            secondary: 'bg-white text-[#2D3436] border border-[#2D3436]',
        },
    },
    artisan: {
        name: 'Artisan Theme',
        colors: {
            primary: '#6D214F', // Magenta Purple
            secondary: '#F8EFBA', // Light Pastel Yellow
            accent: '#BDC581', // Sage Green
        },
        typography: {
            fontFamily: 'font-display',
            fontSize: 'text-base',
        },
        buttons: {
            primary: 'bg-[#6D214F] text-white hover:bg-[#833471]',
            secondary: 'bg-white text-[#6D214F] border border-[#6D214F]',
        },
    },
    startup: {
        name: 'Startup Theme',
        colors: {
            primary: '#0984E3', // Bright Blue
            secondary: '#FBFBFB', // Near White
            accent: '#D63031', // Tech Red
        },
        typography: {
            fontFamily: 'font-sans',
            fontSize: 'text-base',
        },
        buttons: {
            primary: 'bg-[#0984E3] text-white hover:bg-[#74B9FF]',
            secondary: 'bg-transparent text-[#0984E3] border-2 border-[#0984E3]',
        },
    },
};
