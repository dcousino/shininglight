import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import SectionContainer from "../../common/components/sectionContainer";
import ReactMarkdown from "react-markdown";
import markdownRender from "../../common/renders/markdownRender";
import styled from "styled-components";
import breaks from "remark-breaks";
import { Button } from "../../common/components/links";
import { AboutQuery } from "../../types/queries";

const Section = styled.div`
  width: 100%;
`;

const About = () => {
  const data = useStaticQuery<AboutQuery>(graphql`
    query About {
      contentfulAbout {
        mainContent {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
      }
    }
  `);
  const { mainContent } = data.contentfulAbout;
  return (
    <SectionContainer>
      <Section>
        <ReactMarkdown
          children={mainContent.childMarkdownRemark.rawMarkdownBody}
          components={markdownRender}
          remarkPlugins={[breaks]}
        />
        <Button to="/contact">Contact Me</Button>
      </Section>
    </SectionContainer>
  );
};

export default About;
