import { createTheme } from "@mui/material/styles";

// const primeCol = "#323A49";
// const secCol = "#4E5D73";
// const terCol = "#1F2632";

const primeCol = "#1F2632";
const secCol = "#323A49";
// const terCol = "#";


const lightBlue = "#cee4e9";
const neonGreen = "#52ffa8";

const errCol = "#F58D86";
const succCol = "#56A659";
const cardSucCol = "#A6E698";

export default createTheme({
  palette: {
    primary: {
      main: primeCol,
    },
    secondary: {
      main: secCol,
    },
    errorCol: {
      main: errCol,
    },
    successCol: {
      main: succCol,
    },
    cardSucCol: {
      main: cardSucCol,
    },
    adviceTitle: {
      main: neonGreen,
    },
    adviceBody: {
      main: lightBlue
    }
  },
  typography: {
    adviceHeader: {
      fontFamily: "Manrope",
    },
    adviceBody: {
      fontFamily: "Manrope",
    },
  },
  body: {
    margin: 0,
  },
});
