import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Image } from "../../common/components/imageComponents";
import { Fade } from "react-awesome-reveal";
import SectionContainer from "../../common/components/sectionContainer";
import ReactMarkdown from "react-markdown";
import markdownRender from "../../common/renders/markdownRender";
import { css } from "@emotion/css";
import { BioQuery } from "../../types/queries";

const divStyle = css`
  margin: 2rem;
  width: 100%;
  max-width: 48rem;
`;

const Bio = () => {
  const data = useStaticQuery<BioQuery>(
    graphql`
      query Bio {
        image: contentfulAsset(title: { eq: "onsite-beauty-design" }) {
          gatsbyImageData(width: 325)
        }
        contentfulAbout {
          onsiteBeautyDesign {
            childMarkdownRemark {
              rawMarkdownBody
            }
          }
        }
      }
    `
  );

  const markdown =
    data.contentfulAbout.onsiteBeautyDesign.childMarkdownRemark.rawMarkdownBody;

  return (
    <SectionContainer>
      <React.Fragment>
        <Fade style={{ display: "flex" }} triggerOnce direction="left">
          <Image
            image={data.image.gatsbyImageData}
            alt="The Author"
            className=""
          />
        </Fade>
        <Fade style={{ display: "flex" }} triggerOnce direction="right">
          <div className={divStyle}>
            <ReactMarkdown children={markdown} components={markdownRender} />
          </div>
        </Fade>
      </React.Fragment>
    </SectionContainer>
  );
};

export default Bio;
