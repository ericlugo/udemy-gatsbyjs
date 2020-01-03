import React from "react"

import PostCard from "./PostCard"

import styles from "../sass/postList.module.sass"

const PostList = ({ posts }) => (
  <section className={styles.posts}>
    <h1>john doe</h1>
    <h4>personal blog</h4>

    <div className={styles.center}>
      {posts.map(({ node }, index) => (
        <PostCard key={index} post={node} />
      ))}
    </div>
  </section>
)

export default PostList
