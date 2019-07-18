import React from 'react';
import Carousel from 'react-slick';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const CarouselSection = styled.div`
  margin: 0 auto !important;
  overflow: hidden;
  @media screen and (min-width: 1600px) {
    width: 60%;
  }
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
                fluid {
                  ...GatsbyImageSharpFluid
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
            sizes={{ ...node.childImageSharp.fluid, aspectRatio: 5.5 / 3 }}
            key={node.id}
            alt={node.name.replace(/-/g, ' ')}
          />
        ))}
      </Carousel>
    </CarouselSection>
  );
};
