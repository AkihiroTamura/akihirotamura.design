import React from 'react'
import styled from 'styled-components'

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3em;
  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    grid-template-columns: 1fr;
    grid-gap: 2em;
  }
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
      {props.children}
    </List>
  )
}

export default ProjectList
