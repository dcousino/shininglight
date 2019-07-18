import React from 'react';
import Layout from '../common/layouts';
import { graphql } from 'gatsby';
import Seo from '../common/seo';
import {
  Title,
  Form,
  FormContainer,
  Input,
  Button,
  TextArea
} from '../common/components/contactForm';
import Img from 'gatsby-image';

export default ({ data }) => (
  <Layout>
    <Seo
      title={`Contact ${data.site.siteMetadata.title}`}
      description={data.markdownRemark.frontmatter.title}
    />
    <Img
      style={{ height: '30vh', marginTop: '20px' }}
      fluid={data.banner.childImageSharp.fluid}
      alt={data.banner.name}
    />

    <FormContainer>
      <Form method="post" data-netlify="true" name="contact" action="#">
        <Title>Contact Me</Title>
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" id="name" placeholder="Name" required />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
        <textarea
          placeholder="Message"
          id="message"
          name="message"
          cols="30"
          rows="10"
          required
        />
        <div data-netlify-recaptcha="true" />
        <input
          type="submit"
          className="db no-underline ph5 ttu pv3 sans-serif near-white bg-dark-gray tracked b hover-bg-mid-gray"
          value="submit"
        />
      </Form>
    </FormContainer>
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
    banner: file(relativePath: { eq: "img/makeup.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 720, maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
