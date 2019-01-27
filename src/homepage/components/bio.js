import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Reveal from 'react-reveal/Reveal';
export default () => (
  <div className="bg-main pv5 pa2 flex flex-wrap mw9 center justify-around items-center">
    <StaticQuery
      query={graphql`
        query {
          image: file(relativePath: { eq: "img/amber.jpg" }) {
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
          <Img
            fluid={data.image.childImageSharp.fluid}
            alt="The Author"
            className="w-100 mw6"
          />
          <div className="w-100 pa2 mw6 mv4">
            <span className="db f2 rochester dark-gray">
              {data.copy.frontmatter.title}
            </span>
            <Reveal effect="fadeInUp">
              <div
                className="lh-copy f4 serif mt4"
                dangerouslySetInnerHTML={{ __html: data.copy.html }}
              />
            </Reveal>
          </div>
        </React.Fragment>
      )}
    />
  </div>
);
