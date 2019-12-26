import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import links from "../../constants/navLinks.js"
import socialLinks from '../../constants/socialLinks.js'
import styles from '../../sass/footer.module.sass'

export default () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => (
          <AniLink key={index} fade to={item.path}>{item.text}</AniLink>
        ))}
      </div>
      <div className={styles.icons}>
        {socialLinks.map((item, index) => (
          <a key={index} href={item.url} target='_blank' rel="noopener noreferrer">{item.icon}</a>
        ))}
      </div>
      <div className={styles.copyright}>
        copyright &copy; backroads travel company {new Date().getFullYear()} all rights reserved
      </div>
    </footer>
  )
}
