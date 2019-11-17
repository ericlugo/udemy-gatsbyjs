import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Header from '../components/Header'
import HookHeader from '../examples/Header-Hooks'
import StaticHeader from '../examples/Header-Static'

const PageHeader = (props) => {
  const {
    site: { meta },
  } = props.data
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
      <p>This is a standard component taking advantage of the PageQuery</p>
    </Header>
  )
}

const examples = (props) => {
  return (
    <Layout>
      <HookHeader />
      <br />
      <StaticHeader />
      <br />
      <PageHeader data={props.data} />
    </Layout>
  )
}

export default examples
export const PageQuery = graphql`
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
