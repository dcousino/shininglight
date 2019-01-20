import React from 'react';
import Layout from '../common/layouts';
import Seo from '../common/seo';
import { graphql } from 'gatsby';
export default ({ _, data }) => (
  <Layout>
    <Seo
      title={`About ${data.site.siteMetadata.title}`}
      description="Page not found"
    />
    <div className="tc">
      <h1>Page Not Found</h1>
    </div>
  </Layout>
);
export const dataQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
