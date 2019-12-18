import React from 'react'
import styles from '../sass/banner.module.sass'

const Banner = ({title, info, children}) => (
  <div className={styles.banner}>
    <h1>{title}</h1>
    <p>{info}</p>
    {children}
  </div>
)

export default Banner
