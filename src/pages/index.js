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
        fluid={data.heroImage.childImageSharp.fluid}
        alt={data.heroImage.name}
      />
      <Bio />
      <CarouselSection />
      <About />
      <ContactImage
        fluid={data.makeup.childImageSharp.fluid}
        alt={data.makeup.name}
      />
    </Layout>
  );
};

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "img/becca.jpg" }) {
      name
      childImageSharp {
        fluid(maxHeight: 1080, maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    makeup: file(relativePath: { eq: "img/makeup.jpg" }) {
      name
      childImageSharp {
        fluid(maxHeight: 1080, maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid
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
