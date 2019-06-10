import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import posed from 'react-pose'

const Post = styled.div`
  width: 100%;
  height: 100%;
  a {
    color: ${props => props.theme.colors.base};
    text-decoration: none;
  }
`

const Cover = styled.div`
  .gatsby-image-wrapper {
    width: 100%;
    vertical-align: bottom;
  }
`

const Title = styled.p`
  padding-top: 1em;
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
