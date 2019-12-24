module.exports = {
  siteMetadata: {
    title: "Backroads",
    description:
      "Explore awesome worldwide tours & discover what makes each of them unique. Forget your daily routine & say 'yes' to adventure!",
    author: "@johndoe",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
