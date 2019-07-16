import React from 'react';
import Layout from '../common/layouts';
import { graphql } from 'gatsby';
import Bio from '../homepage/components/bio';
import About from '../homepage/components/about';
import Seo from '../common/seo';
import BackgroundSection from '../common/components/backgroundImage';
import CarouselSection from '../common/components/carouselSection';

export default ({ data }) => {
  return (
    <Layout>
      <Seo
        title={'Home Page'}
        description={data.site.siteMetadata.description}
      />
      <BackgroundSection img={data.heroImage.childImageSharp.fluid} />
      <Bio />
      <CarouselSection />
      <About />
      <BackgroundSection img={data.makeup.childImageSharp.fluid} />
    </Layout>
  );
};

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "img/becca.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 1000, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    makeup: file(relativePath: { eq: "img/makeup.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 1300, maxWidth: 1920) {
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
