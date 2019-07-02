import React from 'react';
import Layout from '../common/layouts';
import { graphql } from 'gatsby';
import Hero from '../homepage/components/hero';
import Bio from '../homepage/components/bio';
import Seo from '../common/seo';
export default ({ data }) => {
  let post = data.featuredPost.edges[0].node;
  return (
    <Layout img={data.heroImage.childImageSharp.fluid}>
      <Seo
        title={'Home Page'}
        description={data.site.siteMetadata.description}
      />
      <Hero
        title={post.frontmatter.title}
        image={data.heroImage.childImageSharp.fluid}
        mobileImage={data.heroImagemobile.childImageSharp.fluid}
        to={post.frontmatter.slug}
        description={post.frontmatter.description}
        logo={data.logo.childImageSharp.fluid}
      />
      <Bio />
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
    heroImagemobile: file(relativePath: { eq: "img/becca-mobile.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 1000, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logo: file(relativePath: { eq: "img/logo.png" }) {
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
