import React from 'react';
import Helmet from 'react-helmet';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import config from 'react-reveal/globals';
import colors from '../../../colors';
import HoniladScript from './fonts/HoniladScript-Regular.ttf';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import 'tachyons';
import '../styles/custom.tachyons.css';

const GlobalStyle = createGlobalStyle`
 @font-face {
    font-family: HoniladScript;
    src: url(${HoniladScript});
  }
*,
*::after,
*::before {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
  }

body {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  font-family: 'Cormorant', sans-serif;
  min-height: 100%;
  color: #333333;
}

html {
  min-height: 100%;
}

h1, h2, h3 {
  font-family: 'HoniladScript', sans-serif;
}

.rochester {
  font-family: 'Rochester', sans-serif;
}

.sans-serif {
  font-family: 'Cormorant', sans-serif !important;
}

.serif {
  font-family: 'Cormorant', serif !important;
}
`;

config({ ssrFadeout: true });

const Layout = ({ children }) => (
  <React.Fragment>
    <GlobalStyle />
    <ThemeProvider config={{ config }} theme={{ colors }}>
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
