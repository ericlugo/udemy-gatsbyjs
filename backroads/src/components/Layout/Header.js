import React, { useState } from "react"
import { FaAlignRight as Menu } from "react-icons/fa"

import links from "../../constants/navLinks.js"
import socialLinks from "../../constants/socialLinks.js"
import logo from "../../images/logo.svg"

import styles from "../../sass/navbar.module.sass"

export default () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="backroads logo" />
          {/* prettier-ignore */}
          <button
            type="button"
            className={styles.logoBtn}
            onClick={toggleNav}>
            <Menu className={styles.logoIcon} />
          </button>
        </div>
      </div>
    </nav>
  )
}

// import React from "react"
// import { Link } from "gatsby"

// export default () => (
//   <nav>
//     <ul>
//       <Link to="/">Home</Link>
//       <Link to="/blog/">Blog</Link>
//       <Link to="/tours/">Tours</Link>
//       <Link to="/contact/">Contact</Link>
//     </ul>
//   </nav>
// )
