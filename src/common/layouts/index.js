import React from 'react';
import Helmet from 'react-helmet';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import config from 'react-reveal/globals';
import colors from '../../../colors';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
  background-color: ${colors.background};
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

.fadeIn {
  animation: fadeIn 0.4s normal forwards;
}

.fadeOut {
  animation: fadeOut 0.2s normal forwards;
}

.dn { display: none; }
`;

config({ ssrFadeout: true });

const Layout = ({ children }) => (
  <React.Fragment>
    <GlobalStyle />
    <ThemeProvider config={{ config }} theme={{ colors }}>
      <div>
        <Helmet>
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Helmet>
        <Navbar />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  </React.Fragment>
);

export default Layout;
