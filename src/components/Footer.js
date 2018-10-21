import React from 'react'
import styled from 'styled-components'
import {Twitter, Facebook, Dribbble} from 'styled-icons/fa-brands'

const Wrapper = styled.footer`
  width: 100%;
  padding: 3em 4em;
  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    padding: 3em 1em;
  }
`

const Container = styled.div`
  margin: 0 auto auto;
  width: 100%;

  ul {
    float: right;
    overflow: hidden;
    @media screen and (max-width: ${props => props.theme.responsive.medium}) {
      float: none;
      margin-bottom: 1em;
    }
  }

  li {
    float: left;
    margin-right: 1.5em;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.base};
    transition: all 0.2s;
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }
`

const Copy = styled.small`
  color: #999;
  font-size: .65em;
  letter-spacing: .1em;
`

const Footer = () => (
  <Wrapper>
    <Container>
      <ul>
        <li>
          <a href="https://twitter.com/wowr_t">
            <Twitter size="20" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/akihiro.tamura.75436">
            <Facebook size="20" />
          </a>
        </li>
        <li>
          <a href="https://dribbble.com/wowr_t">
            <Dribbble size="20" />
          </a>
        </li>
      </ul>
      <Copy>&copy;AKIHIRO TAMURA DESIGN STUDIO</Copy>
    </Container>
  </Wrapper>
)

export default Footer
