import React from "react"

import "../../sass/index.sass"

const Layout = ({ children }) => {
  return (
    <div>
      <header>header</header>

      {children}

      <footer>footer</footer>
    </div>
  )
}

export default Layout
