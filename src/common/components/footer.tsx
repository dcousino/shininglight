import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import {
  Footer,
  InnerFooter,
  FooterComponentContainer,
  FooterTitle,
  SocialLinks,
  SocialLink,
} from "./footerComponents";
import { FooterQuery } from "../../types/queries";

const FooterSection = () => {
  const data = useStaticQuery<FooterQuery>(graphql`
    query Footer {
      site {
        siteMetadata {
          siteTitle: title
          facebook
          instagram
        }
      }
    }
  `);
  return (
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
    </Footer>
  );
};

export default FooterSection;
