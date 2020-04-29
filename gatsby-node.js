/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
//const fs = require(`fs`)
const path = require(`path`)
//const mkdirp = require(`mkdirp`)
//const Debug = require(`debug`)
//const { createFilePath } = require(`gatsby-source-filesystem`)
//const { urlResolve, createContentDigest } = require(`gatsby-core-utils`)

//const debug = Debug(`gatsby-theme-blog-core`)
//const withDefaults = require(`./utils/default-options`)

//const _ = require("lodash")


//const path = require('path')

exports.createPages = (({graphql, actions}) => {
  const { createPage } = actions

return new Promise((resolve, reject) => {
    //const postTemplate = path.resolve('src/components/post.js')
    const tagPosts = path.resolve('src/components/tag.jsx');

    resolve(
      graphql(
        `
          query {
            allBlogPost {
              edges {
                node {
                    slug
                    title
                    tags
                }
              }
            }
          }
        `
      ).then(result => {
        //console.log(JSON.stringify(result, null, 4))
        if (result.errors) {
          return Promise.reject(result.errors)
        }

        const posts = result.data.allBlogPost.edges;

        const postsByTag = {};

        posts.forEach(({ node }) => {
          if (node.tags) {
            node.tags.forEach(tag => {
              if (!postsByTag[tag]) {
                postsByTag[tag] = [];
              }
              postsByTag[tag].push(node);
            });
          }
        });

        const tags = Object.keys(postsByTag);

        tags.forEach(tagName => {
          const posts = postsByTag[tagName]
          createPage({
            path: `/tags/${tagName}`,
            component: tagPosts,
            context: {
              posts,
              tagName
            }
          })
        })

        /*createPage({
          path: '/tags',
          component: tagPage,
          context: {
            tags: tags.sort(),
          },
        });*/

        /*posts.forEach(({node}) => {
          const path = node.slug

          createPage({
            path,
            component: postTemplate,
            context: {
              pathSlug: path
            }
          })
        })*/
      })
    )
  })
})
