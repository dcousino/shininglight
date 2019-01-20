import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
export default () => (
  <StaticQuery
    query={graphql`
      query {
        services: allMarkdownRemark(
          filter: { frontmatter: { type: { eq: "service" } } }
        ) {
          edges {
            node {
              html
              frontmatter {
                title
                image {
                  childImageSharp {
                    fluid(maxWidth: 400) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className="bg-main center pt3">
        <h1 className="rochester db f1 tc">Services</h1>

        <div className="cf ph2-ns">
          {data.services.edges.map((svc, index) => {
            return (
              // <div
              //   key={`service_${index}`}
              //   className="mw7 w-100 lh-copy serif pa2 flex flex-column justify-center f4"
              //   dangerouslySetInnerHTML={{ __html: svc.node.html }}
              // />
              <div key={`service_${index}`} className="fl w-100 w-third-ns pa2">
                <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                  <div className="tc">
                    <Img
                      className="br-100 h4 w4 dib ba b--black-05 pa2"
                      fluid={svc.node.frontmatter.image.childImageSharp.fluid}
                      alt={svc.node.frontmatter.title}
                    />

                    <h1 className="f3 serif mb2">
                      {svc.node.frontmatter.title}
                    </h1>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    )}
  />
);
