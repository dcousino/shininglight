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
import { Parallax } from 'react-parallax';
import { InsideSection, Container } from '../common/components/parallax';

export default ({ data }) => (
  <Layout>
    <Seo
      title={`Contact ${data.site.siteMetadata.title}`}
      description={data.site.siteMetadata.title}
    />

    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={data.banner.img.fluid.src}
      bgImageAlt={data.banner.description}
      strength={100}
      renderLayer={percentage => (
        <div>
          <div
            style={{
              position: 'absolute',
              background: `hsla(0, 100%, 94%, 0.2)`,
              width: '100%',
              height: '100%'
            }}
          />
        </div>
      )}
    >
      <Container>
        <InsideSection />
      </Container>
    </Parallax>

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
        <Button style={{ border: 'none' }} type="submit" value="submit" />
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
