module.exports = {
  siteMetadata: {
    navbarLinks: [
      { to: '/makeup', name: 'Makeup' },
      { to: '/hair', name: 'Hair' }
    ],
    title: 'Shining Light',
    location: 'Maryland',
    subTitle: 'By Amber Rose',
    navLogo: 'static/logo.png',
    themeColor: '#aaf0e9',
    googleVerification: 'jjLeJQ6EIkucjV5K77jmoARg9uwNhGk00a91V0PdO2U',
    description:
      'Shining Light makeup artist, serving the Maryland and Northern Virgina/DMA area for Wedding, Mitzvahs, Proms, Bridal Trials, and other Special Events. Specializing in hair, lashes, blowouts, airbrush, updos, photoshoots, boudoir, and professional certified, tailored beauty consultations.',
    siteUrl: 'https://www.shininglightmua.com',
    homepageHeader: 'Welcome Shining Light by Amber Rose',
    homepageAbout:
      'Helping your inner light shine brighter by enhancing your natural beauty.',
    mailChimpUrl:
      'https://shininglightmua.us20.list-manage.com/subscribe/post?u=561b4c6111eec057d5afc6621&amp;id=01d7ca4e89',
    mailChimpToken: 'b_561b4c6111eec057d5afc6621_01d7ca4e89',
    pinterest: '', // YOUR PINTEREST PROFILE HERE
    facebook:
      'https://www.facebook.com/pages/category/Beauty--Cosmetic---Personal-Care/Shining-Light-Makeup-Artistry-by-Amber-Rose-408992882872777/',
    twitter: '', // YOUR TWITTER PROFILE HERE.
    instagram: 'https://www.instagram.com/shininglight_mua/'
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'ShiningLight',
        short_name: 'ShiningLight',
        start_url: '/',
        background_color: '#aaf0e9',
        theme_color: '#aaf0e9',
        display: 'minimal-ui',
        icon: 'static/logo.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
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
          families: ['Cormorant', 'Rochester']
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
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `shininglight_mua`
      }
    }
  ]
};
