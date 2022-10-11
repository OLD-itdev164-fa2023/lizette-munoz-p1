module.exports = {
  siteMetadata: {
    title: `Top 10 Best Movies of All Time`,
    description: `A blog about the best movies of all time`,
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
    `gatsby-plugin-styled-components`,
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
        icon: `src/images/0c3297f3516a415219c7e89e16a4a3d2.jpg`, // This path is relative to the root of the site.
      },
    },
  ],
}
