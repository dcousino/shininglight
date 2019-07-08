import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import SectionContainer from '../../common/components/sectionContainer';

export default () => (
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
        }
      `}
      render={data => (
        <div className="flex flex-column justify-center items-center pa2 pv5">
          <h1 className="fw1 display db near-white f2 tc">
            {data.site.siteMetadata.homepageHeader}
          </h1>
          <p className="f4 serif mw7 tc lh-copy near-white">
            {data.site.siteMetadata.homepageAbout}
          </p>
          <Link
            to="/about"
            className="mt3 db no-underline ph5 pv3 sans-serif near-white bg-dark-gray ttu tracked b hover-bg-mid-gray"
          >
            About Amber Rose
          </Link>
        </div>
      )}
    />
  </SectionContainer>
);
