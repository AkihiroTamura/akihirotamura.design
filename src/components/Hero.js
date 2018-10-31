import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import posed from 'react-pose'
import { slideUp } from '../styles/poses'

const Wrapper = styled.section`
  min-height: 300px;
`
const TopImg = styled(Img)`
  @media (min-width: ${props => props.theme.responsive.medium}) {
    height: ${props => props.height || 'auto'};
  }
  & > img {
    object-fit: ${props => props.fit || 'cover'} !important;
    object-position: ${props => props.position || '50% 50%'} !important;
  }
`

const Title = styled(posed.h1(slideUp))`
  font-size: 1.2em;
  text-transform: capitalize;
  font-weight: 400;
  text-align: center;
  margin: 2em 0 1em 0;
  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    font-size: 1.45em;
    margin: 1.5em 0 0.5em 0;
  }
  color: ${props => props.theme.colors.base};
`

const Hero = props => (
  <Wrapper>
    <TopImg
      height={props.height}
      fluid={props.image.fluid}
      backgroundColor={'#eeeeee'}
    />
    <Title>{props.title}</Title>
  </Wrapper>
)

export default Hero
