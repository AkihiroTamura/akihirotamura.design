import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const List = styled.ul`
  width: 100%;
  margin: 0 auto 4em;
  text-align: center;
  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    margin-bottom: 3em;
  }
`

const Tag = styled.li`
  display: inline-block;
  font-size: .9em;
  font-weight: 400;
  color: ${props => props.theme.colors.secondary};
  margin: 0 0.5em;
`

const TagList = props => {
  return (
    <List>
      {props.tags.map(tag => (
        <Tag key={tag.id}>{tag.title}</Tag>
      ))}
    </List>
  )
}

export default TagList
