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
import BackgroundSection from '../common/components/backgroundImage';

export default ({ data }) => (
  <Layout>
    <Seo
      title={`Contact ${data.site.siteMetadata.title}`}
      description={data.markdownRemark.frontmatter.title}
    />
    <Img
      style={{ height: '30vh' }}
      fluid={data.banner.childImageSharp.fluid}
      alt={data.banner.name}
    />

    <FormContainer>
      <Form
        method='post'
        action='/'
        data-netlify='true'
        data-netlify-recaptcha='true'
        data-netlify-honeypot='bot-field'
        name='contact-form'
      >
        <Title>Contact Me</Title>
        <input type='hidden' name='contact-form' value='contact' />
        <Input type='text' name='name' placeholder='Name' />
        <Input type='email' name='email' placeholder='Email' />
        <TextArea placeholder='Message' name='message' cols='30' rows='10' />
        <div data-netlify-recaptcha='true' />
        <Button
          className='db no-underline ph5 ttu pv3 sans-serif near-white bg-dark-gray tracked b hover-bg-mid-gray'
          type='submit'
        >
          Submit
        </Button>
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
        fluid(maxHeight: 720, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
