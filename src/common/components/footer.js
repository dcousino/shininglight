import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import { FaPinterestP, FaFacebookF, FaInstagram } from 'react-icons/fa';
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
            instagram
          }
        }
      }
    `}
    render={data => (
      <footer className="pa2 bg-dark-gray near-white pv5">
        <div className="flex flex-wrap justify-around w-100 mw9 center mb5">
          <div className="w-100 mw5 mb4">
            <span className="display f2">
              {data.site.siteMetadata.siteTitle}
            </span>
            <hr />
            <div className="w-100 flex justify-around items-center pv2">
              <a
                aria-label="facebook"
                className="near-white"
                href={data.site.siteMetadata.facebook}
              >
                <FaFacebookF />
              </a>
              <a
                aria-label="pinterest"
                className="near-white"
                href={data.site.siteMetadata.pinterest}
              >
                <FaPinterestP />
              </a>
              <a
                aria-label="instagram"
                className="near-white"
                href={data.site.siteMetadata.instagram}
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="flex flex-column">
            <span className="near-white sans-serif f5 tracked mb3 db">
              WRITING BY {data.site.siteMetadata.siteTitle}
            </span>
            <Link
              aria-label="blog"
              to="/blog"
              className="near-white sans-serif f5 tracked pv1 db"
            >
              ALL POSTS
            </Link>
          </div>
          <div className="flex flex-column">
            <span className="near-white sans-serif f5 tracked mb3 db">
              MORE ON {data.site.siteMetadata.siteTitle}
            </span>
            <Link
              aria-label="about"
              to="/about"
              className="near-white sans-serif f5 tracked pv1 db"
            >
              ABOUT US
            </Link>
            <a
              aria-label="mailchimp"
              href={data.site.siteMetadata.mailChimpUrl}
              className="near-white sans-serif f5 tracked pv1 db"
            >
              NEWS LETTER
            </a>
          </div>
        </div>
        <div className="w-100 mw9 center silver mb3">
          <div className="w-100 bb b--mid-gray mv3" />
          <div className="flex w-100 mw6 items-center justify-center justify-start-ns">
            <a
              aria-label="sitemap"
              href="/sitemap.xml"
              className="silver sans-serif f5 tracked pv1 db mh1"
            >
              SITEMAP
            </a>
          </div>
        </div>
      </footer>
    )}
  />
);
