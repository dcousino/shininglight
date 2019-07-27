import React from 'react';
import Carousel from 'react-slick';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

const CarouselImage = styled.div`
  position: relative;
  float: left;
  width: 100%;
  height: 500px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${props => props.img});
  @media screen and (max-width: 768px) {
    width: 80%;
    height: 300px;
  }
`;
const CarouselSection = styled.div`
  margin: 0 auto !important;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 80%;
  }
  @media screen and (min-width: 1600px) {
    width: 60%;
  }
`;

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  adaptiveHeight: true
};

export default props => {
  const bucket = useStaticQuery(
    graphql`
      query {
        makeup: allContentfulCarouselMedia(
          filter: { title: { eq: "Makeup" } }
        ) {
          edges {
            node {
              title
              carouselImages {
                id
                title
                fluid(maxWidth: 800) {
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
        bts: allContentfulCarouselMedia(
          filter: { title: { eq: "Behind the Scenes" } }
        ) {
          edges {
            node {
              title
              carouselImages {
                id
                title
                fluid(maxWidth: 800) {
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
        home: allContentfulCarouselMedia(filter: { title: { eq: "Home" } }) {
          edges {
            node {
              title
              carouselImages {
                id
                title
                fluid(maxWidth: 800) {
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      }
    `
  );
  const _bucket = bucket[props.bucket];
  return (
    <CarouselSection>
      <Carousel {...settings}>
        {_bucket &&
          _bucket.edges.map(
            ({ node }) =>
              node &&
              node.carouselImages.map(img => (
                <CarouselImage img={img.fluid.src} />
              ))
          )}
      </Carousel>
    </CarouselSection>
  );
};
