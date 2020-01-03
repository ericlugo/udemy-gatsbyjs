import React from "react"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "../sass/postCard.module.sass"

const PostCard = ({ post }) => {
  const { author, date, slug, title } = post.frontmatter
  const image = post.frontmatter.image.childImageSharp.fluid

  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <Image fluid={image} />
      </div>
      <div className={styles.info}>
        <div>
          <h2>{title}</h2>
          <h6>
            <span>{author}</span> / <span>{date}</span>
          </h6>
          <p>{post.excerpt}</p>
          <AniLink fade to={`/${slug}`} className={styles.link}>
            read more
          </AniLink>
        </div>
      </div>
    </article>
  )
}

export default PostCard
