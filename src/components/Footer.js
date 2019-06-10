import React from 'react'
import styled from 'styled-components'
import {Twitter, Facebook, Dribbble} from 'styled-icons/fa-brands'

const Wrapper = styled.footer`
  width: 100%;
  padding: 1.25em 2.5em;
  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    padding: 0.75em 0.75em;
  }
`

const Container = styled.div`
  margin: 0 auto auto;
  width: 100%;
  font-size: 0.75em;
`

const Copy = styled.small`
  color: ${props => props.theme.colors.base};
`

const Footer = () => (
  <Wrapper>
    <Container>
      <Copy>&copy;Akihiro Tamura</Copy>
    </Container>
  </Wrapper>
)

export default Footer
