import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import posed from 'react-pose'

const Wrapper = styled.section`
`
const TopImg = styled(Img)`
  margin-bottom: 1em;
  @media (min-width: ${props => props.theme.responsive.medium}) {
    width: 55%;
  }
  & > img {
    object-fit: ${props => props.fit || 'cover'} !important;
    object-position: ${props => props.position || '50% 50%'} !important;
  }
`

const Title = styled.h1`
  margin-bottom: 1em;
`

const Hero = props => (
  <Wrapper>
    <Title>{props.title}</Title>
    <TopImg
      height={props.height}
      fluid={props.image.fluid}
      backgroundColor={'#eeeeee'}
    />
  </Wrapper>
)

export default Hero
