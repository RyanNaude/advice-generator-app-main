import React, { useState } from "react";

/** Material UI Theme */
import { ThemeProvider } from "@mui/styles";
import theme from "../Assets/theme/theme";

/** import Layout pages */
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import Main from "../Layouts/Main";

function App() {
  const [advice, setAdvice] = useState({
    no: "",
    advice: "",
  });


  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main advice={advice} setAdvice={setAdvice}/>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
