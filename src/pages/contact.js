import React from 'react';
import Layout from '../common/layouts';
import { graphql } from 'gatsby';
import Seo from '../common/seo';
import {
  Title,
  Form,
  FormContainer,
  Input,
  TextArea
} from '../common/components/contactForm';
import OverlayImage from '../common/components/overlay';

export default ({ data }) => (
  <Layout>
    <Seo
      title={`Contact ${data.site.siteMetadata.title}`}
      description={data.site.siteMetadata.title}
    />
    <OverlayImage
      style={{ height: '50vh' }}
      fluid={data.banner.img.fluid}
      alt={data.banner.description}
    />

    <FormContainer>
      <Form method="post" data-netlify="true" name="contact" action="#">
        <Title>Contact Me</Title>
        <Input type="hidden" name="form-name" value="contact" />
        <Input type="text" name="name" id="name" placeholder="Name" required />
        <Input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
        <TextArea
          placeholder="Message"
          id="message"
          name="message"
          cols="30"
          rows="10"
          required
        />
        <div data-netlify-recaptcha="true" />
        <input
          style={{ border: 'none' }}
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
    banner: contentfulImage(title: { eq: "ContactBanner" }) {
      title
      img {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;
