import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import BlogList from "../components/Blog/BlogList"

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export default ({ data }) => (
  <Layout>
    <SEO title="blog" />
    <StyledHero image={data.defaultBcg.childImageSharp.fluid} />
    <BlogList />
  </Layout>
)
