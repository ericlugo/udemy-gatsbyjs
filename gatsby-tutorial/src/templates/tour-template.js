import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Image from 'gatsby-image'
import { FaMoneyBillWave, FaMap } from 'react-icons/fa'

import Layout from '../components/layout.js'

const TourTemplate = styled.section`
  padding: 4rem 0;

  h2 {
    text-transform: capitalize;
    letter-spacing: 4px;
    margin-bottom: 1rem;
  }
  h4 {
    text-transform: capitalize;
  }
  h2 {
    margin: 2rem 0;
  }
  .center {
    width: 80vw;
    margin: 0 auto;
  }
  .images {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    margin-bottom: 2rem;
  }
  .image {
    box-shadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);
  }
  .info {
    display: flex;
    flex-wrap: wrap;

    p {
      display: flex;
      align-items: center;
      margin-right: 2rem;
      text-transform: capitalize;
    }
  }
  .center h4 {
    margin-top: 1rem;
  }
  .icon {
    color: #3fd0d4;
    font-size: 1.4rem;
    margin-right: 0.5rem;
  }
  .desc {
    line-height: 2;
    margin-top: 2rem;
  }
  .journey {
    margin: 3rem 0;
  }

  @media (min-width: 992px) {
    .journey,
    .desc {
      width: 70vw;
    }
  }
  @media (min-width: 1200px) {
    .center {
      width: 95vw;
      max-width: 1170vw;
    }
    .images {
      grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
      grid-column-gap: 50px;
    }
  }
`

const _TourTemplate = ({ data }) => {
  const {
    name,
    price,
    country,
    days,
    description: { description },
    images,
    start,
    journey,
  } = data.tour

  return (
    <Layout>
      <TourTemplate>
        <div className='center'>
          <div className='images'>
            {images.map((item, index) => (
              <Image
                key={index}
                fluid={item.fluid}
                alt={name}
                className='image'
              />
            ))}
          </div>
          <h2>{name}</h2>
          <div className='info'>
            <p>
              <FaMoneyBillWave className='icon' />
              starting from ${price}
            </p>
            <p>
              <FaMap className='icon' />
              {country}
            </p>
          </div>
          <h4>starts on: {start}</h4>
          <h4>duration: {days} days</h4>
          <p className='desc'>{description}</p>
          <h2>daily schedule</h2>
          <ul className='journey'>
            {journey.map((item, index) => (
              <li key={index}>{item.day}</li>
            ))}
          </ul>
          <Link to='/tours/'>back to tours</Link>
        </div>
      </TourTemplate>
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
      start(formatString: "dddd, MMMM Do, YYYY")
      journey {
        day
        info
      }
      description {
        description
      }
      images {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

export default _TourTemplate
