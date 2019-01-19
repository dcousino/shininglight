import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

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
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className="bg-main flex flex-column justify-center items-center pa2 pv5">
        {data.services.edges.map((svc, index) => {
          return (
            <div
              key={`service_${index}`}
              className="mw7 w-100 lh-copy serif pa2 flex flex-column justify-center f4"
              dangerouslySetInnerHTML={{ __html: svc.node.html }}
            />
          );
        })}
      </div>
    )}
  />
);
