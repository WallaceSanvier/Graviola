module.exports = {
  siteMetadata: {
    title: `Líder Gás Distribuidora em Goiânia`,
    description: `Para comprar gás de cozinha e água mineral de qualidade entre no site e peça pelo Whatsapp!(62) 98508-7244.Onde comprar Gas de cozinha com preço acessível.Gas de cozinha próximo.`,
    author: `wallacesanvier`,
    copyright: `© Copyright - Todos os Direitos Reservados`,
    siteUrl: "https://www.gaslidergas.com.br",
    socialMedia: {
      facebook: "/",
      instagram: "/",
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-DK48WQELGV",
        head: true,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Líder Gás`,
        short_name: `LíderGás`,
        start_url: `/`,
        background_color: `#f4f4f4`,
        theme_color: `#f4f4f4`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
        // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
