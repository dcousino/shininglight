import React from 'react';
import Layout from '../common/layouts';
import { graphql } from 'gatsby';
import Seo from '../common/seo';
import SectionContainer from '../common/components/sectionContainer';
import ReactMarkdown from 'react-markdown';
import markdownRender from '../common/renders/markdownRender';
import breaks from 'remark-breaks';
import { css } from 'emotion';
import BannerImage from '../common/components/bannerImage';

const mediaQueries = `@media (min-width: 900px) {width: 70%;} @media (min-width: 1200px) {width: 60%;} @media (min-width: 1600px) {width: 50%;}`;

const divStyle = css`
  margin: 1.75rem;
  width: 100%;
  max-width: 48rem;
`;

export default ({ props, data }) => {
  return (
    <Layout>
      <Seo title={`About`} description={data.site.siteMetadata.description} />
      <BannerImage height={'60vh'} img={data.about.bannerImage.fluid.src} />
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
        description
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
