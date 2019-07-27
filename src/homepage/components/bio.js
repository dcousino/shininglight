import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import SectionContainer from '../../common/components/sectionContainer';
import ReactMarkdown from 'react-markdown';
import markdownRender from '../../common/renders/markdownRender';
import { css } from 'emotion';

const divStyle = css`
  margin: 2rem;
  width: 100%;
  max-width: 48rem;
`;
const Image = styled(Img)`
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  margin: 0 2px;
  min-width: 400px;
  @media (max-width: 450px) {
    min-width: 320px;
  }
  @media (max-width: 400px) {
    min-width: 250px;
  }
`;

export default () => (
  <SectionContainer>
    <StaticQuery
      query={graphql`
        query {
          image: contentfulAsset(title: { eq: "onsite-beauty-design" }) {
            fluid(maxWidth: 800) {
              ...GatsbyContentfulFluid
            }
          }
          contentfulAbout {
            onsiteBeautyDesign {
              childMarkdownRemark {
                rawMarkdownBody
              }
            }
          }
        }
      `}
      render={data => {
        const { onsiteBeautyDesign } = data.contentfulAbout;

        return (
          <React.Fragment>
            <Fade left>
              <Image fluid={data.image.fluid} alt="The Author" className="" />
            </Fade>
            <Fade right>
              <div className={divStyle}>
                <ReactMarkdown
                  source={
                    onsiteBeautyDesign.childMarkdownRemark.rawMarkdownBody
                  }
                  renderers={markdownRender}
                />
              </div>
            </Fade>
          </React.Fragment>
        );
      }}
    />
  </SectionContainer>
);
