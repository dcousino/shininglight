require("dotenv").config();
const manifestConfig = require("./manifest.config");
const { ACCESS_TOKEN, SPACE_ID } = process.env;

let contentfulConfig = {
  spaceId: SPACE_ID,
  accessToken: ACCESS_TOKEN,
};

const siteMetadata = {
  navbarLinks: [
    { to: "/about", name: "About" },
    { to: "/services", name: "Services" },
    { to: "/portfolio", name: "Portfolio" },
    { to: "/contact", name: "Contact" },
    { to: "/reviews", name: "Applause" },
  ],
  title: "Shining Light",
  description:
    "Shining Light Beauty Design by Amber Rose, serving the greater Seattle area",
  siteUrl: "https://www.shininglightmua.com",
  facebook:
    "https://www.facebook.com/Shining-Light-Beauty-Design-by-Amber-Rose-408992882872777/",
  instagram: "https://www.instagram.com/shininglight_mua/",
};

const plugins = [
  "gatsby-plugin-styled-components",
  "gatsby-transformer-sharp",
  "gatsby-plugin-sharp",
  "gatsby-plugin-offline",
  "gatsby-plugin-image",
  {
    resolve: "gatsby-plugin-manifest",
    options: manifestConfig,
  },
  {
    resolve: "gatsby-source-contentful",
    options: {
      downloadLocal: true,
      spaceId: SPACE_ID,
      accessToken: ACCESS_TOKEN,
      host: process.env.CONTENTFUL_HOST,
    },
  },
  {
    resolve: "gatsby-transformer-remark",
    options: {
      plugins: [
        "gatsby-remark-copy-linked-files",
        {
          resolve: "gatsby-remark-images",
          options: {
            maxWidth: 1400,
          },
        },
      ],
    },
  },
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [`Cormorant`, `Sacramento`],
      display: "swap",
    },
  },
  {
    resolve: "gatsby-plugin-html-attributes",
    options: {
      lang: "en",
    },
  },
];

module.exports = { siteMetadata, plugins };
