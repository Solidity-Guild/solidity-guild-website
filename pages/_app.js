import '../styles/globals.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@fontsource/syne/700.css';
import '@fontsource/syne/800.css';
import '@fontsource/syne/variable.css';

const theme = extendTheme({
  components: {
    // Button: {
    //   variants: {
    //     'with-shadow': {
    //       bg: 'red.400',
    //       boxShadow: '0 0 2px 2px #efdfde',
    //     },
    //     // 4. We can override existing variants
    //     solid: (props) => ({
    //       bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
    //     }),
    //   },
    // },
  },
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
      900: '#101010',
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
