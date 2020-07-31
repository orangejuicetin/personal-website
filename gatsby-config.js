module.exports = {
  siteMetadata: {
    title: `Justin Choi`,
    description: `A smattering of materials and thoughts`,
    author: `Justin Choi`,
    keywords: ["Justin Choi", "personal website", "juicetin"],
    siteUrl: "https://orangejuicetin.com",
    twitterUsername: "orange_juicetin",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/posts`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `orange_logo`,
        short_name: `orange`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logos/orange.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\/assets\\/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Comfortaa`, `Quicksand`],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/DefaultPostLayout.tsx"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              quality: 100,
              withWebp: true,
            },
          },
        ],
      },
    },
  ],
};
