import React from 'react';
import Layout from '../common/layouts';
import { graphql } from 'gatsby';
import Seo from '../common/seo';
import SectionContainer from '../common/components/sectionContainer';
import ReactMarkdown from 'react-markdown';
import markdownRender from '../common/renders/markdownRender';
import { Parallax } from 'react-parallax';
import { InsideSection, Container } from '../common/components/parallax';
import breaks from 'remark-breaks';
import { css } from 'emotion';
import styled from 'styled-components';
const mediaQueries = `@media (min-width: 900px) {width: 70%;} @media (min-width: 1200px) {width: 60%;} @media (min-width: 1600px) {width: 50%;}`;
const CarouselImage = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  background-color: #fff;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${props => props.img});
  @media screen and (max-width: 768px) {
    height: 300px;
  }
`;
const divStyle = css`
  margin: 1.75rem;
  width: 100%;
  max-width: 48rem;
  h4: {
    color: red !important;
  }
`;

export default ({ props, data }) => {
  return (
    <Layout>
      <Seo
        title={`About ${data.site.siteMetadata.title}`}
        description={data.site.siteMetadata.title}
      />
      <CarouselImage img={data.about.bannerImage.fluid.src} />
      <SectionContainer mediaQueries={mediaQueries}>
        <div className={divStyle}>
          <ReactMarkdown
            source={
              data.about.aboutPageContent.childMarkdownRemark.rawMarkdownBody
            }
            renderers={markdownRender}
            plugins={[breaks]}
          />
        </div>
      </SectionContainer>
    </Layout>
  );
};

export const dataQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    about: contentfulAboutPage {
      aboutPageContent {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
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
