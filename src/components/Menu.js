import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Logo from "!svg-react-loader!../images/logo.svg?name=ShrugLogo";


const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  padding: 1.25em 2.5em;
  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    padding: 1.25em 0.75em;
  }
`
const Nav = styled.nav`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;

  ul {
    display: flex;
    justify-content: space-between;
    font-size: 0.75em;
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
  }

  .logo {
    width: 72px;
    margin: 0;
    padding: 0;
    vertical-align: bottom;
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
              <Logo class="logo"/>
            </Link>
          </li>
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
