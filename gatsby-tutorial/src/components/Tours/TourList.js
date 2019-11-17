import React from 'react'
import styled from 'styled-components'

import SingleTour from './SingleTour'

const TourList = styled.section`
  padding: 4rem 0;
  text-align: center;

  h2 {
    text-transform: capitalize;
    letter-spacing: 4px;
  }

  .center {
    width: 80vw;
    margin: 3rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }

  @media (min-width: 576px) {
    .center {
      grid-template-columns: repeat(auto-fill, minmax(368.66px, 1fr));
    }
  }

  @media (min-width: 1200px) {
    .center {
      width: 100%;
      max-width: 1170px;
    }
  }
`

const _TourList = ({ tours }) => {
  return (
    <TourList>
      <h2>our tours</h2>
      <div className='center'>
        {tours.map(({ node }) => (
          <SingleTour key={node.id} tour={node} />
        ))}
      </div>
    </TourList>
  )
}

export default _TourList
