import React from "react";
import Layout from "../common/layouts";
import { PageProps, graphql, useScrollRestoration } from "gatsby";
import Seo from "../common/seo";
import { Parallax } from "react-parallax";
import CarouselSection from "../common/components/carouselSection";
import styled from "styled-components";
import { deviceMax } from "../../device";
import { InsideSection, Container } from "../common/components/parallax";
import { PortfolioQuery } from "../types/queries";
import { GatsbyImage } from "gatsby-plugin-image";

const CarouselWrapper = styled.div`
  max-width: 70%;
  margin: 0 auto;
  padding: 30px 0;

  @media ${deviceMax.tablet} {
    max-width: 95%;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: rgba(241, 237, 237, 0.374);
  transform: translate(-50%, -50%);

  width: 100%;
  height: 100%;
`;

const Portfolio = ({ data }: PageProps<PortfolioQuery>) => {
  return (
    <Layout>
      <Seo
        title={`Portfolio`}
        description={data.site.siteMetadata.description}
      />
      <div style={{ position: "relative" }}>
        <GatsbyImage
          style={{ height: "520px" }}
          objectPosition="center top"
          image={data.muBanner.img.gatsbyImageData}
          alt="Services Banner"
        />
        <Overlay />
        <InsideSection>Makeup & Hair</InsideSection>

        <div className=""></div>
      </div>
      <CarouselWrapper>
        <CarouselSection bucket={"makeup"} />
      </CarouselWrapper>

      <div style={{ position: "relative", height: "520px" }}>
        <GatsbyImage
          style={{ height: "520px" }}
          objectPosition="center top"
          image={data.btsBanner.img.gatsbyImageData}
          alt="Services Banner"
        />
        <Overlay />
        <InsideSection>Behind the Scenes</InsideSection>
      </div>
      <CarouselWrapper>
        <CarouselSection bucket={"bts"} />
      </CarouselWrapper>
    </Layout>
  );
};

export default Portfolio;

export const query = graphql`
  query Portfolio {
    site {
      siteMetadata {
        description
      }
    }
    muBanner: contentfulImage(title: { eq: "Portfolio-Makeup&Hair" }) {
      title
      img {
        description
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
    btsBanner: contentfulImage(title: { eq: "Portfolio-BehindTheScenes" }) {
      title
      img {
        description
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
  }
`;
