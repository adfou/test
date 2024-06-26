require("dotenv").config();
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`
  });
module.exports = {
    siteMetadata: {
        title: `MGH Cancer Genetics Decision Aid`,
        siteUrl: `https://www.yourdomain.tld`
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-offline`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-drupal`,
            options: {
                // TEST
                //baseUrl: `http://api.mghda.dr809.test`,
                // DEV
                baseUrl: 'https://apiv2.mghda.hccdev.org/',
                // STAGE
                //baseUrl: `http://api.mghda.hccstaging.org`,
                // PROD
                //baseUrl: `https://api.mghcancergeneticsda.com`,
                basicAuth: {
                    username: process.env.DRUPAL_AUTH_USERNAME,
                    password: process.env.DRUPAL_AUTH_PASSWORD
                },
                languageConfig: {
                    defaultLanguage: `en`,
                    enabledLanguages: [`en`, `es`, `ht`,`pt-pt`],
                    translatableEntities: [
                        `node--article`,
                        `node--decision_aid_page`,
                        `paragraph--accordion`,
                        `paragraph--button_with_text`,
                        `paragraph--content_module`,
                        `paragraph--content_module_segment`,
                        `paragraph--multiple_choice_option`,
                        `paragraph--value`
                    ],
                    nonTranslatableEntities: [`file--file`],
                },
                skipFileDownloads:true,
            }
        },
        {
            resolve: `gatsby-plugin-google-tagmanager`,
            options: {
              id: "GTM-MP9X6D8M",
              // Include GTM in development.
              // Defaults to false meaning GTM will only be loaded in production.
              includeInDevelopment: true,
              // datalayer to be set before GTM is loaded
              // should be an object or a function that is executed in the browser
              defaultDataLayer: { platform: "gatsby" },
            },
          }
    ]
};