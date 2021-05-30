module.exports = {
  siteMetadata: {
    title: `Gatsby Starter`,
    author: `@gatsbyjs`,
    siteUrl: 'http://example.com',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        rule: {
          include: /^((?!\.url-loader).)*\.svg$/,
        },
      },
    },
    'gatsby-plugin-dts-css-modules',
  ],
  flags: {
    FAST_DEV: false,
    DEV_SSR: false,
    LAZY_IMAGES: false,
    QUERY_ON_DEMAND: false,
    PARALLEL_SOURCING: false,
    FAST_REFRESH: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: false,
  },
};
