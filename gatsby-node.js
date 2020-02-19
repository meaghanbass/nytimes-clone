const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// const { createRemoteFileNode } = require("gatsby-source-filesystem")
// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions
//   createTypes(`
//     type MarkdownRemark implements Node {
//       frontmatter: Frontmatter
//     }
//     type Frontmatter {
//       title: String!
//       featuredImgUrl: String
//       featuredImgAlt: String
//     }
//   `)
// }

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

// To fix the issue with AMCHARTS
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/article-template.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}