import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import SectionContainer from '../../common/components/sectionContainer';
import ReactMarkdown from 'react-markdown';
import markdownRender from '../../common/renders/markdownRender';
import styled from 'styled-components';
import breaks from 'remark-breaks';
import { Button } from '../../common/components/links';

const Section = styled.div`
  width: 100%;
`;

export default () => {
  return (
    <SectionContainer>
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
                plugins={[breaks]}
              />
              <Button to="/contact">Contact Me</Button>
            </Section>
          );
        }}
      />
    </SectionContainer>
  );
};
