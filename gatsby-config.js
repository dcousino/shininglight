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
  siteUrl: 'https://www.shininglightmua.com',
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
  'gatsby-plugin-advanced-sitemap',
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
        families: ['Cormorant', 'Sacramento']
      }
    }
  },
  {
    resolve: 'gatsby-plugin-html-attributes',
    options: {
      lang: 'en'
    }
  }
];

module.exports = client.getEntries().then(() => {
  return { siteMetadata, plugins };
});
