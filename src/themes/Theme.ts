export interface Theme {
    name: string;
    colors: {
      primary: string;
      secondary: string;
      // Add more color properties as needed
    };
    typography: {
      fontFamily: string;
      fontSize: string;
      // Add more typography properties as needed
    };
    section: {
      backgroundColor: string;
      // Add more section properties as needed
    };
  }
  
export const classicTheme: Theme = {
    name: 'Classic',
    colors: {
      primary: 'bg-white',
      secondary: 'text-black',
    },
    typography: {
      fontFamily: 'font-arial',
      fontSize: 'text-base',
    },
    section: {
      backgroundColor: 'bg-gray-900',
    },
  };
  
  export const modernTheme: Theme = {
    name: 'Modern',
    colors: {
      primary: 'bg-black',
      secondary: 'text-white',
    },
    typography: {
      fontFamily: 'font-roboto',
      fontSize: 'text-sm',
    },
    section: {
      backgroundColor: 'bg-gray-200',
    },
  };
  // Add more theme definitions as needed
  