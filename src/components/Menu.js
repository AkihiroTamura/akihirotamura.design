import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Header = styled.header`
  width: 100%;
  padding: 3em 4em;
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
    color: ${props => props.theme.colors.highlight};
    font-weight: 400;
    transition: all 0.2s;
    &:hover {
      color: ${props => props.theme.colors.base};
    }
  }

  .name {
    color: #000;
    font-size: 1.2em;
    font-weight: 400;
  }

  .job {
    color: #999;
    margin-top: 0.45em;
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
              <span className="name">AKIHIRO TAMURA</span><p className="job">Ix Designer</p>
            </Link>
          </li>
          <li>
            <Link to="/about/" activeStyle={activeLinkStyle}>
              ABOUT
            </Link>
          </li>
          <li>
            <a href="https://m.me/akihiro.tamura.75436" activeStyle={activeLinkStyle}>
              CONTACT
            </a>
          </li>
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
