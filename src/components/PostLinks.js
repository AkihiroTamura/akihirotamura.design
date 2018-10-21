import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Wrapper = styled.div`
  padding: 0em 1.5em 2em;
  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    padding: 3em 1em;
  }
`

const Box = styled.span`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  a {
    font-size: .9em;
    letter-spacing: 0.05em;
    position: fixed;
    top: 50%;
    color: #000;
    text-decoration: none;
    transition: 0.2s;
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    @media screen and (max-width: ${props => props.theme.responsive.medium}) {
      position: static;
    }
  }
`

const PreviousLink = styled(Link)`
  left: 2rem;
  transform: rotate(-90deg);
  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    transform: none;
  }
`

const NextLink = styled(Link)`
  right: 2rem;
  transform: rotate(90deg);
  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    transform: none;
  }
`

const PostLinks = props => {
  return (
    <Wrapper>
      <Box>
        {props.previous && (
          <PreviousLink to={`/${props.previous.slug}/`}>
            Prev
          </PreviousLink>
        )}
        {props.next && (
          <NextLink to={`/${props.next.slug}/`}>Next</NextLink>
        )}
      </Box>
    </Wrapper>
  )
}

export default PostLinks
