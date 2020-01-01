const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      tours: allContentfulTour {
        edges {
          node {
            slug
          }
        }
      }
      posts: allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.tours.edges.forEach(({ node }) => {
    createPage({
      path: `tours/${node.slug}`,
      component: path.resolve(`./src/templates/tour-template.js`),
      context: {
        slug: node.slug,
      },
    })
  })
  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.slug}`,
      component: path.resolve(`./src/templates/blog-template.js`),
      context: {
        slug: node.slug,
      },
    })
  })

  const posts = data.posts.edges
  const postsPerPage = 3
  const pageTotal = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: pageTotal }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/blogs` : `/blogs/${index + 1}`,
      component: path.resolve(`./src/templates/blog-list-template.js`),
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        currentPage: index + 1,
        totalPages: pageTotal,
      },
    })
  })
}
