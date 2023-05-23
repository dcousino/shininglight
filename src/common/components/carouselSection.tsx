import React from "react";
import Carousel from "react-slick";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { CarouselQuery } from "../../types/queries";

const CarouselImage = styled.div<{ img: string }>`
  position: relative;
  float: left;
  width: 100%;
  height: 500px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${(props) => props.img});
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
  adaptiveHeight: true,
};

const CarouselComp = (props: { bucket: "makeup" | "bts" | "home" }) => {
  const bucket = useStaticQuery<CarouselQuery>(
    graphql`
      query CarouselQuery {
        makeup: allContentfulCarouselMedia(
          filter: { title: { eq: "Makeup" } }
        ) {
          edges {
            node {
              title
              carouselImages {
                id
                title
                url
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
                url
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
                url
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
              node.carouselImages &&
              node.carouselImages.map((img) => <CarouselImage img={img?.url} />)
          )}
      </Carousel>
    </CarouselSection>
  );
};

export default CarouselComp;
