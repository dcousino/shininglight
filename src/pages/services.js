import React from 'react';
import Layout from '../common/layouts';
import { graphql } from 'gatsby';
import Seo from '../common/seo';
import SectionContainer from '../common/components/sectionContainer';
import ReactMarkdown from 'react-markdown';
import markdownRender from '../common/renders/markdownRender';
import OverlayImage from '../common/components/overlay';
import { css } from 'emotion';
import { Parallax } from 'react-parallax';
import { InsideSection, Container } from '../common/components/parallax';
import styled from 'styled-components';

const divStyle = css`
  margin: 1.75rem;
  width: 100%;
  max-width: 48rem;
  h4: {
    color: red !important;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  text-align: center;
  color: ${props => props.theme.colors.primary};
`;

const ImageText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
`;

const ServicesIntro = styled.div`
  margin: 20px 20px 50px 20px;
  padding: 10px;
`;

export default ({ data }) => (
  <Layout>
    <Seo
      title={`Services ${data.site.siteMetadata.title}`}
      description={data.service.name}
    />
    <ImageContainer>
      <OverlayImage
        style={{ height: '50vh' }}
        fluid={data.banner.img.fluid}
        alt={data.banner.description}
      />
    </ImageContainer>
    <ServicesIntro>
      <ReactMarkdown
        source={data.service.intro.childMarkdownRemark.rawMarkdownBody}
        renderers={markdownRender}
      />
    </ServicesIntro>
    <SectionContainer>
      <div className={divStyle}>
        <ReactMarkdown
          source={data.service.bridal.childMarkdownRemark.rawMarkdownBody}
          renderers={markdownRender}
        />
      </div>
    </SectionContainer>
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={data.service.separator1.fluid.src}
      bgImageAlt={data.service.separator1.description}
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
    <SectionContainer>
      <div className={divStyle}>
        <ReactMarkdown
          source={
            data.service.specialEvents.childMarkdownRemark.rawMarkdownBody
          }
          renderers={markdownRender}
        />
      </div>
    </SectionContainer>
  </Layout>
);

export const dataQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    service: contentfulServices {
      name
      intro {
        childMarkdownRemark {
          rawMarkdownBody
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
        fluid {
          src
        }
      }
    }
    banner: contentfulImage(title: { eq: "ServicesBanner" }) {
      title
      img {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;
