module.exports = {
  siteMetadata: {
    title: `Top 10 Best Movies of All Time`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Lizette Munoz`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    contact:{
      name:`Lizette Munoz`,
      company:`Movies Blog Inc`,
      address:`Milwaukee 123`
    }
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve:`gatsby-source-contentful`,
      options:{
        spaceId:`99iasopxv3b5`,
        accessToken:`xMF7w9ppKYu56yrsHy-vPCapyp7wBsWkyu2reYOdxGM`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
