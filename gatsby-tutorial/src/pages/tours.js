import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import TourList from '../components/Tours/TourList'

const tours = ({ data }) => {
  return (
    <Layout>
      <TourList tours={data.tours.edges} />
    </Layout>
  )
}

export default tours
export const getTours = graphql`
  query {
    tours: allContentfulTour {
      edges {
        node {
          name
          price
          slug
          country
          id: contentful_id
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
