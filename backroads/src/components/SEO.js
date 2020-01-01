import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const getMetadata = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        author
        siteURL
        image
        twitter: twitterUsername
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(getMetadata)
  const {
    siteTitle,
    siteDesc,
    siteURL,
    image,
    twitter,
    author,
  } = site.siteMetadata
  const fullTitle = `${title} | ${siteTitle}`.toUpperCase()

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={fullTitle}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />
      {/* twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description || siteDesc} />
      <meta name="twitter:image" content={`${siteURL}${image}`} />
    </Helmet>
  )
}

export default SEO
