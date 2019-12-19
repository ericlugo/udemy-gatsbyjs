import React from "react"

import Title from "../Title"
import image from "../../images/defaultBcg.jpeg"

import styles from "../../sass/about.module.sass"

const About = () => (
  <section className={styles.about}>
    <Title title="about" subtitle="us" />
    <div className={styles.aboutCenter}>
      <article className={styles.aboutImg}>
        <div className={styles.imgContainer}>
          <img src={image} alt="about company" />
        </div>
      </article>
      <article className={styles.aboutInfo}>
        <h4>explore the difference</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
          consequatur maiores magnam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ex
          numquam ullam!
        </p>
        <button type="button" className="btn-primary">
          read more
        </button>
      </article>
    </div>
  </section>
)

export default About
