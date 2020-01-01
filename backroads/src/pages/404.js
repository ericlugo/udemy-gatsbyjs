import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import Banner from "../components/Banner"

import styles from "../sass/error.module.sass"

export default () => (
  <Layout>
    <SEO title="404 not found" />
    <header className={styles.error}>
      <Banner title="oops it's a dead end">
        <AniLink fade to="/" className="btn-white">
          back to home page
        </AniLink>
      </Banner>
    </header>
  </Layout>
)
