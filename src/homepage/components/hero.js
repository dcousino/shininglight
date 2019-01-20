import React from 'react';
import { Link } from 'gatsby';
import '../../common/styles/custom.tachyons.css';
import 'tachyons';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default props => (
  <StaticQuery
    query={graphql`
      query {
        molly: file(relativePath: { eq: "img/molly.webp" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        becca: file(relativePath: { eq: "img/becca.webp" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bride3: file(relativePath: { eq: "img/bride3.webp" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <div className="flex justify-around outline">
          <div className="w-25 ml2 mr1">
            <Img
              className="img"
              fluid={data.molly.childImageSharp.fluid}
              alt="molly"
            />
          </div>
          <div className="w-25 mh1">
            <Img
              className="img"
              fluid={data.becca.childImageSharp.fluid}
              alt="becca"
            />
          </div>
          <div className="w-25 mh1">
            <Img
              className="img"
              fluid={data.bride3.childImageSharp.fluid}
              alt="bride3"
            />
          </div>
          <div className="w-25 mh1">
            <Img
              className="img"
              fluid={data.bride3.childImageSharp.fluid}
              alt="bride3"
            />
          </div>
        </div>
        <div className="h-auto bg-near-white mw9 w-100 flex flex-column items-center justify-center pv5 ph2 center">
          <span className="fw1 rochester dark-gray db tc w-100 mw7 f3 f2-ns">
            {props.title}
          </span>
          <p className="serif mw6 tc f5 dn dib-l mb4 db">{props.description}</p>
          <Link
            className="db pv3 ph5 tracked ttu b lite-btn sans-serif no-underline hover-gray"
            to={props.to}
          >
            Read More
          </Link>
        </div>
      </React.Fragment>
    )}
  />
);
