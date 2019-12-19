import React from "react"

import Title from "../Title"
import services from "../../constants/services"

import styles from "../../sass/services.module.sass"

const Services = () => (
  <section className={styles.services}>
    <Title title="our" subtitle="services" />
    <div className={styles.center}>
      {services.map((item, index) => (
        <article key={index} className={styles.service}>
          <span>{item.icon}</span>
          <h4>{item.title}</h4>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  </section>
)

export default Services
