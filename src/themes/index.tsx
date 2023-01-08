import { extendTheme } from '@chakra-ui/react';

const fonts = {
  mono: `'Menlo', monospace`,
  heading: `'Montserrat', sans-serif`,
  body: `'Inter', sans-serif`,
};

const breakpoints = {
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
};

const theme = extendTheme({
  semanticTokens: {
    colors: {
      text: {
        default: '#16161D',
        _dark: '#ade3b8',
      },
      heroGradientStart: {
        default: '#7928CA',
        _dark: '#e3a7f9',
      },
      heroGradientEnd: {
        default: '#FF0080',
        _dark: '#fbec8f',
      },
    },
    radii: {
      button: '12px',
    },
  },
  colors: {
    black: '#16161D',
    bg: {
      primary: 'lightpink',
      secondary: '#EDF2F7',
    },
    brand: {
      100: '#e0e7ff',
      200: '#c7d2fe',
      300: '#a5b4fc',
      400: '#818cf8',
      500: '#6366f1',
      600: '#4f46e5',
      700: '#4338ca',
      800: '#3730a3',
      900: '#312e81',
    },
  },
  fonts,
  breakpoints,
  components: {
    Link: {
      variants: {
        linkPrimary: { color: '#2200ff' },
      },
      defaultProps: {
        variant: 'linkPrimary',
      },
    },
    Button: {
      variants: {
        primary: {
          color: 'white',
          bg: '#4f46e5',
          _hover: { bg: '#3730a3' },
        },
        secondary: {
          color: '#4338ca',
          border: '2px solid #4f46e5',
          _hover: { bg: '#e0e7ff' },
        },
        secondaryBlack: {
          color: '#16161D',
          border: '2px solid #16161D',
          _hover: { bg: '#EDF2F7' },
        },
      },
      defaultProps: {
        variant: 'outline',
      },
    },
  },
});

export default theme;
