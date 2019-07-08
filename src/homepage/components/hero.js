import React from 'react';
import '../../common/styles/custom.tachyons.css';
import 'tachyons';
import styled from 'styled-components';
import BackgroundSection from '../../common/components/backgroundImage';
import { Zoom } from 'react-reveal';
import Img from 'gatsby-image';
const ImgWrap = styled.div`
  max-width: 40%;
  margin: -10px auto;
  z-index: -2000;
`;

export default props => (
  <React.Fragment>
    <div style={{ zIndex: '9999', position: 'relative' }}>
      <Zoom>
        <ImgWrap>
          <Img fluid={props.logo} alt={props.description} />
        </ImgWrap>
      </Zoom>
    </div>
  </React.Fragment>
);
