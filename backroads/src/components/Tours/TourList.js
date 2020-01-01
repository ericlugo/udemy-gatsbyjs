import React, { useState } from "react"

import Title from "../Title"
import Tour from "../Tour"

import styles from "../../sass/items.module.sass"

const TourList = ({ tours }) => {
  /* eslint-disable-next-line no-unused-vars */
  const [sortedTours, setTours] = useState(
    tours.edges.map(tour => tour.node) || []
  )

  return (
    <section className={styles.tours}>
      <Title title="our" subtitle="tours" />
      <div className={styles.center}>
        {sortedTours.map(tour => (
          <Tour key={tour.contentful_id} tour={tour} />
        ))}
      </div>
    </section>
  )
}

export default TourList
