import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import {
  Footer,
  InnerFooter,
  FooterComponentContainer,
  FooterTitle,
  SocialLinks,
  SocialLink,
  SiteMap,
  SiteMapContainer,
  SiteMapDivider,
  SiteMapLink
} from './footerComponents';
export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            siteTitle: title
            facebook
            instagram
          }
        }
      }
    `}
    render={data => (
      <Footer>
        <InnerFooter>
          <FooterComponentContainer>
            <FooterTitle>{data.site.siteMetadata.siteTitle}</FooterTitle>
            <hr />
            <SocialLinks>
              {data.site.siteMetadata.facebook && (
                <SocialLink
                  aria-label="facebook"
                  href={data.site.siteMetadata.facebook}
                >
                  <FaFacebookF />
                </SocialLink>
              )}
              {data.site.siteMetadata.instagram && (
                <SocialLink
                  aria-label="instagram"
                  href={data.site.siteMetadata.instagram}
                >
                  <FaInstagram />
                </SocialLink>
              )}
            </SocialLinks>
          </FooterComponentContainer>
        </InnerFooter>
        <SiteMapContainer>
          <SiteMapDivider />
          <SiteMap>
            <SiteMapLink to="/sitemap-pages.xml">SITEMAP</SiteMapLink>
          </SiteMap>
        </SiteMapContainer>
      </Footer>
    )}
  />
);
