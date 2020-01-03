import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import PostList from "../components/PostList"

import Layout from "../components/Layout"

const getPosts = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "MMMM Do, YYYY")
            author
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`

const Home = () => {
  const { allMdx: posts } = useStaticQuery(getPosts)

  return (
    <Layout>
      <PostList posts={posts.edges} />
    </Layout>
  )
}

export default Home
