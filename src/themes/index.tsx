import { extendTheme } from '@chakra-ui/react';

const fonts = {
  mono: `'Menlo', monospace`,
  heading: `'Montserrat', sans-serif`,
  body: `'Inter', sans-serif`,
};

const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  '2xl': '1400px',
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
    black: '#334155',
    bg: {
      primary: '#f8fafc',
      secondary: '#f1f5f9',
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
    Heading: {
      baseStyle: {
        textAlign: 'center',
      },
      defaultProps: {
        size: 'lg',
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
  styles: {
    global: (props) => ({
      body: {
        bg: '#f8fafc',
        color: '#334155',
      },
    }),
  },
});

export default theme;
