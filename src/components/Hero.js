import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Wrapper = styled.section`
  position: relative;
  min-height: 300px;
`
const BgImg = styled(Img)`
  position: absolute;
  margin: 0 auto;
  z-index: -1;
  min-height: 300px;
  height: auto;
  @media (min-width: ${props => props.theme.responsive.medium}) {
    height: ${props => props.height || 'auto'};
  }
  & > img {
    object-fit: ${props => props.fit || 'cover'} !important;
    object-position: ${props => props.position || '50% 50%'} !important;
  }
`

const Title = styled.h1`
  font-size: 1.8em;
  text-transform: capitalize;
  font-weight: 400;
  text-align: center;
  margin: 2em 0 1em 0;
  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    font-size: 1.65em;
    margin: 1.5em 0 0.5em 0;
  }
  color: ${props => props.theme.colors.base};
`

const Hero = props => (
  <Wrapper>
    <BgImg
      height={props.height}
      fluid={props.image.fluid}
      backgroundColor={'#eeeeee'}
    />
    <Title>{props.title}</Title>
  </Wrapper>
)

export default Hero
