import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Header = styled.header`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 6em 0;
  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    padding: 3em 1em;
  }
`
const Nav = styled.nav`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;

  ul {
    display: flex;
    justify-content: space-between;
    font-size: .7em;
    letter-spacing: .1em;
  }

  li {
    display: inline-block;
    margin-left: 2em;
    @media screen and (max-width: ${props => props.theme.responsive.medium}) {
      margin-left: 1em;
    }
    &:first-child {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.secondary};
    font-weight: 400;
    transition: all 0.2s;
    &:hover {
      color: ${props => props.theme.colors.base};
    }
  }

  .name {
    color: ${props => props.theme.colors.base};
    font-size: 1.2em;
    font-weight: 400;
  }

  .job {
    color: ${props => props.theme.colors.secondary};
  }
`

const activeLinkStyle = {
  color: '#000',
}

const Menu = () => {
  return (
    <Header>
      <Nav>
        <ul>
          <li>
            <Link to="/" style={activeLinkStyle}>
              <p className="name">AKIHIRO TAMURA</p><span className="job">UI Designer</span>
            </Link>
          </li>
          <li>
            <Link to="/about/" activestyle={activeLinkStyle}>
              ABOUT
            </Link>
          </li>
          <li>
            <a href="https://m.me/akihiro.tamura.75436" activestyle={activeLinkStyle}>
              CONTACT
            </a>
          </li>
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
