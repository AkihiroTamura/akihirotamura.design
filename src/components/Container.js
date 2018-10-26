import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  margin: 0 auto auto;
  width: 100%;
  max-width: 1400px;
  flex-grow: 1;
  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    padding: 0em 1em;
  }
`

const Container = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default Container
