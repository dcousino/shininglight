import React from 'react';
import Layout from '../common/layouts';
import { graphql } from 'gatsby';
import Seo from '../common/seo';
import EmailForm from '../blog/components/emailForm';
export default ({ _, data }) => (
  <Layout>
    <Seo
      title={`About ${data.site.siteMetadata.title}`}
      description={data.markdownRemark.frontmatter.title}
    />
    <EmailForm />
  </Layout>
);

export const dataQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { name: { eq: "about__bio" } }) {
      html
      frontmatter {
        title
      }
    }
    banner: file(relativePath: { eq: "img/about__banner.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 720, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
