import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import 'tachyons';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

const Image = styled(Img)`
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  min-width: 450px;
  @media (max-width: 450px) {
    min-width: 320px;
  }
  @media (max-width: 400px) {
    min-width: 250px;
  }
`;
const OnSiteWrapper = styled.div`
  z-index: 999;
  position: relative;
  background: ${props => props.theme.colors.primary};
  width: 90%;
  border-radius: 6px;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  margin: -20px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0.5rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
  align-items: center;
`;
export default () => (
  <OnSiteWrapper>
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
              className=""
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
