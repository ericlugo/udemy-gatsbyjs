import React, { useState } from "react"
import { FaAngleDown } from "react-icons/fa"

import styles from "../../sass/day.module.sass"

const Day = ({ day, info }) => {
  const [showInfo, setInfo] = useState(false)

  const toggleInfo = _ => setInfo(showInfo => !showInfo)

  return (
    <article className={styles.day}>
      <h4>
        {day}
        <button className={styles.btn} onClick={toggleInfo}>
          <FaAngleDown />
        </button>
      </h4>
      {showInfo && <p>{info}</p>}
    </article>
  )
}

export default Day
