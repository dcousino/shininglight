import React from "react";
import Helmet from "react-helmet";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import colors from "../../../colors";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const GlobalStyle = createGlobalStyle`

*,
*::after,
*::before {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
  }

body {
  overflow-x: hidden;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  font-family: 'Cormorant', sans-serif;
  min-height: 100%;
  color: #333333;
  background-color: ${colors.background};
  
}

html {
  overflow-x: hidden;
  min-height: 100%;
}

h1, h2, h3 {
  font-family: 'Sacramento', sans-serif;
}


.sans-serif {
  font-family: 'Cormorant', sans-serif !important;
}

.serif {
  font-family: 'Cormorant', serif !important;
}

.dn { display: none; }
`;

const Layout = ({ children }: { children: React.ReactNode }) => (
  <React.Fragment>
    <GlobalStyle />
    <ThemeProvider theme={{ colors }}>
      <div>
        <Helmet />
        <Navbar />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  </React.Fragment>
);

export default Layout;
