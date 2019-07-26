import React from 'react';
import Layout from '../common/layouts';
import { graphql } from 'gatsby';
import Seo from '../common/seo';

export default ({ props, data }) => {
  return (
    <Layout>
      <Seo
        title={`About ${data.site.siteMetadata.title}`}
        description={data.site.siteMetadata.title}
      />
      <div className="relative">
        <h1
          className="fw1 tc f2 display absolute dn dib-ns"
          style={{
            bottom: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          About {data.site.siteMetadata.title}
        </h1>
      </div>
    </Layout>
  );
};

export const dataQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
