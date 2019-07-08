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
      {/* <Hero
        title={post.frontmatter.title}
        image={data.heroImage.childImageSharp.fluid}
        mobileImage={data.heroImagemobile.childImageSharp.fluid}
        to={post.frontmatter.slug}
        description={post.frontmatter.description}
        logo={data.logo.childImageSharp.fluid}
      /> */}

      <CarouselSection
        imgs={[data.aboutSection.childImageSharp, data.makeup.childImageSharp]}
      />
      <About />
      <BackgroundSection img={data.makeup.childImageSharp.fluid} />
    </Layout>
  );
};

export const query = graphql`
  query {
    featuredPost: allMarkdownRemark(
      limit: 1
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { type: { eq: "post" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            description: metaDescription
            slug
            postImage {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    heroImage: file(relativePath: { eq: "img/becca.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 1000, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aboutSection: file(relativePath: { eq: "img/about-section.jpg" }) {
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
    cards: allMarkdownRemark(
      skip: 1
      limit: 3
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { type: { eq: "post" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            description: metaDescription
            slug
            postImage {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
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
