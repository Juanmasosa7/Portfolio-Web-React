import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "rgb(15, 36, 52)",
      },
      "*": {
        margin: 0,
        padding: 0,
      },
    },
  },
});

export default theme;