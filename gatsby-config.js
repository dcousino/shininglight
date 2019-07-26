const contentful = require('contentful');
require('dotenv').config();
const manifestConfig = require('./manifest.config');
const { ACCESS_TOKEN, SPACE_ID } = process.env;

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});

const siteMetadata = {
  navbarLinks: [
    { to: '/about', name: 'About' },
    { to: '/services', name: 'Services' },
    { to: '/portfolio', name: 'Portfolio' },
    { to: '/contact', name: 'Contact' }
  ],
  title: 'Shining Light',
  description: 'Shining Light Beauty Designs by Amber Rose',
  siteUrl: 'https://shininglightmua.com',
  homepageHeader: 'Beauty with Purpose',
  homepageAbout: 'Shining Light Beauty Designs by Amber Rose',
  facebook:
    'https://www.facebook.com/Shining-Light-Beauty-Design-by-Amber-Rose-408992882872777/',
  instagram: 'https://www.instagram.com/shininglight_mua/'
};

const plugins = [
  'gatsby-plugin-styled-components',
  'gatsby-plugin-react-helmet',
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  {
    resolve: 'gatsby-plugin-manifest',
    options: manifestConfig
  },
  {
    resolve: 'gatsby-source-contentful',
    options: {
      spaceId: SPACE_ID,
      accessToken: ACCESS_TOKEN
    }
  },
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        'gatsby-remark-copy-linked-files',
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 1400
          }
        }
      ]
    }
  },
  {
    resolve: 'gatsby-plugin-web-font-loader',
    options: {
      google: {
        families: ['Cormorant', 'Rochester', 'Sacramento']
      }
    }
  },
  {
    resolve: 'gatsby-plugin-sitemap',
    options: {
      query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage(
            filter: {
              path: { regex: "/^(?!/404/|/404.html|/dev-404-page/)/" }
            }
          ) {
            edges {
              node {
                path
              }
            }
          }
        }
      `,
      output: '/sitemap.xml',
      serialize: ({ site, allSitePage }) =>
        allSitePage.edges.map(edge => ({
          url: site.siteMetadata.siteUrl + edge.node.path,
          changefreq: 'daily',
          priority: 0.7
        }))
    }
  }
];

module.exports = client.getEntries().then(() => {
  return { siteMetadata, plugins };
});
