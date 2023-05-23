import React from "react";
import Layout from "../common/layouts";
import Seo from "../common/seo";
import styled from "styled-components";
import { Button } from "../common/components/links";
import SectionContainer from "../common/components/sectionContainer";
import BannerImage from "../common/components/bannerImage";
import { graphql, useStaticQuery } from "gatsby";
import { FourOohFourQuery } from "../types/queries";
const mediaQueries = `@media (min-width: 900px) {width: 70%;} @media (min-width: 1200px) {width: 60%;} @media (min-width: 1600px) {width: 50%;}`;

const Title = styled.h1`
  display: block;
  font-weight: 100;
  margin: 0 auto;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.offwhite};
`;

const Body = styled.p`
  max-width: 54rem;
  width: 100%;
  font-family: serif;
  text-align: center;
`;

const FourOhhFour = () => {
  const data = useStaticQuery<FourOohFourQuery>(
    graphql`
      query FourOohFourQuery {
        site {
          siteMetadata {
            description
          }
        }
        about: contentfulAboutPage {
          bannerImage {
            description
            title
            url
          }
        }
      }
    `
  );

  return (
    <Layout>
      <Seo title={`404`} description={data.site.siteMetadata.description} />
      <BannerImage img={data.about.bannerImage.url}></BannerImage>
      <SectionContainer mediaQueries={mediaQueries}>
        <div style={{ width: "100%", textAlign: "center" }}>
          <Title>Page Not Found</Title>

          <Body> We couldn&#39;t find what you were looking for.</Body>
          <Button to="/">Go to homepage</Button>
        </div>
      </SectionContainer>
    </Layout>
  );
};

export default FourOhhFour;
