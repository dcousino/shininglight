import React from "react";
import Layout from "../common/layouts";
import { PageProps, graphql } from "gatsby";
import Bio from "../homepage/components/bio";
import About from "../homepage/components/about";
import Seo from "../common/seo";
import CarouselSection from "../common/components/carouselSection";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import BannerVideo from "../common/components/bannerVideo";
import { HomePageQuery } from "../types/queries";

const ContactImage = styled(GatsbyImage)`
  height: 40vh;
  width: 100%;
`;

const HomePage = ({ data }: PageProps<HomePageQuery>) => {
  const { placeholderUrl, url, mimeType } = data.home.bannerVideo;
  return (
    <Layout>
      <Seo
        title={"Home Page"}
        description={data.site.siteMetadata.description}
      />
      <BannerVideo
        placeholderUrl={placeholderUrl}
        mimeType={mimeType}
        src={url}
      />
      <Bio />
      <CarouselSection bucket="home" />
      <About />
      <ContactImage
        image={data.home.contactImage.gatsbyImageData}
        alt={data.home.contactImage.description}
      />
    </Layout>
  );
};

export const query = graphql`
  query HomePage {
    home: contentfulHomePage {
      description {
        description
      }
      bannerImage {
        gatsbyImageData(width: 1920)
        description
      }
      contactImage {
        gatsbyImageData(width: 1920)
        description
      }
      bannerVideo {
        placeholderUrl
        url
        mimeType
      }
    }
    site {
      siteMetadata {
        description
      }
    }
  }
`;

export default HomePage;
