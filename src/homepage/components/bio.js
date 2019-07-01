import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import 'tachyons';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

const Image = styled(Img)`
  min-width: 450px;
  @media (max-width: 450px) {
    min-width: 400px;
  }
  @media (max-width: 400px) {
    min-width: 350px;
  }
`;
const OnSiteWrapper = styled.div`
  background: ${props => props.theme.colors.primary};
`;
export default () => (
  <OnSiteWrapper className="pv5 pa2 flex flex-wrap mw9 center justify-around items-center">
    <StaticQuery
      query={graphql`
        query {
          image: file(relativePath: { eq: "img/onsite-service.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1080) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          copy: markdownRemark(frontmatter: { name: { eq: "homepage__bio" } }) {
            html
            frontmatter {
              title
            }
          }
        }
      `}
      render={data => (
        <React.Fragment>
          <Fade left>
            <Image
              fluid={data.image.childImageSharp.fluid}
              alt="The Author"
              className="w-100 mw6"
            />
          </Fade>

          <Fade right>
            <div className="w-100 pa2 mw6 mv4">
              <span className="db f2 display near-white">
                {data.copy.frontmatter.title}
              </span>
              <div
                className="lh-copy f5 serif mt4 white"
                dangerouslySetInnerHTML={{ __html: data.copy.html }}
              />
            </div>
          </Fade>
        </React.Fragment>
      )}
    />
  </OnSiteWrapper>
);
