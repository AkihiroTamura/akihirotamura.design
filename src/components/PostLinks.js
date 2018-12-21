import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Wrapper = styled.div`
  width: 100%;
  padding: 2em;
  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    padding: 1em;
  }
`

const Box = styled.div`
  width: 55%;
  a {
    font-size: 1em;
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
