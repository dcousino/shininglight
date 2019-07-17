import { graphql, Link, StaticQuery } from 'gatsby';
import React from 'react';
import SectionContainer from '../../common/components/sectionContainer';
import ReactMarkdown from 'react-markdown';
import markdownRender from '../../common/renders/markdownRender';
export default () => {
  return (
    <SectionContainer>
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                homepageHeader
                homepageAbout
              }
            }
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
            <div className="flex flex-column justify-center items-center pa2 pv1">
              <ReactMarkdown
                className=""
                source={mainContent.childMarkdownRemark.rawMarkdownBody}
                renderers={markdownRender}
              />
              {/* <p className="f5 serif mw7 mt1 lh-copy near-gray">
              {data.site.siteMetadata.homepageAbout}
            </p> */}
              <Link
                to="/contact"
                className="mt2 db no-underline ph5 pv3 sans-serif near-white bg-dark-gray ttu tracked b hover-bg-mid-gray"
              >
                Contact Me
              </Link>
            </div>
          );
        }}
      />
    </SectionContainer>
  );
};
