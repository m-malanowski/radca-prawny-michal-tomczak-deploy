/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "⚖️ Kancelaria Radcy Prawnego Michał Tomczak, Radca Prawny Gdańsk",
    description: "Zadzwoń ☎ 507 455 057. Radca Prawny Gdańsk - sprawy cywilne, sprawy karne, sprawy rodzinne, rozwód, dobra osobiste, porady prawne, kontakty z dziećmi, alimenty, odszkodowanie, obrońca",
    author: "LUMINA.STUDIO",
    twitterUsername: "@mat",
    // image: "/twitter-img.png",
    siteUrl: "https://radcaprawnytomczak.pl",
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-0J0X0PC2C5" // Google Analytics / GA
        ],
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://strapi-michal-tomczak-backend.herokuapp.com`,
        // apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        //   contentTypes : `jobs`, `projects`, `blogs`,
        //   singleType : `about`
        // contentTypes: ['services'],
        contentTypes: ['blogs', 'teams'],
        singleTypes: ['private-policy'],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kancelaria Radcy Prawnego Michał Tomczak`,
        short_name: `Michał Tomczak`,
        start_url: `/`,
        background_color: `#00579d`,
        theme_color: `#e8eef3`,
        display: `standalone`,
        icon: `src/assets/imgs/favIcon.png`,
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
    `gatsby-plugin-offline`,
  ],
}
