import React, { useState } from "react"
import { Link } from "gatsby"
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
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <Menu className={styles.logoIcon} />
          </button>
        </div>
        <ul className={isOpen ? `${styles.navLinks} ${styles.showNav}` : `${styles.navLinks}`}>
          {links.map((item, index) => <li key={index}><Link to={item.path}>{item.text}</Link></li>)}
        </ul>
        <div className={styles.navSocialLinks}>
          {socialLinks.map((item, index) => <a key={index} href={item.url} target='_blank' rel="noopener noreferrer">{item.icon}</a>)}
        </div>
      </div>
    </nav>
  )
}
