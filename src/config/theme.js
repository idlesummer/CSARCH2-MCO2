/*
  COLOR PALETTE DESCRIPTION

  PRIMARY COLORS
  primary-main:  For buttons, links, and active states. (Used in Post button)
  primary-dark:  For hover states, selected states, or focused elements. (Used in add/remove friend icon)
  primary-light: For backgrounds, hover-effects, or less prominent primary color. (Used in 'Sociopedia' logo)

  NEUTRAL COLORS
  neutral-dark:     For text in dark mode or headers. (Used in main widget headers)
  neutral-main:     For text, icons, or borders that are not primary focus. (Used for a inner-section widget TITLE)
  neutral-medium:   Same as before. (Used in inner-section widget TEXT/DESCRIPTION)
  neutral-med-main: For disabled states, secondary text, less prominent UI elements. (Used in widget action buttons)
  neutral-light:    For backgrounds to contrast with darker text/elements. (Used in search bar background)

  BACKGROUND COLORS
  background-default: Default background color. (Used in webpage background color)
  backgruond-alt:     Alternative background color, used for different UI sections to create contrast. (Used in widget background color)
*/

import { hexToRgb } from "@mui/material";

export const colorTokens = {
  grey: {           // DARK MODE            |  LIGHT MODE
    0: '#FFFFFF',   //                      |  bg-alt
    10: '#F6F6F6',  //                      |  bg-default
    50: '#F0F0F0',  //                      |  neutral-light
    100: '#E0E0E0', // neutral-dark         |  
    200: '#C2C2C2', // neutral-main         |  
    300: '#A3A3A3', // neutral-medium-main  |  neutral-medium 
    400: '#858585', // neutral-medium       |  neutral-medium-main
    500: '#666666', //                      |  neutral-main
    600: '#4D4D4D',
    700: '#333333', // neutral-light        |  neutral-dark
    800: '#1A1A1A', // bg-alt               |
    900: '#0A0A0A', // bg-default           |
    1000: '#000000',
  },
  primary: {
    50: '#E6FBFF',  //                      |  primary-light
    100: '#CCF7FE',
    200: '#99EEFD', // primary-dark         |  
    300: '#66E6FC', //                      |  primary-light (new)
    400: '#33DDFB',
    500: '#00D5FA', //                      |  primary-main
    600: '#00A0BC', // primary-main         |
    700: '#006B7D', //                      |  primary-dark
    800: '#00353F', // primary-light        |
    900: '#001519',
  },
};

export const themeConfig = {
  palette: {
    primary: {
      dark: colorTokens.primary[700],
      main: colorTokens.primary[500],
      light: colorTokens.primary[50],
    },
    neutral: {
      dark: colorTokens.grey[700],
      main: colorTokens.grey[500],
      mediumMain: colorTokens.grey[400],
      medium: colorTokens.grey[300],
      light: colorTokens.grey[50],
    },
    background: {
      default: colorTokens.grey[10],
      alt: colorTokens.grey[0],
    },
  },
  typography: {
    fontFamily: ['Rubik', 'sans-serif'].join(','),
    fontSize: 12,
    h1: {
      fontFamily: ['Rubik', 'sans-serif'].join(','),
      fontSize: 40,
    },
    h2: {
      fontFamily: ['Rubik', 'sans-serif'].join(','),
      fontSize: 32,
    },
    h3: {
      fontFamily: ['Rubik', 'sans-serif'].join(','),
      fontSize: 24,
    },
    h4: {
      fontFamily: ['Rubik', 'sans-serif'].join(','),
      fontSize: 20,
    },
    h5: {
      fontFamily: ['Rubik', 'sans-serif'].join(','),
      fontSize: 16,
    },
    h6: {
      fontFamily: ['Rubik', 'sans-serif'].join(','),
      fontSize: 14,
    },
    action: {
      selected: `rgba(${hexToRgb(colorTokens.primary[500])}, 0.5)`
    },
  },
};
