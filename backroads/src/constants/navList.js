import React from "react"
import { Link } from "gatsby"

export default () => (
  <nav>
    <ul>
      <Link to="/">Home</Link>
      <Link to="/blog/">Blog</Link>
      <Link to="/tours/">Tours</Link>
      <Link to="/contact/">Contact</Link>
    </ul>
  </nav>
)
