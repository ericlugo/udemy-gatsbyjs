import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero.js"

import styles from "../sass/single-blog.module.sass"

const blogTemplate = ({ data }) => {
  const {
    image: { fluid: image },
    published,
    text: { json: content },
    title,
  } = data.post
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <div>
            <h3>this is an awesome image</h3>
            <img
              width="400"
              src={node.data.target.fields.file["en-US"].url}
              alt=""
            />
            <p>image provided by john doe</p>
          </div>
        )
      },
    },
  }

  return (
    <Layout>
      <StyledHero image={image} />
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>published on: {published}</h4>
          <article className={styles.post}>
            {documentToReactComponents(content, options)}
          </article>
          <AniLink fade to="/blog" className="btn-primary">
            all posts
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      published(formatString: "MMMM Do, YYYY")
      title
      text {
        json
      }
      image {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

export default blogTemplate
