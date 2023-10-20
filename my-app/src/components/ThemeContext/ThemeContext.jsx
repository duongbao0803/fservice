import React from "react";

// Your theme definition
const customTheme = {
    palette: {
        primary: {
            main: '#ff8228'
        },
        secondary: {
            main: '#9CA3AF'
        },
        background: {
            default: '#ff8228'
        }
    }
};


// Create a context for the theme
const ThemeContext = React.createContext(customTheme);

export { ThemeContext, customTheme };
