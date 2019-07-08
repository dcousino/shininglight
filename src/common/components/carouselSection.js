import React from 'react';
import Carousel from 'react-slick';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const CarouselSection = styled.div`
  margin-left: 'auto !important';
  margin-right: 'auto !important';

  overflow: hidden;
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true
};

export default () => {
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "slides" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 600, maxHeight: 400) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `
  );
  return (
    <CarouselSection>
      <Carousel {...settings}>
        {allFile.edges.map(({ node }) => (
          <Img
            className="slick-image"
            fluid={node.childImageSharp.fluid}
            key={node.id}
            alt={node.name.replace(/-/g, ' ')}
          />
        ))}
      </Carousel>
    </CarouselSection>
  );
};
