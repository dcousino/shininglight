import React from 'react';
import { Link } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby';
// import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';
import Section from '../../common/sections/section';
import styled from 'styled-components';

const Title = styled.h1`
  font-family: 'Rochester', cursive;
  transition: all 0.4s ease-in-out;
`;
export default props => (
  <StaticQuery
    query={graphql`
      query HeroQuery {
        contentfulHero {
          title
          description
          to
          backgroundImage {
            fluid(maxWidth: 1920) {
              src
            }
          }
        }
      }
    `}
    render={data => {
      const { title, description, to, backgroundImage } = data.contentfulHero;
      return (
        <Section.Container id="home" img={backgroundImage.fluid.src}>
          <div>
            <Fade down>
              <Title>{title}</Title>
            </Fade>
            <Fade up>
              <p className="serif mw6 tc f5 dn dib-l mb4 db">{description}</p>
            </Fade>
            <Link
              className="db pv3 ph5 tracked ttu b lite-btn sans-serif no-underline hover-gray"
              to={to}
            >
              Read More
            </Link>
          </div>
        </Section.Container>
      );
    }}
  />
);
