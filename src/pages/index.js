import React from 'react';
import Layout from '../common/layouts';
import { graphql } from 'gatsby';
import Hero from '../homepage/components/hero';
import About from '../homepage/components/about';
import Bio from '../homepage/components/bio';
import Seo from '../common/seo';
import Slide from 'react-reveal/Slide';
import Card from '../homepage/components/card';
import Services from '../homepage/components/services';

export default ({ data }) => {
  const post = data.featuredPost.edges[0].node;
  const cards = data.cards.edges.map(({ node }) => (
    <Slide key={node.frontmatter.slug} left ssrFadeout>
      <Card
        key={node.frontmatter.slug}
        title={node.frontmatter.title}
        image={node.frontmatter.postImage.childImageSharp.fluid}
        to={node.frontmatter.slug}
        description={node.frontmatter.description}
      />
    </Slide>
  ));

  return (
    <Layout>
      <Seo
        title={'Home Page'}
        description={data.site.siteMetadata.description}
      />
      <Slide left>
        <Hero
          title={post.frontmatter.title}
          image={post.frontmatter.postImage.childImageSharp.fluid}
          to={post.frontmatter.slug}
          description={post.frontmatter.description}
        />
      </Slide>
      <Services />
      <About />
      <Bio />

      <div className="flex flex-wrap center mw9 justify-around pb3">
        {cards}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    featuredPost: allMarkdownRemark(
      limit: 1
      filter: { frontmatter: { category: { eq: "main" } } }
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
