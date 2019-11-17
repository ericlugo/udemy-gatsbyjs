import React from 'react'
import NavBar from './navBar.js'
import '../styles/styles.css'

const layout = ({ children }) => {
  return (
    <React.Fragment>
      <NavBar />
      <main>{children}</main>
    </React.Fragment>
  )
}

export default layout
