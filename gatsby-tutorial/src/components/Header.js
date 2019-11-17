import styled from 'styled-components'

const Header = styled.div`
  font-family: sans-serif;
  font-weight: 300;

  .title {
    font-size: 1.5rem;
    font-weight: 500;
    padding: 0 0 0.25rem;
  }
  .social {
    display: flex;
    padding: 0.25rem 0 0;
    align-items: center;
    p {
      font-size: 0.75rem;
    }
    ul {
      display: flex;

      li {
        display: inline-block;
        font-size: 0.75rem;
        font-family: serif;
        list-style: none;

        a {
          margin: 0 0.5rem;
          border-bottom: 2px solid rgba(0, 0, 0, 0);

          &:hover {
            border-bottom: 2px solid dodgerblue;
          }
        }
      }
    }
  }
`

export default Header
