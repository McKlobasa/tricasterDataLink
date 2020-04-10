import React from 'react'
import styled from 'styled-components'
import TextInput from './FastTextInput.js'

const Container = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 30% auto;
  grid-template-rows: 10% 10% auto;
  color: grey;
  font-size: 1em;
  column-gap: 10px;
  row-gap: 15px;
  padding: 20px;
  border: 1px solid lightgrey;
  border-radius: 5px;
`
const TitleName = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
`
const TitleContent = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
`
const ContentName = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
`
const ContentContent = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
`
const Push = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
`

function ContentBox (props) {
  return(
    <Container>
      <TitleName>{`${props.titleDataLink} : `}</TitleName>
      <TitleContent><TextInput text={props.title} setText={props.setTitle} /></TitleContent>
      <ContentName>{`${props.contentDataLink} : `}</ContentName>
      <ContentContent><TextInput text={props.content} setText={props.setContent} /></ContentContent>
      <Push><button>PUSH</button></Push>
    </Container>
  )
}

export default ContentBox
