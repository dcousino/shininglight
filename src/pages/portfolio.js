import React from 'react';
import Layout from '../common/layouts';
import { graphql } from 'gatsby';
import Seo from '../common/seo';
import { Parallax } from 'react-parallax';
import CarouselSection from '../common/components/carouselSection';
import styled from 'styled-components';
import { device } from '../../device';
import { InsideSection, Container } from '../common/components/parallax';

const CarouselWrapper = styled.div`
  max-width: 70%;
  margin: 0 auto;
  padding: 30px 0;

  @media ${device.tablet} {
    max-width: 95%;
  }
`;

export default ({ data }) => {
  //   const photos = data.makeup.edges.map(({ node }) =>
  //     node.carouselImages.map(x => ({
  //       sizes: x.fluid.sizes,
  //       caption: x.description,
  //       src: x.fluid.src,
  //       srcSet: x.fluid.srcSet,
  //       height: 1,
  //       width: 1
  //     }))
  //   );

  //   console.log(photos[0]);

  return (
    <Layout>
      <Seo
        title={`Portfolio ${data.site.siteMetadata.title}`}
        description={data.site.siteMetadata.title}
      />
      <div
        style={{
          backgroundColor: '#fff0ed'
        }}
      >
        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={data.banner.childImageSharp.fluid.src}
          bgImageAlt={data.banner.name}
          strength={100}
          renderLayer={percentage => (
            <div>
              <div
                style={{
                  position: 'absolute',
                  background: `hsla(0, 100%, 94%, 0.2)`,
                  width: '100%',
                  height: '100%'
                }}
              />
            </div>
          )}
        >
          <Container>
            <InsideSection>Makeup & Hair</InsideSection>
          </Container>
        </Parallax>
        {/* <Gallery photos={photos[0]} /> */}
        <CarouselWrapper>
          <CarouselSection bucket={'makeup'} />
        </CarouselWrapper>

        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={data.banner.childImageSharp.fluid.src}
          bgImageAlt={data.banner.name}
          strength={100}
          renderLayer={percentage => (
            <div>
              <div
                style={{
                  position: 'absolute',
                  background: `hsla(0, 100%, 94%, 0.2)`,
                  width: '100%',
                  height: '100%'
                }}
              />
            </div>
          )}
        >
          <Container>
            <InsideSection>Behind the Scenes</InsideSection>
          </Container>
        </Parallax>
        <CarouselWrapper>
          <CarouselSection bucket={'bts'} />
        </CarouselWrapper>
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
    makeup: allContentfulCarouselMedia(filter: { title: { eq: "Makeup" } }) {
      edges {
        node {
          title
          carouselImages {
            id
            title
            fluid(maxWidth: 1280) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    banner: file(relativePath: { eq: "img/makeup.jpg" }) {
      name
      childImageSharp {
        fluid(maxHeight: 1080, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
