import '../styles/globals.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@fontsource/syne/700.css';
import '@fontsource/syne/800.css';
import '@fontsource/syne/variable.css';

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
      800: '#151515',
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
