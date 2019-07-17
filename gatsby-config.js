const contentful = require('contentful');
require('dotenv').config();

const { ACCESS_TOKEN, SPACE_ID } = process.env;

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});

const siteMetadata = {
  navbarLinks: [
    { to: '/services', name: 'Services' },
    { to: '/portfolio', name: 'Porfolio' },
    { to: '/contact', name: 'Contact' }
  ],
  title: 'Shining Light',
  description: 'Tyra is a fast, feminine, and chic Gatsby.js theme.',
  siteUrl: 'https://shininglightmua.com',
  homepageHeader: 'Beauty with Purpose',
  homepageAbout:
    'Tyra is a modern, a and feminine Gatsby.js theme. Easily create a beautiful and fast blog and draw attention to your stellar content.',
  mailChimpUrl: 'https://mailchimp.com',
  mailChimpToken: 'MAILCHIMP TOKEN HERE',
  youtube: '', // YOUR YOUTUBE PROFILE HERE
  twitter: 'asfsad', // YOUR GITHUB PROFILE HERE
  pinterest: '', // YOUR PINTEREST PROFILE HERE
  facebook: 'https://shininglightmua.com', // YOUR FACEBOOK PROFILE HERE
  instagram: 'https://shininglightmua.com' // YOUR TWITTER PROFILE HERE
};

const plugins = [
  'gatsby-plugin-sitemap',
  'gatsby-plugin-react-helmet',
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  {
    resolve: 'gatsby-plugin-feed',
    options: {
      query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
      feeds: [
        {
          serialize: ({ query: { site, allMarkdownRemark } }) => {
            return allMarkdownRemark.edges.map(edge => {
              return Object.assign({}, edge.node.frontmatter, {
                description: edge.node.excerpt,
                date: edge.node.frontmatter.date,
                url: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                guid: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                custom_elements: [{ 'content:encoded': edge.node.html }]
              });
            });
          },
          query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
                filter: {frontmatter: {type: {eq: "post"}}}
              ) {
                edges {
                  node {
                    excerpt
                    html
                    frontmatter {
                      slug
                      title
                      date
                    }
                  }
                }
              }
            }
          `,
          output: '/rss.xml',
          title: 'Gatsby RSS Feed'
        }
      ]
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/content`,
      name: 'content'
    }
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
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: '',
      head: false,
      anonymize: true,
      respectDNT: true,
      exclude: ['/success'],
      cookieDomain: 'shininglightmua.com'
    }
  }
];

module.exports = client.getEntries().then(() => {
  return {
    plugins,
    siteMetadata
  };
});
