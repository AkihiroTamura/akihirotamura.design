import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import posed from 'react-pose'
import { appear, slideUp, staggerChildren } from '../styles/poses'

const Post = styled(posed.div(staggerChildren))`
  width: 100%;
  height: 100%;
  a {
    color: ${props => props.theme.colors.base};
    text-decoration: none;
  }
`

const Cover = styled(posed.div(appear))`
  text-align: center;
  .gatsby-image-wrapper {
    width: 100%;
    vertical-align: bottom;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.03);
      box-shadow: 0 0 5px 5px rgba(66,66,66,0.03);
    }
  }
`

const Title = styled(posed.p(slideUp))`
  padding: 16px;
  font-size: .9em;
  font-weight: 400;
  color: #666;
  letter-spacing: 0.04em;
`

const PostLink = styled(Link)`
`

const Project = ({ slug, heroImage, title, url, tags, body, ...props }) => {
  return (
    <Post featured={props.featured}>
      <PostLink to={`/${slug}/`}>
        <Cover>
          <Img fluid={heroImage.fluid}/>
          <Title>{title}</Title>
        </Cover>
      </PostLink>
    </Post>
  )
}

export default Project
