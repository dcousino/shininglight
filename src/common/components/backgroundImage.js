import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

const BackgroundSection = props => (
  <BackgroundImage
    Tag="section"
    className={props.className}
    fluid={props.img}
  />
);

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: ${props => props.height || '100'}vh;
  background-position: top center;
  background-repeat: repeat-x;
  background-size: cover;
  @media (max-width: 768px) {
    height: 60vh;
  }
  @media (max-width: 450px) {
    height: 40vh;
  }
`;

export default StyledBackgroundSection;
