import React from "react"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"
import { FaMoneyBillWave, FaMap } from "react-icons/fa"

import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Day from "../components/SingleTour/Day"

import styles from "../sass/template.module.sass"

const tourTemplate = ({ data }) => {
  const {
    country,
    days,
    description: { description },
    journey,
    images,
    name,
    price,
    start,
  } = data.tour
  const [mainImage, ...tourImages] = images

  return (
    <Layout>
      <StyledHero image={mainImage.fluid} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {tourImages.map((image, index) => (
              <Image
                key={index}
                fluid={image.fluid}
                alt="single tour"
                className={styles.image}
              />
            ))}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon} />
              starting from ${price}
            </p>
            <p>
              <FaMap className={styles.icon} />
              {country}
            </p>
          </div>
          <h4>starts on: {start}</h4>
          <h4>duration: {days} days</h4>
          <p className={styles.desc}>{description}</p>
          <h2>daily schedule</h2>
          <div className={styles.journey}>
            {journey.map((item, index) => (
              <Day key={index} day={item.day} info={item.info} />
            ))}
          </div>
          <AniLink fade to="/tours" className="btn-primary">
            back to tours
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    tour: contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      days
      start(formatString: "dddd, MMM Do, YYYY")
      description {
        description
      }
      journey {
        day
        info
      }
      images {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

export default tourTemplate
