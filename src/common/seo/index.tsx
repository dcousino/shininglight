import React from "react";
import Helmet from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
import { SeoQuery } from "../../types/queries";

const Seo = (props: { title: string; description: string }) => {
  const data = useStaticQuery<SeoQuery>(graphql`
    query Seo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Helmet>
      <title>
        {props.title.replace(/\b\w/g, (letter: string) =>
          letter.toUpperCase()
        ) +
          " - " +
          data.site.siteMetadata.title}
      </title>
      <meta name="description" content={props.description} />
      <meta
        name="google-site-verification"
        content="65p2XgBijamXSTsu9HESt85I4ajI9X7ax5DfPWg-Tf8"
      />
    </Helmet>
  );
};

export default Seo;
