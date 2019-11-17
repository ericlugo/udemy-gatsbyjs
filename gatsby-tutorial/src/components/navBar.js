import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavBar = styled.nav`
  padding: 1rem 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-end;

  .site-header {
    font-size: 2rem;
    padding: 0.5rem 1rem;
  }

  .nav {
    display: flex;
    flex-flow: row wrap;

    li {
      display: inline-block;
      padding: 0.5rem 1rem;
      font-family: sans-serif;

      a {
        border-bottom: 2px solid rgba(0, 0, 0, 0);
      }

      &:hover {
        a {
          border-bottom: 2px solid dodgerblue;
        }
      }
    }
  }
`

const _navBar = () => {
  return (
    <NavBar>
      <h1 className='site-header'>
        Hello World w/ <a href='https://www.gatsbyjs.org/'>GatsbyJS</a>!
      </h1>
      {/* prettier-ignore */}
      <ul className="nav">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog/'>Blog</Link></li>
        <li><Link to='/products/'>Products</Link></li>
        <li><Link to='/examples/'>Examples</Link></li>
        <li><Link to='/images/'>Images</Link></li>
        <li><Link to='/tours/'>Tours</Link></li>
      </ul>
    </NavBar>
  )
}

export default _navBar
