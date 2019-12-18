import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Banner from "../components/Banner"

import styles from "../sass/error.module.sass"

export default () => (
  <Layout>
    <header className={styles.error}>
      <Banner title="oops it's a dead end">
        <Link to="/" className="btn-white">
          back to home page
        </Link>
      </Banner>
    </header>
  </Layout>
)
