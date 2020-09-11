import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Image } from '../../common/components/imageComponents';
import Fade from 'react-reveal/Fade';
import SectionContainer from '../../common/components/sectionContainer';
import ReactMarkdown from 'react-markdown';
import markdownRender from '../../common/renders/markdownRender';
import { css } from 'emotion';

const divStyle = css`
  margin: 2rem;
  width: 100%;
  max-width: 48rem;
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
      render={(data) => {
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
