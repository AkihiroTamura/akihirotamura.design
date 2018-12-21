import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  padding: 2em;
  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    padding: 1.5em 1em;
  }
`
const Nav = styled.nav`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;

  ul {
    display: flex;
    justify-content: space-between;
    font-size: 1em;
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
    color: ${props => props.theme.colors.base};
    transition: all 0.2s;
    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }

  .name {
    font-weight: 400;
    @media screen and (max-width: ${props => props.theme.responsive.medium}) {
      font-size: .9em;
    }
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
              <p className="name">¯\_(ツ)_/¯</p>
            </Link>
          </li>
          <li>
            <Link to="/about/" activestyle={activeLinkStyle}>
              About
            </Link>
          </li>
          <li>
            <a href="https://m.me/akihiro.tamura.75436" activestyle={activeLinkStyle}>
              Contact
            </a>
          </li>
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
