import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

import BackgroundImage from 'gatsby-background-image';

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "img/becca.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid;
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        />
      );
    }}
  />
);

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: 100vh;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  @media (max-width: 768px) {
    height: 60vh;
  }
  @media (max-width: 450px) {
    height: 40vh;
  }
`;

export default StyledBackgroundSection;
