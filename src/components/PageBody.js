import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};
  padding: 0 4em;
  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    padding: 0em;
  }

  h1,
  h2,
  h3 {
    font-weight: 300;
    line-height: 1;
    margin: 0 0 0.5em 0;
    text-transform: capitalize;
  }

  h1 {
    letter-spacing: .1em;
    font-size: 1.5em;
  }
  h2 {
    font-size: 1.25em;
  }
  h3 {
    font-size: 1em;
  }

  span {
    font-size: .95em;
    latter-spacing: .1em;
    color: ${props => props.theme.colors.secondary};
  }

  p {
    font-size: .9em;
    line-height: 1.8em;
    margin: 0 0 2em 0;
  }

  a {
    transition: 0.2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }

  del {
    text-decoration: line-through;
  }
  strong {
    font-weight: 600;
  }
  em {
    font-style: italic;
  }

  ul,
  dl,
  ol {
    font-size: .95em;
    margin: 3em 0;
  }

  dl {
    dd {
      list-style: none;
      list-style-position: inside;
      color: ${props => props.theme.colors.base};
      margin: 0.5em 0 2em;
    }
  }

  dl {
    dt {
      list-style: none;
      list-style-position: inside;
      color: ${props => props.theme.colors.secondary};
      width: 150px;
      }
    }
  }

  hr {
    border-style: solid;
    border-color: ${props => props.theme.colors.secondary};
    margin: 0 0 2em 0;
  }

  blockquote {
    font-style: italic;
    border-left: 4px solid ${props => props.theme.colors.secondary};
    padding: 0 0 0 0.5em;
  }

  pre {
    margin: 0 0 2em 0;
    border-radius: 2px;
    background: ${props => props.theme.colors.secondary} !important;
    span {
      background: inherit !important;
    }
  }
`

const PageBody = props => {
  return (
    <Body
      dangerouslySetInnerHTML={{ __html: props.body.childMarkdownRemark.html }}
    />
  )
}

export default PageBody
