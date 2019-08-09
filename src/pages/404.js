import React from 'react';
import Layout from '../common/layouts';
import { graphql } from 'gatsby';
import Seo from '../common/seo';
import styled from 'styled-components';
import { Button } from '../common/components/links';
import SectionContainer from '../common/components/sectionContainer';
import BannerImage from '../common/components/bannerImage';
const mediaQueries = `@media (min-width: 900px) {width: 70%;} @media (min-width: 1200px) {width: 60%;} @media (min-width: 1600px) {width: 50%;}`;

const Title = styled.h1`
  display: block;
  font-weight: 100;
  margin: 0 auto;
  line-height: 1.5;
  color: ${props => props.theme.colors.offwhite};
`;

const Body = styled.p`
  max-width: 54rem;
  width: 100%;
  font-family: serif;
  text-align: center;
`;

export default ({ props, data }) => (
  <Layout>
    <Seo title={`404`} description={data.site.siteMetadata.description} />
    <BannerImage img={data.about.bannerImage.fluid.src} />
    <SectionContainer mediaQueries={mediaQueries}>
      <div style={{ width: '100%', textAlign: 'center' }}>
        <Title>Page Not Found</Title>

        <Body> We couldn&#39;t find what you were looking for.</Body>
        <Button to="/">Go to homepage</Button>
      </div>
    </SectionContainer>
  </Layout>
);

export const dataQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    about: contentfulAboutPage {
      bannerImage {
        description
        title
        fluid(maxWidth: 1920) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;
