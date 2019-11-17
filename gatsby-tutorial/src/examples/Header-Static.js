import React from 'react'
import { StaticQuery } from 'gatsby'

import Header from '../components/Header'
import HeaderQuery from '../components/HeaderQuery'

const _StaticHeader = () => {
  return (
    <StaticQuery
      query={HeaderQuery}
      render={(data) => {
        const {
          site: { meta },
        } = data
        return (
          <Header>
            <h1 className='title'>{meta.title}</h1>
            <p className='author'>
              <strong>Author</strong>:{' '}
              <a href={meta.social.site}>{meta.author}</a>
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
            <p>This is a render within a StaticQuery component</p>
          </Header>
        )
      }}
    />
  )
}

export default _StaticHeader
