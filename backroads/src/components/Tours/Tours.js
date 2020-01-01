import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import TourList from "./TourList"

const getTours = graphql`
  query {
    tours: allContentfulTour {
      edges {
        node {
          name
          slug
          price
          country
          contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const Tours = () => {
  const { tours } = useStaticQuery(getTours)

  return <TourList tours={tours} />
}

export default Tours
