import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Helmet>
        <title>
          {props.title.replace(/\b\w/g, letter => letter.toUpperCase()) +
            ' - ' +
            data.site.siteMetadata.title}
        </title>
        <meta name="description" content={props.description} />
        <meta
          name="google-site-verification"
          content="65p2XgBijamXSTsu9HESt85I4ajI9X7ax5DfPWg-Tf8"
        />
      </Helmet>
    )}
  />
);
