import '../styles/globals.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@fontsource/syne/700.css';
import '@fontsource/syne/800.css';
import '@fontsource/syne/variable.css';

// Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: 'blue',
    800: 'green',
    700: 'red',
  },
  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#FAE9D1',
    gray: {
      50: 'yellow',
      900: 'orange',
    },
  },
  fonts: {
    heading: 'Syne',
    body: 'Syne',
  },
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  fonts: {
    heading: 'Syne',
    body: 'Syne',
  },
  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#FAE9D1',
    whiteAlpha: {
      900: '#FAE9D1',
    },
    gray: {
      50: 'green',
      700: 'purple',
      800: '#151515',
      900: 'orange',
    },
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

// const theme = extendTheme({ colors, config })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
