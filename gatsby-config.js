module.exports = {
  siteMetadata: {
    title: "Frontend Topics",
    titleTemplate: "The first front-end development community",
    description: "The first front-end development community",
    url: "https://www.frontendtopics.com", 
    image: "/img/javascript.jpg",
    twitterUsername: "@alancampora",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
  ],
};
