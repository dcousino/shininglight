import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import {
  FaPinterestP,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram
} from 'react-icons/fa';
import 'tachyons';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            siteTitle: title
            mailChimpUrl
            pinterest
            facebook
            twitter
            youtube
            instagram
          }
        }
      }
    `}
    render={data => (
      <footer className="pa2 bg-dark-gray near-white pv2">
        <div className="flex flex-wrap justify-around w-100 mw9 center mb2">
          <div className="w-100 mw5 mt4 mb1">
            <span className="display f2">
              {data.site.siteMetadata.siteTitle}
            </span>
            <hr />
            <div className="w-100 flex justify-around items-center pv2">
              {data.site.siteMetadata.facebook && (
                <a
                  className="near-white"
                  href={data.site.siteMetadata.facebook}
                >
                  <FaFacebookF />
                </a>
              )}

              {data.site.siteMetadata.youtube && (
                <a className="near-white" href={data.site.siteMetadata.youtube}>
                  <FaYoutube />
                </a>
              )}

              {data.site.siteMetadata.instagram && (
                <a
                  className="near-white"
                  href={data.site.siteMetadata.instagram}
                >
                  <FaInstagram />
                </a>
              )}

              {data.site.siteMetadata.pinterest && (
                <a
                  className="near-white"
                  href={data.site.siteMetadata.pinterest}
                >
                  <FaPinterestP />
                </a>
              )}

              {data.site.siteMetadata.twitter && (
                <a className="near-white" href={data.site.siteMetadata.twitter}>
                  <FaTwitter />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="w-100 mw9 center silver mb1">
          <div className="w-100 bb b--mid-gray mv3" />
          <div className="flex w-100 mw6 items-center justify-center justify-start-ns">
            <a
              href="/sitemap.xml"
              className="silver sans-serif f5 tracked pv1 db mh1"
            >
              SITEMAP
            </a>
          </div>
        </div>
        <div className="w-100 mw9 silver center sans-serif f6" />
      </footer>
    )}
  />
);
