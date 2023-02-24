import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    primary: {
      500: "#0C6A93",
    },
  },
  fonts: {
    heading: `'Montserrat', sans-serif`,
    box: `'Poppins', sans-serif`,
    text: `'Poppins', sans-serif`,
  },
});

export { theme };
