import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import BlogCard from "../components/Blog/BlogCard"
import Title from "../components/Title"

import styles from "../sass/blog.module.sass"

const blogListTemplate = props => {
  const { currentPage, totalPages } = props.pageContext
  const { data } = props
  const isFirst = currentPage === 1
  const isLast = currentPage === totalPages
  const prevPage =
    currentPage - 1 === 1 ? `/blogs` : `/blogs/${currentPage - 1}`
  const nextPage = `/blogs/${currentPage + 1}`

  return (
    <Layout>
      <SEO title="latest posts" />
      <section className={styles.blog}>
        {isFirst ? (
          <Title title="latest" subtitle="posts" />
        ) : (
          <Title title="our" subtitle="blog" />
        )}

        <div className={styles.center}>
          {data.posts.edges.map(({ node }) => (
            <BlogCard key={node.id} blog={node} />
          ))}
        </div>

        <section className={styles.links}>
          {!isFirst && (
            <AniLink fade to={prevPage} className={styles.link}>
              PREV
            </AniLink>
          )}

          {Array.from({ length: totalPages }, (_, index) => (
            <AniLink
              key={index}
              fade
              to={`/blogs${index === 0 ? "" : `/${index + 1}`}`}
              className={
                index + 1 === currentPage
                  ? `${styles.link} ${styles.active}`
                  : `${styles.link}`
              }
            >
              {index + 1}
            </AniLink>
          ))}

          {!isLast && (
            <AniLink fade to={nextPage} className={styles.link}>
              NEXT
            </AniLink>
          )}
        </section>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    posts: allContentfulPost(
      sort: { fields: published, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          slug
          title
          id: contentful_id
          published(formatString: "MMM Do, YYYY")
          image {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default blogListTemplate
