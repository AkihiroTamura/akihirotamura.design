import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Wrapper = styled.div`
  width: 100%;
  padding: 1.25em 2.75em;
  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    padding: 1.25em;
  }
`

const Box = styled.div`
  width: 55%;
  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    width: 100%;
  }
  a {
    font-size: 0.75em;
    color: #000;
    text-decoration: none;
    transition: 0.2s;
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }
`

const PreviousLink = styled(Link)`
`

const NextLink = styled(Link)`
  float: right;
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
