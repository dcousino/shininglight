import React, { Fragment } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { ScrollingProvider } from 'react-scroll-section';
import config from 'react-reveal/globals';
import colors from '../../../colors';
import Helmet from '../seo';

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
  overflow-x: hidden;
  height: 100%
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
  <Fragment>
    <GlobalStyle />
    <ThemeProvider theme={{ colors }}>
      <ScrollingProvider>
        <Helmet
          title="Shining Light Beauty Design By Amber Rose"
          description="Shining Light makeup artist, serving the Maryland and Northern Virgina/DMA area for Wedding, Mitzvahs, Proms, Bridal Trials, and other Special Events. Specializing in hair, lashes, blowouts, airbrush, updos, photoshoots, boudoir, and professional certified, tailored beauty consultations."
        />
        {children}
      </ScrollingProvider>
    </ThemeProvider>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
