/**
 * Initialize dotenv
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

/**
 * Configure your Gatsby site with this file.
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  siteMetadata: {
    title: 'Gatsby Tutorial',
    description: 'A Gatsby tutorial page',
    author: '@johndoe',
    social: {
      facebook: 'facebook.com/john_doe',
      twitter: 'twitter.com/john_doe',
      instagram: 'instagram.com/john_doe',
      github: 'github.com/john_doe',
      codepen: 'codepen.io/john_doe',
      site: 'https://lmgtfy.com/?q=john+doe&s=g&iie=1',
    },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
