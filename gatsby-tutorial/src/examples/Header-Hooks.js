import React from 'react'
import { useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'
import Header from '../components/Header'

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

const _HookHeader = () => {
  // This is one of the ways to pull data using the useStaticQuery hook
  const {
    site: { meta },
  } = useStaticQuery(query)

  /* 
  // You can also set up the query right within the hook call. Though this can get very messy.
  const {
    site: { siteMetadata: info },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
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
  `)
 */

  return (
    <Header>
      <h1 className='title'>{meta.title}</h1>
      <p className='author'>
        <strong>Author</strong>: <a href={meta.social.site}>{meta.author}</a>
      </p>
      <p className='description'>
        <strong>Description</strong>: {meta.description}
      </p>
      {/* prettier-ignore */}
      <div className="social">
        <p>You can find me on...</p>
        <ul>
          <li><a href={meta.social.facebook}>facebook</a></li>
          <li><a href={meta.social.twitter}>twitter</a></li>
          <li><a href={meta.social.instagram}>instagram</a></li>
          <li><a href={meta.social.github}>github</a></li>
          <li><a href={meta.social.codepen}>codepen</a></li>
        </ul>
      </div>
      <p>
        This is a standard component taking advantage of the useStaticQuery hook
      </p>
    </Header>
  )
}

export default _HookHeader
