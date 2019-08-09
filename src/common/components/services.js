import { graphql, Link, StaticQuery } from 'gatsby';
import React from 'react';
import SectionContainer from './sectionContainer';
import ReactMarkdown from 'react-markdown';
import markdownRender from '../renders/markdownRender';
import styled from 'styled-components';

const mediaQueries = `@media (min-width: 1200px) {width: 70%;} @media (min-width: 1600px) {width: 50%;}`;

const Section = styled.div`
  width: 100%;
`;
const ContactLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  margin: 0.5rem auto 0 auto;
  padding: 1rem 4rem;
  background-color: #333;
  color: #f4f4f4;
  letter-spacing: 0.1em;
  font-weight: bold;
  display: block;
  font-family: 'Cormorant', sans-serif;
  width: 40%;
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;
export default () => {
  return (
    <SectionContainer mediaQueries={mediaQueries}>
      <StaticQuery
        query={graphql`
          query {
            contentfulAbout {
              mainContent {
                childMarkdownRemark {
                  rawMarkdownBody
                }
              }
            }
          }
        `}
        render={data => {
          const { mainContent } = data.contentfulAbout;
          return (
            <Section>
              <ReactMarkdown
                source={mainContent.childMarkdownRemark.rawMarkdownBody}
                renderers={markdownRender}
              />
              <ContactLink to="/contact">Contact Me</ContactLink>
            </Section>
          );
        }}
      />
    </SectionContainer>
  );
};
