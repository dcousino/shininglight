import React from "react";
import Layout from "../common/layouts";
import { PageProps, graphql } from "gatsby";
import Seo from "../common/seo";
import SectionContainer from "../common/components/sectionContainer";
import ReactMarkdown from "react-markdown";
import markdownRender from "../common/renders/markdownRender";
import { css } from "@emotion/css";
import styled from "styled-components";
import breaks from "remark-breaks";
import { ServicesQuery } from "../types/queries";
import { GatsbyImage } from "gatsby-plugin-image";

const mediaQueries = `@media (min-width: 900px) {width: 70%;} @media (min-width: 1200px) {width: 60%;} @media (min-width: 1600px) {width: 50%;}`;

const divStyle = css`
  margin: 1.75rem;
  width: 100%;
  max-width: 48rem;
`;

const ServicesIntro = styled.div`
  margin: 5rem auto;
  padding: 10px;
  border-top: 1px solid ${(props) => props.theme.colors.lightGray};
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
  width: 96%;

  @media (min-width: 900px) {
    width: 90%;
  }
  @media (min-width: 1200px) {
    width: 85%;
  }
  @media (min-width: 1600px) {
    width: 80%;
  }
`;

const Services = ({ data }: PageProps<ServicesQuery>) => (
  <Layout>
    <Seo
      title={`Services`}
      description={data.service.intro.childMarkdownRemark.headings[0].value}
    />

    <GatsbyImage
      style={{ height: "500px" }}
      image={data.banner.img.gatsbyImageData}
      alt="Services Banner"
    />
    <ServicesIntro>
      <ReactMarkdown
        children={data.service.intro.childMarkdownRemark.rawMarkdownBody || ""}
        components={markdownRender}
        remarkPlugins={[breaks]}
      />
    </ServicesIntro>
    <SectionContainer mediaQueries={mediaQueries}>
      <div className={divStyle}>
        <ReactMarkdown
          children={
            data.service.bridal.childMarkdownRemark.rawMarkdownBody || ""
          }
          components={markdownRender}
          remarkPlugins={[breaks]}
        />
      </div>
    </SectionContainer>
    <GatsbyImage
      style={{ height: "300px" }}
      image={data.service.separator1.gatsbyImageData}
      alt="Services Banner"
    />

    <SectionContainer mediaQueries={mediaQueries}>
      <div className={divStyle}>
        <ReactMarkdown
          children={
            data.service.specialEvents.childMarkdownRemark.rawMarkdownBody
          }
          components={markdownRender}
          remarkPlugins={[breaks]}
        />
      </div>
    </SectionContainer>
    <GatsbyImage
      style={{ height: "300px", display: "block", width: "100%" }}
      objectFit="cover"
      image={data.service.separator2.gatsbyImageData}
      alt="Services Banner"
    />
    <SectionContainer mediaQueries={mediaQueries}>
      <div className={divStyle}>
        <ReactMarkdown
          children={
            data.service.privateLessons.childMarkdownRemark.rawMarkdownBody
          }
          components={markdownRender}
          remarkPlugins={[breaks]}
        />
      </div>
    </SectionContainer>
  </Layout>
);

export default Services;

export const q = graphql`
  query Services {
    service: contentfulServices {
      name
      intro {
        childMarkdownRemark {
          rawMarkdownBody
          headings {
            value
          }
        }
      }
      bridal {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      specialEvents {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      separator1 {
        description
        gatsbyImageData(width: 1920, placeholder: BLURRED)
      }
      separator2 {
        description
        gatsbyImageData(width: 1920, placeholder: BLURRED)
      }
      privateLessons {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
    }
    banner: contentfulImage(title: { eq: "ServicesBanner" }) {
      title
      img {
        description
        gatsbyImageData(width: 1920, placeholder: BLURRED)
      }
    }
  }
`;
