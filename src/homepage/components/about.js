import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Reveal from 'react-reveal/Reveal';
import Section from '../../common/sections/section';

export default () => (
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
      <Section.Container id="about">
        <Section.Header name="About me" icon="" label="about" />
        <div className="flex flex-column justify-center items-center pa2 pv5">
          <h1 className="fw1 rochester db f2 tc">
            {data.site.siteMetadata.homepageHeader}
          </h1>
          <Reveal effect="fadeInUp">
            <p className="f4 serif mw7 tc lh-copy">
              {data.site.siteMetadata.homepageAbout}
            </p>
          </Reveal>
          <Link
            to="/about"
            className="mt3 db no-underline ph5 pv3 sans-serif lite-btn ttu tracked b hover-bg-mid-gray"
          >
            About Amber Rose
          </Link>
        </div>
      </Section.Container>
    )}
  />
);
