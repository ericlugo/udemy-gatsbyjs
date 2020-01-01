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
    // author,
  } = site.siteMetadata
  const fullTitle = `${title} | ${siteTitle}`.toUpperCase()

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={fullTitle}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />
      {/* facebook card */}
      <meta property="og:url" content={siteURL} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description || siteDesc} />
      <meta property="og:image" content={`${siteURL}${image}`} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
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
