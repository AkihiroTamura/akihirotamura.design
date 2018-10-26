import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
`
const Message = styled.span`
  color: ${props => props.theme.colors.secondary};
  flex-flow: row wrap;
  display: inline-block;
  font-family: 'Helvetica Neue';
  font-size: 5.2em;
  font-weight: 600;
  line-height: 1.1em;
  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    line-height: 1.22em;
    font-size: 2em;
  }
`
const ProjectList = props => {
  return (
    <List>
      <Message>Hi. I'm Akihiro Tamura, UI Designer based in Tokyo. I designed&nbsp;{props.children}etc...</Message>
    </List>
  )
}

export default ProjectList
