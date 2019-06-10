import React from 'react'
import styled from 'styled-components'

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3.33335em;
  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    grid-template-columns: 1fr;
    grid-gap: 3.33335em;
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
