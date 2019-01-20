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
            themeColor
            location
            googleVerification
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
          content={data.site.siteMetadata.googleVerification}
        />
        <meta name="theme-color" content={data.site.siteMetadata.themeColor} />
        <meta name="location" content={data.site.siteMetadata.location} />
        <meta name="robots" content="index,follow" />
      </Helmet>
    )}
  />
);
