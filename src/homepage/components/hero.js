import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import '../../common/styles/custom.tachyons.css';
import 'tachyons';
import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';
import BackgroundSection from '../../common/components/backgroundImage';

const FullPageBg = styled.div`
  background: url(${props => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;

const Logo = styled(Img)`
  display: block;
  max-width: 500px;
  margin: 0 auto;
`;
const LogoContainer = styled.div`
  background-image: radial-gradient(
    white 40%,
    ${props => props.theme.colors.primary},
    ${props => props.theme.colors.primary}
  );
  padding: 30px;
`;
export default props => (
  <React.Fragment>
    <BackgroundSection />

    <LogoContainer>
      <Zoom>
        <Logo fluid={props.logo} alt={props.description} />
      </Zoom>
    </LogoContainer>
  </React.Fragment>
);
