module.exports = {
  siteMetadata: {
    navbarLinks: [
      { to: '/makeup', name: 'Makeup' },
      { to: '/hair', name: 'Hair' }
      // { to: '/blog', name: 'blog' }
    ],
    title: 'Shining Light',
    subTitle: 'By Amber Rose',
    description:
      'Shining Light makeup artist, serving the Maryland and Northern Virgina/DMA area for Wedding, Mitzvahs, Proms, Bridal Trials, and other Special Events. Specializing in hair, lashes, blowouts, airbrush, updos, photoshoots, boudoir, and professional certified, tailored beauty consultations.',
    siteUrl: 'https://www.shininglightmua.com',
    homepageHeader: 'Welcome Shining Light by Amber Rose',
    homepageAbout:
      'Helping your inner light shine brighter by enhancing your natural beauty.',
    mailChimpUrl: 'https://mailchimp.com',
    mailChimpToken: 'MAILCHIMP TOKEN HERE',
    pinterest: '', // YOUR PINTEREST PROFILE HERE
    facebook: '', // YOUR FACEBOOK PROFILE HERE
    twitter: '', // YOUR TWITTER PROFILE HERE.
    instagram: 'https://www.instagram.com/shininglight_mua/'
  },
  plugins: [
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
    }
  ]
};
