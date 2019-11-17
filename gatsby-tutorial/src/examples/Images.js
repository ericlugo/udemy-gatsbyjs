import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import img from '../images/brandless.jpg'
import Img from 'gatsby-image'

const getImages = graphql`
  query {
    candles: file(relativePath: { eq: "candles.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 300, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    honestco: file(relativePath: { eq: "honestco.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Images = styled.section`
  text-align: center;
  text-transform: capitalize;
  width: 100%;
  margin: 0 auto 2rem;

  article {
    border: 2px solid red;
    padding: 1rem;
  }

  .basic {
    width: 100%;
  }

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }
`

const _Images = () => {
  const data = useStaticQuery(getImages)

  return (
    <Images>
      <article>
        <h3>basic image</h3>
        <img src={img} className='basic' alt='' />
      </article>
      <article>
        <h3>fixed image - Blur</h3>
        <Img fixed={data.candles.childImageSharp.fixed} />
      </article>
      <article>
        <h3>fluid image - SVG</h3>
        <Img fluid={data.honestco.childImageSharp.fluid} />
      </article>
    </Images>
  )
}

export default _Images
