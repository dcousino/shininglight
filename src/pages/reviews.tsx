import React from "react";
import Layout from "../common/layouts";
import { PageProps, graphql } from "gatsby";
import Seo from "../common/seo";
import { css } from "@emotion/css";
import { Parallax } from "react-parallax";
import SectionContainer from "../common/components/sectionContainer";
import breaks from "remark-breaks";
import markdownRender from "../common/renders/markdownRender";
import ReactMarkdown from "react-markdown";
import { Container } from "../common/components/parallax";
import styled from "styled-components";
import { RatingSection, Stars } from "../common/components/rating";
import "font-awesome/css/font-awesome.min.css";
import { ReviewsQuery } from "../types/queries";
import { GatsbyImage } from "gatsby-plugin-image";

const mediaQueries = `@media (min-width: 900px) {width: 70%;} @media (min-width: 1200px) {width: 60%;} @media (min-width: 1600px) {width: 50%;}`;
const divStyle = css`
  width: 100%;
  max-width: 48rem;
  padding: 1rem;
`;

const Rating = styled.div`
  margin-bottom: 1.75rem;
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.offwhite};
`;
const Ratings = styled.div`
  ${Rating}:last-child {
    margin-bottom: 0;
  }
`;

const Reviews = ({ data }: PageProps<ReviewsQuery>) => (
  <Layout>
    <Seo title={data.reviewPage.title} description={data.reviewPage.title} />
    <GatsbyImage
      style={{ height: "500px" }}
      objectPosition="center top"
      image={data.reviewPage.banner.gatsbyImageData}
      alt="Services Banner"
    />
    <Ratings>
      {data.reviews.nodes.map((review) => {
        return (
          <Rating
            id={`${review.author}_${review.order}`}
            key={`${review.author}_${review.order}`}
          >
            <SectionContainer mediaQueries={mediaQueries}>
              <div className={divStyle}>
                <ReactMarkdown
                  children={
                    review.reviewText?.childMarkdownRemark?.rawMarkdownBody ||
                    ""
                  }
                  components={markdownRender}
                  remarkPlugins={[breaks]}
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

export default Reviews;
export const query = graphql`
  query Reviews {
    reviewPage: contentfulReviewPage {
      title
      banner {
        description
        gatsbyImageData(width: 1920, placeholder: BLURRED)
      }
    }
    reviews: allContentfulReview(sort: { order: ASC }) {
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