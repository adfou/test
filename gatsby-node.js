/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allNodeDecisionAidPage {
        edges {
          node {
            drupal_internal__nid
            id
            langcode
            path {
              alias
            }
          }
        }
      }
      allNodeArticle {
        edges {
          node {
            drupal_internal__nid
            id
            langcode
            path {
              alias
            }
          }
        }
      }
    }
  `).then( (result) => {
    result.data.allNodeDecisionAidPage.edges.forEach( ({ node }) => {
      createPage({
        path: node.path.alias,
        component: path.resolve(`./src/templates/decision-page-template.js`),
        context: {
          id: node.id,
          drupal_internal__nid: node.drupal_internal__nid,
          langcode: node.langcode,
        },
      });
    })
  })
}

