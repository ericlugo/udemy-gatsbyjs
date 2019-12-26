import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Contact from "../components/Contact"

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
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
    <StyledHero image={data.defaultBcg.childImageSharp.fluid} />
    <Contact />
  </Layout>
)
