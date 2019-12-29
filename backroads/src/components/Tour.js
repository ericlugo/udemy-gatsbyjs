import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "../sass/tour.module.sass"
import { FaMap } from "react-icons/fa"

const getDefaultImage = graphql`
  query {
    file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Tour = ({ tour }) => {
  const { country, days, images, name, price, slug } = tour
  const defaultImage = useStaticQuery(getDefaultImage).file.childImageSharp

  let mainImage = images ? images[0].fluid : defaultImage.fluid

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="single tour" />
        <AniLink fade to={`/tours/${slug}`} className={styles.link}>
          details
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{name || "default name"}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            {country || "default country"}
          </h4>
          <div className={styles.details}>
            <h6>{days || "unknown"} days</h6>
            <h6>from ${price || "???"}</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

Tour.propTypes = {
  tour: PropTypes.shape({
    country: PropTypes.string.isRequired,
    days: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
  }),
}

export default Tour
