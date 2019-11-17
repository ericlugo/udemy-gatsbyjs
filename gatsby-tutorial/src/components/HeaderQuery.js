import { graphql } from 'gatsby'

const query = graphql`
  query {
    site {
      meta: siteMetadata {
        title
        description
        author
        social {
          facebook
          twitter
          instagram
          github
          codepen
          site
        }
      }
    }
  }
`

export default query
