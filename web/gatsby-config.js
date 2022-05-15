/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const gatsbyRequiredRules = path.join(
  process.cwd(),
  'node_modules',
  'gatsby',
  'dist',
  'utils',
  'eslint-rules',
);

module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `Personal Portfolio website built with Gatsby`,
    author: `@tasfia-islam`,
    siteUrl: `https://tasfia-islam.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-tsconfig-paths`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/assets/img`,
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        // Gatsby required rules directory
        rulePaths: [gatsbyRequiredRules],
        // Default settings that may be ommitted or customized
        stages: ['develop'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        exclude: ['node_modules', 'bower_components', '.cache', 'public'],
      },
    },
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
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'mnf85e44',
        dataset: 'production',
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.MY_SANITY_TOKEN,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
