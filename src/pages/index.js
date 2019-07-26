import React from 'react';
import Layout from '../common/layouts';
import { graphql } from 'gatsby';
import Bio from '../homepage/components/bio';
import About from '../homepage/components/about';
import Seo from '../common/seo';
import CarouselSection from '../common/components/carouselSection';
import Img from 'gatsby-image';
import styled from 'styled-components';

const BannerImage = styled(Img)`
  height: auto;
  width: 100%;
`;
const ContactImage = styled(Img)`
  height: 40vh;
  width: 100%;
`;
export default ({ data }) => {
  return (
    <Layout>
      <Seo
        title={'Home Page'}
        description={data.site.siteMetadata.description}
      />
      <BannerImage
        fluid={data.home.bannerImage.fluid}
        alt={data.home.bannerImage.description}
      />
      <Bio />
      <CarouselSection bucket="bts" />
      <About />
      <ContactImage
        fluid={data.home.contactImage.fluid}
        alt={data.home.contactImage.description}
      />
    </Layout>
  );
};

export const query = graphql`
  query {
    home: contentfulHomePage {
      description {
        description
      }
      bannerImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      contactImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
    site {
      siteMetadata {
        description
      }
    }
  }
`;
