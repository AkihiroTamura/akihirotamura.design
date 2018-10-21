import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import posed from 'react-pose'
import { appear, slideUp, staggerChildren } from '../styles/poses'

const Post = styled(posed.div(staggerChildren))`
  display: inline-block;
  position: relative;
  transition: background 0.2s;

  a {
    color: ${props => props.theme.colors.highlight};
    text-decoration: none;
  }
`

const Cover = styled(posed.span(appear))`
  position: relative;
  transition: none;
  z-index: -1;
  position: fixed !important;
  pointer-events: none;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  div {
    height: 100% !important;
    object-fit: cover !important;
  }
  .gatsby-image-wrapper {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s;
  }
`

const Title = styled(posed.span(slideUp))`
  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
  }
`

const PostLink = styled(Link)`
  &:hover span {
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      color: #f8f8f8;
      opacity: 1;
    }
  }
  &:hover .gatsby-image-wrapper {
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      @supports (object-fit: cover) {
        display: block;
        opacity: 1;
        visibility: visible;
      }
      &::before {
        content: '';
        background: rgba(0, 0, 0, 0.08);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        z-index: 1;
      }
    }
  }
`

const Card = ({ slug, heroImage, title, url, tags, body, ...props }) => {
  return (
    <Post featured={props.featured}>
      <PostLink to={`/${slug}/`}>
        <Cover>
          <Img fluid={heroImage.fluid} />
        </Cover>
        <Title>{title}&thinsp;/&thinsp;</Title>
      </PostLink>
    </Post>
  )
}

export default Card
