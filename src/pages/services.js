import React from "react";
import Layout from "../common/layouts";
import { graphql } from "gatsby";
import Seo from "../common/seo";
import SectionContainer from "../common/components/sectionContainer";
import ReactMarkdown from "react-markdown";
import markdownRender from "../common/renders/markdownRender";
import { css } from "emotion";
import { Parallax } from "react-parallax";
import { Container } from "../common/components/parallax";
import styled from "styled-components";
import breaks from "remark-breaks";

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

export default ({ data }) => (
  <Layout>
    <Seo
      title={`Services`}
      description={data.service.intro.childMarkdownRemark.headings[0].value}
    />
    <Parallax
      bgImageSizes={data.banner.img.fluid.sizes}
      bgImage={data.banner.img.fluid.src}
      bgImageSrcSet={data.banner.img.fluid.srcSet}
      bgImageAlt={data.banner.description}
      bgImageStyle={{
        backgroundSize: "contain" /* <------ */,
      }}
      strength={100}
      renderLayer={() => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `hsla(0, 100%, 94%, 0.2)`,
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      )}
    >
      <Container />
    </Parallax>
    <ServicesIntro>
      <ReactMarkdown
        source={data.service.intro.childMarkdownRemark.rawMarkdownBody}
        renderers={markdownRender}
        plugins={[breaks]}
      />
    </ServicesIntro>
    <SectionContainer mediaQueries={mediaQueries}>
      <div className={divStyle}>
        <ReactMarkdown
          source={data.service.bridal.childMarkdownRemark.rawMarkdownBody}
          renderers={markdownRender}
          plugins={[breaks]}
        />
      </div>
    </SectionContainer>
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImageSizes={data.service.separator1.fluid.sizes}
      bgImage={data.service.separator1.fluid.src}
      bgImageSrcSet={data.service.separator1.fluid.srcSet}
      bgImageAlt={data.service.separator1.description}
      strength={100}
      bgImageStyle={{
        backgroundSize: "contain",
      }}
      renderLayer={(percentage) => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `hsla(0, 100%, 94%, 0.2)`,
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      )}
    >
      <Container smHeight="200px" />
    </Parallax>
    <SectionContainer mediaQueries={mediaQueries}>
      <div className={divStyle}>
        <ReactMarkdown
          source={
            data.service.specialEvents.childMarkdownRemark.rawMarkdownBody
          }
          renderers={markdownRender}
          plugins={[breaks]}
        />
      </div>
    </SectionContainer>
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImageSizes={data.service.separator2.fluid.sizes}
      bgImage={data.service.separator2.fluid.src}
      bgImageSrcSet={data.service.separator2.fluid.srcSet}
      bgImageAlt={data.service.separator2.description}
      strength={100}
      bgImageStyle={{
        backgroundSize: "contain",
      }}
      renderLayer={(percentage) => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `hsla(0, 100%, 94%, 0.2)`,
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      )}
    >
      <Container smHeight="200px" />
    </Parallax>
    <SectionContainer mediaQueries={mediaQueries}>
      <div className={divStyle}>
        <ReactMarkdown
          source={
            data.service.privateLessons.childMarkdownRemark.rawMarkdownBody
          }
          renderers={markdownRender}
          plugins={[breaks]}
        />
      </div>
    </SectionContainer>
  </Layout>
);

export const dataQuery = graphql`
  query {
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
        title
        fluid(maxWidth: 1920) {
          ...GatsbyContentfulFluid
        }
      }
      separator2 {
        description
        title
        fluid(maxWidth: 1920) {
          ...GatsbyContentfulFluid
        }
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
        fluid(maxWidth: 1920) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;
