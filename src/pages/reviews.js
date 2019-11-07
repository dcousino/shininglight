import React from 'react';
import Layout from '../common/layouts';
import { graphql } from 'gatsby';
import Seo from '../common/seo';
import { css } from 'emotion';
import { Parallax } from 'react-parallax';
import SectionContainer from '../common/components/sectionContainer';
import breaks from 'remark-breaks';
import markdownRender from '../common/renders/markdownRender';
import ReactMarkdown from 'react-markdown';

import { Container } from '../common/components/parallax';
import styled from 'styled-components';
import { RatingSection, Stars } from '../common/components/rating';
import 'font-awesome/css/font-awesome.min.css';
const mediaQueries = `@media (min-width: 900px) {width: 70%;} @media (min-width: 1200px) {width: 60%;} @media (min-width: 1600px) {width: 50%;}`;
const divStyle = css`
  width: 100%;
  max-width: 48rem;
  padding: 1rem;
`;
const sortOrderNumber = (a, b) => {
  if (a.order < b.order) return -1;

  if (a.order > b.order) return 1;

  return 0;
};
const Rating = styled.div`
  margin-bottom: 1.75rem;
  font-size: 1.1rem;
  color: ${props => props.theme.colors.offwhite};
`;
const Ratings = styled.div`
  ${Rating}:last-child {
    margin-bottom: 0;
  }
`;

export default ({ data }) => (
  <Layout>
    <Seo title={data.reviewPage.title} description={data.reviewPage.title} />
    <Parallax
      bgImageSizes={data.reviewPage.banner.fluid.sizes}
      bgImage={data.reviewPage.banner.fluid.src}
      bgImageSrcSet={data.reviewPage.banner.fluid.srcSet}
      bgImageAlt={data.reviewPage.banner.description}
      bgImageStyle={{
        backgroundSize: 'contain' /* <------ */
      }}
      strength={100}
      renderLayer={() => (
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
      <Container />
    </Parallax>
    <Ratings>
      {data.reviews.nodes.map(review => {
        return (
          <Rating
            id={`${review.author}_${review.order}`}
            key={`${review.author}_${review.order}`}
          >
            <SectionContainer mediaQueries={mediaQueries}>
              <div className={divStyle}>
                <ReactMarkdown
                  source={review.reviewText.childMarkdownRemark.rawMarkdownBody}
                  renderers={markdownRender}
                  plugins={[breaks]}
                />
                <p>
                  <strong>{review.author}</strong>
                </p>
                <RatingSection>
                  <Stars width={review.rating}></Stars>
                </RatingSection>
              </div>
            </SectionContainer>
          </Rating>
        );
      })}
    </Ratings>
  </Layout>
);

export const dataQuery = graphql`
  query {
    reviewPage: contentfulReviewPage {
      title
      banner {
        title
        description
        fluid(maxWidth: 1920) {
          ...GatsbyContentfulFluid
        }
      }
    }
    reviews: allContentfulReview(sort: { fields: [order] }) {
      nodes {
        rating
        author
        reviewText {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
        order
      }
    }
  }
`;
