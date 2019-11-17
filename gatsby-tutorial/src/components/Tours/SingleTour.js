import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FaMap } from 'react-icons/fa'
import PropTypes from 'prop-types'

const SingleTour = styled.article`
  box-shadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);
  transition: all 0.3s linear;

  &:hover {
    box-shadow: 4px 10px 5px 0px rgba(0, 0, 0, 0.5);
  }

  .img-container {
    position: relative;
    background: #3fd0d4;
    transition: all 0.3s linear;
  }
  .img {
    transition: all 0.3s linear;
  }
  .img-container:hover .img {
    opacity: 0.3;
  }

  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    text-transform: uppercase;
    letter-spacing: 4px;
    color: #fff;
    border: 2px solid #fff;
    padding: 0.5rem 0.7rem;
    display: inline-block;
    transition: all 0.3s linear;
    cursor: pointer;
    text-decoration: none;
  }
  .link:hover {
    background: #fff;
    color: #3fd0d4;
  }
  .img-container:hover .link {
    opacity: 1;
  }

  .footer {
    padding: 1rem;
    text-align: left;
  }
  .footer h3 {
    text-transform: capitalize;
    margin-bottom: 0;
  }
  .info {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    text-transform: uppercase;
    align-items: center;
    margin-top: 0.5rem;
  }
  .info h6,
  .info h4 {
    margin-bottom: 0;
  }
  .country {
    text-transform: capitalize;
    color: #3fd0d4;
    display: flex;
    align-items: center;
  }
  .icon {
    margin-right: 0.4rem;
  }
  .details {
    color: #cfcfcf;
    text-transform: uppercase;
    text-align: right;
    font-size: 16px;
    letter-spacing: 2px;
  }
`

const _SingleTour = ({ tour }) => {
  const { name, price, country, days, slug, images } = tour
  const mainImage = images[0].fluid

  return (
    <SingleTour>
      <div className='img-container'>
        <Image fluid={mainImage} className='img' alt={name} />
        <Link className='link' to={`/tours/${slug}`}>
          details
        </Link>
      </div>
      <div className='footer'>
        <h3>{name}</h3>
        <div className='info'>
          <h4 className='country'>
            <FaMap className='icon' />
            {country}
          </h4>
        </div>
        <div className='details'>
          <h6>{days} days</h6>
          <h6>from ${price}</h6>
        </div>
      </div>
    </SingleTour>
  )
}

_SingleTour.propTypes = {
  tour: PropTypes.shape({
    country: PropTypes.string.isRequired,
    days: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
  }),
}

export default _SingleTour
