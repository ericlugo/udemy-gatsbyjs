import React from "react"
import styled from "styled-components"

const Title = ({ title, subtitle, className }) => (
  <div className={className}>
    <h4>
      <span className="title">{title}</span>
      <span>{subtitle}</span>
    </h4>
  </div>
)

export default styled(Title)`
  text-transform: uppercase;
  font-size: 2.3rem;
  margin-bottom: 2rem;

  h4 {
    text-align: center;
    letter-spacing: 7px;
    color: ${props => props.theme.primaryColor};
  }
  span {
    display: block;
  }
  .title {
    color: ${props => props.theme.mainBlack};
  }

  @media (min-width: ${props => props.theme.breakpointXS}) {
    span {
      display: inline-block;
      margin: 0 0.35rem;
    }
  }
`
