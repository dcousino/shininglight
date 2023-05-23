import React from "react";
import Layout from "../common/layouts";
import { PageProps, graphql } from "gatsby";
import Seo from "../common/seo";
import { Parallax } from "react-parallax";
import CarouselSection from "../common/components/carouselSection";
import styled from "styled-components";
import { deviceMax } from "../../device";
import { InsideSection, Container } from "../common/components/parallax";
import { PortfolioQuery } from "../types/queries";

const CarouselWrapper = styled.div`
  max-width: 70%;
  margin: 0 auto;
  padding: 30px 0;

  @media ${deviceMax.tablet} {
    max-width: 95%;
  }
`;

const Portfolio = ({ data }: PageProps<PortfolioQuery>) => {
  return (
    <Layout>
      <Seo
        title={`Portfolio`}
        description={data.site.siteMetadata.description}
      />
      <div
        style={{
          backgroundColor: "#fff0ed",
        }}
      >
        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={data.muBanner.img.url}
          bgImageAlt={data.muBanner.title}
          strength={100}
          renderLayer={(percentage) => (
            <div>
              <div
                style={{
                  position: "absolute",
                  background: `hsla(0, 100%, 94%, 0.2)`,
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          )}
        >
          <Container>
            <InsideSection>Makeup & Hair</InsideSection>
          </Container>
        </Parallax>
        <CarouselWrapper>
          <CarouselSection bucket={"makeup"} />
        </CarouselWrapper>

        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={data.btsBanner.img.url}
          bgImageAlt={data.btsBanner.title}
          strength={100}
          renderLayer={(_) => (
            <div>
              <div
                style={{
                  position: "absolute",
                  background: `hsla(0, 100%, 94%, 0.2)`,
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          )}
        >
          <Container>
            <InsideSection>Behind the Scenes</InsideSection>
          </Container>
        </Parallax>
        <CarouselWrapper>
          <CarouselSection bucket={"bts"} />
        </CarouselWrapper>
      </div>
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
        url
      }
    }
    btsBanner: contentfulImage(title: { eq: "Portfolio-BehindTheScenes" }) {
      title
      img {
        url
      }
    }
  }
`;
