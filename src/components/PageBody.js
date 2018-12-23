import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
  width: 55%;
  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    width: 100%;
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
    margin: 3em 0 1.5em;
  }
  h2 {
    font-size: 1.25em;
    margin: 3em 0 1.5em;
  }
  h3 {
    font-size: 1em;
  }

  span {
    font-size: 1em;
    latter-spacing: .1em;
    color: ${props => props.theme.colors.secondary};
  }

  p {
    font-size: 1em;
    line-height: 1.5em;
    margin-bottom: 1em;
  }

  a {
    color: #4A90E2;
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
    margin: 2em 0;
  }

  dl {
    dd {
      list-style: none;
      list-style-position: inside;
      color: ${props => props.theme.colors.base};
      margin-bottom: 1em;
    }
  }

  dl {
    dt {
      list-style: none;
      list-style-position: inside;
      color: ${props => props.theme.colors.secondary};
      margin-bottom: 0.25em;
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
