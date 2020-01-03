import React from "react"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/Layout"

import styles from "../sass/postTemplate.module.sass"

const postTemplate = ({ data }) => {
  const { body } = data.mdx
  const { title, date, author, image: img } = data.mdx.frontmatter
  const image = img.childImageSharp.fluid

  return (
    <Layout>
      <section className={styles.template}>
        <AniLink fade to="/" className={styles.link}>
          back to all posts
        </AniLink>
        <div className={styles.info}>
          <h1>{title}</h1>
          <h4>
            <span>by {author}</span> / <span>{date}</span>
          </h4>
        </div>
        <Image fluid={image} />
        <div className={styles.content}>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
        <AniLink fade to="/" className={styles.link}>
          back to all posts
        </AniLink>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        date(formatString: "MMMM do, YYYY")
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
      body
    }
  }
`

export default postTemplate
