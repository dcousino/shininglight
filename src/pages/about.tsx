import React from "react";
import Layout from "../common/layouts";
import { graphql, PageProps } from "gatsby";
import Seo from "../common/seo";
import SectionContainer from "../common/components/sectionContainer";
import ReactMarkdown from "react-markdown";
import markdownRender from "../common/renders/markdownRender";
import breaks from "remark-breaks";
import { css } from "@emotion/css";
import { Fade } from "react-awesome-reveal";
import { Image } from "../common/components/imageComponents";
import { AboutPageQuery } from "../types/queries";
import { GatsbyImage } from "gatsby-plugin-image";
const mediaQueries = `@media (min-width: 900px) {width: 70%;} @media (min-width: 1200px) {width: 60%;} @media (min-width: 1600px) {width: 50%;}`;

const divStyle = css`
  margin: 1.75rem;
  width: 100%;
  max-width: 48rem;
`;

const ImageStyle = css`
  height: 520px;
  width: 1080px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    height: 200px;
    width: unset;
  }
`;

export default ({ data }: PageProps<AboutPageQuery>) => {
  return (
    <Layout>
      <Seo title={`About`} description={data.site.siteMetadata.description} />
      <div style={{ width: "100%", background: "white" }}>
        <GatsbyImage
          className={ImageStyle}
          image={data.about.bannerImage.gatsbyImageData}
          alt={data.about.bannerImage.description}
        />
      </div>
      <SectionContainer mediaQueries={mediaQueries}>
        <Fade style={{ display: "flex" }} triggerOnce direction="left">
          <div className={divStyle}>
            <ReactMarkdown
              children={
                data.about.aboutPageContent.childMarkdownRemark.rawMarkdownBody
              }
              components={markdownRender}
              remarkPlugins={[breaks]}
            />
          </div>
        </Fade>
        <Fade style={{ display: "flex" }} triggerOnce direction="right">
          <Image
            image={data.about.aboutImage.gatsbyImageData}
            alt="The Author"
            className=""
          />
        </Fade>
      </SectionContainer>
    </Layout>
  );
};

export const query = graphql`
  query AboutPageQuery {
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
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        description
      }
      aboutImage {
        description
        gatsbyImageData(width: 400, placeholder: BLURRED)
      }
    }
  }
`;
